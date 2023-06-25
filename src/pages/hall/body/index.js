import React, { useState, useEffect, useRef } from 'react';
import {LoadingIcon, LoadingSection, Section} from './style';

const BodyComponent = ({ children, loadMoreData,loadMoreEnd }) => {
    const [isBottom, setIsBottom] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const bodyRef = useRef(null);

    const scrollEvent = () => {
        const handleScroll = () => {
            const { scrollTop, clientHeight, scrollHeight } = bodyRef.current;
            const isBottom = scrollTop + clientHeight + 20 >= scrollHeight;
            setIsBottom(isBottom);
        };

        const bodyElement = bodyRef.current;
        bodyElement.addEventListener('scroll', handleScroll);
    };

    useEffect(async () => {
        scrollEvent();
        if(loadMoreEnd === 1){
            return;
        }
        if (isBottom && !isLoading) {
            setIsLoading(true);
            await new Promise((resolve) => {
                setTimeout(() => {
                    resolve();
                }, 1000);
            });
            setIsBottom(false);
            loadMoreData().finally(async () => {
                await new Promise((resolve) => {
                    setTimeout(() => {
                        resolve();
                    }, 2000);
                });
                setIsLoading(false);
            });
        }
    }, [isBottom, loadMoreData,loadMoreEnd, isLoading]);

    const loadingAnimation = () => {
        if(loadMoreEnd === 1){
            return (<LoadingSection>-END-</LoadingSection>);
        }
        if(isLoading){
            return (<LoadingSection><LoadingIcon /></LoadingSection>);
        }
    };

    return (
        <Section ref={bodyRef}>
            {children}
            {loadingAnimation()}
        </Section>
    );
};

export default BodyComponent;