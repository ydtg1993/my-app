import React, {useMemo, useState, useEffect, useRef} from 'react';
import {LoadingIcon, LoadingSection, Section} from './style';

const BodyComponent = ({children, loadMoreData, loadMorePage}) => {
    const [isLoading, setIsLoading] = useState(false);
    const bodyRef = useRef(null);
    const isMountedRef = useRef(true);

    useEffect(() => {
        return () => {
            isMountedRef.current = false; // 组件卸载时更新isMountedRef的值
        };
    }, []);

    useEffect(() => {
        if (loadMorePage < 1) {
            return;
        }
        const handleScroll = async () => {
            const {scrollTop, clientHeight, scrollHeight} = bodyRef.current;
            const isAtBottom = scrollTop + clientHeight + 10 >= scrollHeight;
            if (isAtBottom && !isLoading) {
                setIsLoading(true);
                await loadMoreData();
                setTimeout(() => {
                    isMountedRef.current && setIsLoading(false);
                }, 300);
            }
        };

        const bodyElement = bodyRef.current;
        bodyElement.addEventListener('scroll', handleScroll);

        return () => {
            bodyElement.removeEventListener('scroll', handleScroll);
        };
    }, [loadMorePage, isLoading]);

    const loadingAnimation = useMemo(() => {
        if (loadMorePage === -1) {
            return (<LoadingSection>-END-</LoadingSection>);
        }
        if (isLoading) {
            return (<LoadingSection><LoadingIcon/></LoadingSection>);
        }
        return null;
    }, [isLoading, loadMorePage]);

    return (
        <Section ref={bodyRef}>
            {children}
            {loadingAnimation}
        </Section>
    );
};

export default BodyComponent;