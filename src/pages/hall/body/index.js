import React, {useMemo, useState, useEffect, useRef} from 'react';
import {LoadingIcon, LoadingSection, Section} from './style';

const BodyComponent = ({children, loadMoreData, loadMoreEnd, loading}) => {
    const [isLoading, setIsLoading] = useState(false);
    const bodyRef = useRef(null);

    useEffect(() => {
        if (loadMoreEnd === true || loading) {
            return;
        }
        const handleScroll = async () => {
            const {scrollTop, clientHeight, scrollHeight} = bodyRef.current;
            const isAtBottom = scrollTop + clientHeight + 10 >= scrollHeight;
            if (isAtBottom && !isLoading) {
                setIsLoading(true);
                await loadMoreData();
                setTimeout(() => {
                    setIsLoading(false);
                }, 700);
            }
        };

        const bodyElement = bodyRef.current;
        bodyElement.addEventListener('scroll', handleScroll);

        return () => {
            bodyElement.removeEventListener('scroll', handleScroll);
        };
    }, [loading, loadMoreEnd, isLoading]);

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