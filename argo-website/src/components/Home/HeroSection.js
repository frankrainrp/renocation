'use client';

import { useEffect, useRef } from 'react';
import styles from './HeroSection.module.css';
import ImagePlaceholder from '@/components/ImagePlaceholder/ImagePlaceholder';

export default function HeroSection() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    
    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    // Star particles
    const stars = Array.from({ length: 120 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      size: Math.random() * 1.5 + 0.5,
      speed: Math.random() * 0.3 + 0.05,
      opacity: Math.random() * 0.5 + 0.2,
      twinkle: Math.random() * Math.PI * 2,
    }));

    let animationId;
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      stars.forEach(star => {
        star.twinkle += 0.01;
        const flicker = Math.sin(star.twinkle) * 0.3 + 0.7;
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(197, 165, 90, ${star.opacity * flicker})`;
        ctx.fill();
        
        star.y += star.speed;
        if (star.y > canvas.height) {
          star.y = -5;
          star.x = Math.random() * canvas.width;
        }
      });

      animationId = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <section className={styles.hero} id="hero-section">
      {/* Background Image */}
      <div className={styles.heroBg}>
        <ImagePlaceholder
          imageId="hero-bg-001"
          alt="Dark ocean with ancient ship under starlight"
          aspect="full"
          category="brand"
          size="1920x1080"
          description="Cinematic dark ocean scene at night, an ancient wooden ship silhouette sailing through black-gold waters, starry sky above, gentle mist, deeply atmospheric and mysterious"
          priority={true}
          src="/images/hero-bg-001.jpg"
        />
      </div>

      {/* Particle Canvas */}
      <canvas ref={canvasRef} className={styles.particleCanvas} aria-hidden="true" />

      {/* Parchment Texture Overlay */}
      <div className={styles.parchmentOverlay}>
        <ImagePlaceholder
          imageId="hero-texture-001"
          alt="Ancient parchment paper texture"
          aspect="full"
          category="texture"
          size="1920x1080"
          description="Subtle aged parchment paper texture, slightly yellowed, with faint fold marks and grain, very low opacity for overlay use"
          style={{ opacity: 0.08 }}
        />
      </div>

      {/* Dark gradient overlays */}
      <div className={styles.overlayTop}></div>
      <div className={styles.overlayBottom}></div>

      {/* Content */}
      <div className={styles.heroContent}>
        <div className={styles.heroSubtitleTop}>
          <span className={styles.heroLine}></span>
          <span className={styles.heroCaption}>EST. SINGAPORE</span>
          <span className={styles.heroLine}></span>
        </div>

        <h1 className={styles.heroTitle}>
          <span className={styles.heroTitleMain}>ARGO</span>
          <span className={styles.heroTitleDivider}></span>
          <span className={styles.heroTitleSub}>SPACE DESIGN</span>
        </h1>

        <p className={styles.heroCnName}>极 屿</p>

        <div className={styles.heroDivider}></div>

        <p className={styles.heroTagline}>
          &quot;跨越重洋，只为寻回属于您的金羊毛。&quot;
        </p>
        <p className={styles.heroTaglineEn}>
          &quot;Crossing oceans, to find the Golden Fleece that is yours alone.&quot;
        </p>

        <div className={styles.heroCtas}>
          <a href="#chapter-01" className={`btn btn--primary ${styles.heroBtn}`}>
            Begin the Voyage
          </a>
          <a href="/products" className={`btn btn--outline ${styles.heroBtn}`}>
            Skip Story
          </a>
        </div>
      </div>

      {/* Quick Access */}
      <div className={styles.quickAccess}>
        <a href="/products" className={styles.quickLink}>Products</a>
        <a href="/customization" className={styles.quickLink}>Customization</a>
        <a href="/cases" className={styles.quickLink}>Cases</a>
        <a href="/contact" className={styles.quickLink}>Contact</a>
      </div>

      {/* Scroll Indicator */}
      <div className={styles.scrollIndicator}>
        <span className={styles.scrollText}>Scroll</span>
        <div className={styles.scrollLine}>
          <div className={styles.scrollDot}></div>
        </div>
      </div>
    </section>
  );
}
