import React, { useState, useEffect, useRef } from 'react';
import {LoadingIcon, LoadingSection, Section} from './style';

const BodyComponent = ({ children, loadMoreData }) => {
    const [isBottom, setIsBottom] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const bodyRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            const { scrollTop, clientHeight, scrollHeight } = bodyRef.current;
            const isBottom = scrollTop + clientHeight + 20 >= scrollHeight;

            setIsBottom(isBottom);
        };

        const bodyElement = bodyRef.current;
        bodyElement.addEventListener('scroll', handleScroll);

        return () => {
            bodyElement.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
        if (isBottom && !isLoading) {
            setIsLoading(true);
            loadMoreData().finally(() => {
                setTimeout(() => {
                    setIsLoading(false);
                }, 2000);
            });
        }
    }, [isBottom, loadMoreData, isLoading]);

    return (
        <Section ref={bodyRef}>
            {children}
            {isLoading && <LoadingSection><LoadingIcon /></LoadingSection>}
        </Section>
    );
};

export default BodyComponent;