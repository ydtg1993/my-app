import React, { useEffect } from 'react';
import {img_nav, gif_finn, gif_search, svg_loading, img_back} from '../../resource'

const ImagePreloader = () => {
    useEffect(() => {
        // 在此处加载所需的图片
        const imageUrls = [
            svg_loading,
            img_back,
            img_nav,
            gif_finn,
            gif_search
        ];

        // 创建一个 Image 对象来预加载图片
        imageUrls.forEach((url) => {
            const image = new Image();
            image.src = url;
        });
    }, []);

    return null; // 预加载组件不需要渲染任何内容，返回 null
};

export default ImagePreloader;