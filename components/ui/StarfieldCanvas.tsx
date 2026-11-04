'use client';

import { useEffect, useRef } from 'react';

export default function StarfieldCanvas() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId = 0;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize, { passive: true });

    const isMobile = width < 768;
    const divisor = isMobile ? 18000 : 10000;
    const starCount = Math.floor((width * height) / divisor);
    const stars: Array<{
      x: number;
      y: number;
      size: number;
      alpha: number;
      speed: number;
      pulse: number;
    }> = [];

    for (let i = 0; i < starCount; i++) {
      stars.push({
        x: Math.random() * width,
        y: Math.random() * height,
        size: Math.random() * 2 + 1,
        alpha: Math.random() * 0.4 + 0.1,
        speed: Math.random() * 0.15 + 0.05,
        pulse: Math.random() * 0.02,
      });
    }

    const render = () => {
      if (document.hidden) {
        animationFrameId = requestAnimationFrame(render);
        return;
      }

      ctx.clearRect(0, 0, width, height);

      // Render soft floating particles
      for (let i = 0; i < stars.length; i++) {
        const star = stars[i];
        star.y -= star.speed;
        if (star.y < 0) {
          star.y = height;
          star.x = Math.random() * width;
        }

        star.alpha += Math.sin(Date.now() * star.pulse) * 0.003;
        const currentAlpha = Math.max(0.08, Math.min(0.35, star.alpha));

        ctx.fillStyle = `rgba(37, 99, 235, ${currentAlpha})`;
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fill();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    // Draw initial static frame immediately
    render();
    cancelAnimationFrame(animationFrameId);

    // Delay continuous animation loop by 600ms to free up main thread during hydration
    const startTimeoutId = setTimeout(() => {
      animationFrameId = requestAnimationFrame(render);
    }, 600);

    return () => {
      window.removeEventListener('resize', handleResize);
      clearTimeout(startTimeoutId);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0 opacity-90"
    />
  );
}

