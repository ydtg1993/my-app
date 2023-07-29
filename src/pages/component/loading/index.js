import React, { useEffect, useRef } from 'react';

const LoadingAnimation = () => {
    const canvasRef = useRef(null);
    const contentRef = useRef(null);
    const animationIdRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if(window.innerWidth>1024){
            canvas.width = 1024
        }else {
            canvas.width = window.innerWidth;
        }
        canvas.height = window.innerHeight;

        const content = canvas.getContext('2d');
        contentRef.current = content;

        let r = 0; //旋转角度
        let p = 0; //透明度

        const draw = () => {
            const zxy = canvas.width / 2;
            const zxx = canvas.height / 2;

            content.clearRect(0, 0, canvas.width, canvas.height);
            content.save();
            //渐变填充
            const tmp = content.createRadialGradient(zxx, zxy, 20, zxx, zxy, 1200);
            tmp.addColorStop(0, '#f6f6f3');
            tmp.addColorStop(1, '#f3ff8e');
            content.fillStyle = tmp;
            content.fillRect(0, 0, canvas.width, canvas.height);

            content.translate(zxx, zxy);
            content.save();
            content.lineWidth = 3;
            if (p >= 0.7) {
                p = 0;
            }
            content.fillStyle = `rgba(160, 160, 160, ${p})`;
            content.fillText('Loading', -20, 3);
            content.strokeStyle = 'rgba(0, 0, 0, 0.3)';
            for (let i = 1; i < 9; i++) {
                content.beginPath();
                content.rotate(45 * Math.PI / 180);
                content.arc(0, 0, 30, 0, 320 * Math.PI / 180, true);
                content.stroke();
            }

            content.restore();
            content.lineWidth = 2;
            content.strokeStyle = 'rgba(0, 0, 0, 0.5)';
            for (let p = 1; p <= 4; p++) {
                content.beginPath();
                content.rotate(r);
                if (p % 2) {
                    content.arc(0, 0, 34 + p * 2, 0, 260 * Math.PI / 180, true);
                } else {
                    content.arc(0, 0, 34 + p * 2, 0, 50 * Math.PI / 180, false);
                }
                content.stroke();
            }

            r += 0.05;
            p += 0.05;
            content.restore();
            animationIdRef.current = requestAnimationFrame(draw);
        };

        draw();

        return () => {
            cancelAnimationFrame(animationIdRef.current);
        };
    }, []);

    return (
        <canvas ref={canvasRef}></canvas>
    );
};

export default LoadingAnimation;
