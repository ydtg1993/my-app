import React, {useEffect, useRef} from 'react';

const ImageLazy = (props) => {
    const { src, alt, 'data-src': dataSrc,options } = props; // 解构获取属性值

    const imgRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        if (imgRef.current) {
                            imgRef.current.src = dataSrc; // 使用 data-src 属性值作为 src
                            observer.unobserve(entry.target);
                        }
                    }
                });
            },
            options // 根据需要调整阈值
        );

        if (imgRef.current) {
            observer.observe(imgRef.current);
        }

        return () => {
            if (imgRef.current) {
                observer.unobserve(imgRef.current);
            }
        };
    }, [dataSrc]);

    return (
        <img ref={imgRef} src={src} alt={alt} />
    );
};

export default React.memo(ImageLazy);