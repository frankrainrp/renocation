import Link from 'next/link';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer} id="site-footer">
      <div className={styles.footerInner}>
        {/* Top Section */}
        <div className={styles.footerTop}>
          {/* Brand */}
          <div className={styles.footerBrand}>
            <h3 className={styles.footerLogo}>ARGO</h3>
            <p className={styles.footerLogoSub}>SPACE DESIGN · 极屿</p>
            <div className={styles.divider}></div>
            <p className={styles.footerTagline}>
              &quot;Every great home begins with a voyage.&quot;
            </p>
          </div>

          {/* Navigation */}
          <div className={styles.footerColumn}>
            <h6 className={styles.footerColumnTitle}>Navigation</h6>
            <Link href="/" className={styles.footerLink}>Home</Link>
            <Link href="/products" className={styles.footerLink}>Products</Link>
            <Link href="/customization" className={styles.footerLink}>Customization</Link>
            <Link href="/cases" className={styles.footerLink}>Cases</Link>
          </div>

          {/* Services */}
          <div className={styles.footerColumn}>
            <h6 className={styles.footerColumnTitle}>Services</h6>
            <Link href="/products/hard-material" className={styles.footerLink}>Hard Material</Link>
            <Link href="/products/soft-decoration" className={styles.footerLink}>Soft Decoration</Link>
            <Link href="/customization" className={styles.footerLink}>Whole House</Link>
            <Link href="/track-order" className={styles.footerLink}>Track Order</Link>
          </div>

          {/* Contact */}
          <div className={styles.footerColumn}>
            <h6 className={styles.footerColumnTitle}>Contact</h6>
            <a href="https://wa.me/6500000000" className={styles.footerLink} target="_blank" rel="noopener noreferrer">WhatsApp</a>
            <a href="mailto:info@argospacedesign.com" className={styles.footerLink}>Email</a>
            <a href="https://instagram.com" className={styles.footerLink} target="_blank" rel="noopener noreferrer">Instagram</a>
            <a href="https://facebook.com" className={styles.footerLink} target="_blank" rel="noopener noreferrer">Facebook</a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className={styles.footerBottom}>
          <p className={styles.copyright}>
            © {new Date().getFullYear()} ARGO SPACE DESIGN PTE. LTD. All rights reserved.
          </p>
          <div className={styles.footerBottomLinks}>
            <a href="#" className={styles.footerSmallLink}>Privacy Policy</a>
            <a href="#" className={styles.footerSmallLink}>Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
