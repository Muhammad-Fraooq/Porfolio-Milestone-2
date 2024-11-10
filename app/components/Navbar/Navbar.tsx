"use client";
import Link from "next/link";
import { useState } from "react";
import styles from "../Navber.module.css";
import { FaDownload } from "react-icons/fa";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <Link href="/">
          <h2 className={styles.logo}>Personal Portfolio</h2>
        </Link>

        <div className={styles.hamburger} onClick={toggleMenu}>
          <span className={isOpen ? styles.barOpen : styles.bar}></span>
          <span className={isOpen ? styles.barOpen : styles.bar}></span>
          <span className={isOpen ? styles.barOpen : styles.bar}></span>
        </div>

        <ul className={`${styles.navLinks} ${isOpen ? styles.navActive : ""}`}>
          <li><Link href="/" className={styles.navLink}>Home</Link></li>
          <li><Link href="/about" className={styles.navLink}>About</Link></li>
          <li><Link href="/services" className={styles.navLink}>Services</Link></li>
          <li><Link href="/project" className={styles.navLink}>Project</Link></li>
          <li><Link href="/contact" className={styles.navLink}>Contact</Link></li>
          
          {/* Download CV button at the bottom */}
          <div className={styles.navBtn}>
            <Link href="/cv.pdf" download className="btn btn-primary">
              <FaDownload /> Download CV
            </Link>
          </div>
        </ul>
      </nav>
    </header>
  );
}


{/* <div className="text-center nav-btn">
<a href="/my-\cv.pdf" download className="btn btn-primary">
<FaDownload/>
  Download CV
</a>
</div> */}