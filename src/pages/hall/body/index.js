import React, {useMemo, useState, useEffect, useRef} from 'react';
import {LoadingIcon, LoadingSection, Section} from './style';

const BodyComponent = ({children, loadMoreData, loadMoreEnd}) => {
    const [isLoading, setIsLoading] = useState(false);
    const bodyRef = useRef(null);
    const isMounted = useRef(true);

    useEffect(() => {
        if (loadMoreEnd === true) {
            return;
        }
        const handleScroll = () => {
            const {scrollTop, clientHeight, scrollHeight} = bodyRef.current;
            const isAtBottom = scrollTop + clientHeight + 10 >= scrollHeight;
            if (isAtBottom && !isLoading) {
                setIsLoading(true);
                loadMoreData()
                    .finally(() => {
                        setTimeout(()=>setIsLoading(false),1500);
                    });
            }
        };

        const bodyElement = bodyRef.current;
        bodyElement.addEventListener('scroll', handleScroll);

        return () => {
            bodyElement.removeEventListener('scroll', handleScroll);
            isMounted.current = false;
        };
    }, [loadMoreData, isLoading, loadMoreEnd]);

    const loadingAnimation = useMemo(() => {
        if (loadMoreEnd) {
            return (<LoadingSection>-END-</LoadingSection>);
        }
        if (isLoading) {
            return (<LoadingSection><LoadingIcon/></LoadingSection>);
        }
        return null;
    }, [isLoading, loadMoreEnd]);

    return (
        <Section ref={bodyRef}>
            {children}
            {loadingAnimation}
        </Section>
    );
};

export default BodyComponent;