'use client';

import { useState, useEffect } from 'react';
import styles from './Navbar.module.css';
import Link from 'next/link';

const navLinks = [
  { href: '/', label: 'Home', labelCn: '首页' },
  { href: '/products', label: 'Products', labelCn: '产品' },
  { href: '/customization', label: 'Customization', labelCn: '全屋定制' },
  { href: '/cases', label: 'Cases', labelCn: '案例' },
  { href: '/track-order', label: 'Track Order', labelCn: '订单追踪' },
  { href: '/contact', label: 'Contact', labelCn: '联系我们' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [lang, setLang] = useState('en');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const toggleLang = () => setLang(lang === 'en' ? 'cn' : 'en');

  return (
    <header className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`} id="main-navbar">
      <div className={styles.navbarInner}>
        {/* Logo */}
        <Link href="/" className={styles.logo} aria-label="ARGO SPACE DESIGN Home">
          <span className={styles.logoMain}>ARGO</span>
          <span className={styles.logoDivider}></span>
          <span className={styles.logoSub}>SPACE DESIGN</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className={styles.desktopNav} aria-label="Main navigation">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className={styles.navLink}>
              {lang === 'en' ? link.label : link.labelCn}
            </Link>
          ))}
        </nav>

        {/* Right Actions */}
        <div className={styles.navActions}>
          <button
            className={styles.langSwitch}
            onClick={toggleLang}
            aria-label="Switch language"
          >
            {lang === 'en' ? '中文' : 'EN'}
          </button>

          {/* Mobile Menu Toggle */}
          <button
            className={`${styles.menuToggle} ${menuOpen ? styles.menuToggleActive : ''}`}
            onClick={toggleMenu}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`${styles.mobileMenu} ${menuOpen ? styles.mobileMenuOpen : ''}`}>
        <nav className={styles.mobileNav}>
          {navLinks.map((link, index) => (
            <Link
              key={link.href}
              href={link.href}
              className={styles.mobileNavLink}
              onClick={() => setMenuOpen(false)}
              style={{ transitionDelay: `${index * 0.05}s` }}
            >
              <span className={styles.mobileNavNumber}>0{index + 1}</span>
              <span className={styles.mobileNavLabel}>
                {lang === 'en' ? link.label : link.labelCn}
              </span>
            </Link>
          ))}
        </nav>
        <div className={styles.mobileMenuFooter}>
          <p className={styles.mobileMenuBrand}>ARGO SPACE DESIGN · 极屿</p>
          <p className={styles.mobileMenuTagline}>Every great home begins with a voyage.</p>
        </div>
      </div>
    </header>
  );
}
