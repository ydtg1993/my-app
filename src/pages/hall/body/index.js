import React, {useState, useEffect, useRef} from 'react';
import {LoadingIcon, LoadingSection, Section} from './style';

const BodyComponent = ({children, loadMoreData, loadMoreEnd}) => {
    const [isBottom, setIsBottom] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const bodyRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            const {scrollTop, clientHeight, scrollHeight} = bodyRef.current;
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
        if (loadMoreEnd === 1) {
            return;
        }
        if (isBottom && !isLoading) {
            setIsLoading(true);
            setTimeout(() => {
                setIsBottom(false);
                loadMoreData().finally(async () => {
                    setTimeout(() => {
                        setIsLoading(false);
                    }, 2000);
                });
            }, 1000);
        }
    }, [isBottom, loadMoreData, loadMoreEnd, isLoading]);

    const loadingAnimation = () => {
        if (loadMoreEnd === 1) {
            return (<LoadingSection>-END-</LoadingSection>);
        }
        if (isLoading) {
            return (<LoadingSection><LoadingIcon/></LoadingSection>);
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