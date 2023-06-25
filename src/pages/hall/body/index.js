import React, { useState, useEffect, useRef } from 'react';
import { Section } from './style';

const BodyComponent = ({children,loadMoreData}) => {
    const [isBottom, setIsBottom] = useState(false);
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
        if (isBottom) {
            loadMoreData();
        }
    }, [isBottom, loadMoreData]);

    return <Section ref={bodyRef}>{children}</Section>;
};

export default BodyComponent;