'use client';

import { useEffect } from 'react';

/**
 * ScrollAnimator - 全局滚动动画控制器
 * 使用 Intersection Observer 监测 .fade-in 等元素
 */
export default function ScrollAnimator() {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px',
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          // Optionally unobserve after animation
          // observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    // Observe all animation targets
    const targets = document.querySelectorAll(
      '.fade-in, .fade-in-left, .fade-in-right, .fade-in-scale'
    );
    targets.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return null; // This component renders nothing
}
