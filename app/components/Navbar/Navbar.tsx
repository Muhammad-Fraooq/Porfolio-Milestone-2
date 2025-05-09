"use client";
import Link from "next/link";
import { useState } from "react";
import styles from "../Navber.module.css";
import { FaDownload } from "react-icons/fa";
import Image from "next/image";
import LOGO from "@/public/logo.jpeg"
export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  // Toggle the menu open/close
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Close the menu when a link is clicked
  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <Link href="/" onClick={closeMenu}>
          <Image className={styles.logo} src={LOGO} alt="logo"/>
        </Link>

        <div className={styles.hamburger} onClick={toggleMenu}>
          <span className={isOpen ? styles.barOpen : styles.bar}></span>
          <span className={isOpen ? styles.barOpen : styles.bar}></span>
          <span className={isOpen ? styles.barOpen : styles.bar}></span>
        </div>

        <ul className={`${styles.navLinks} ${isOpen ? styles.navActive : ""}`}>
          <li onClick={closeMenu}><Link href="/" className={styles.navLink}>Home</Link></li>
          <li onClick={closeMenu}><Link href="/about" className={styles.navLink}>About</Link></li>
          <li onClick={closeMenu}><Link href="/services" className={styles.navLink}>Services</Link></li>
          <li onClick={closeMenu}><Link href="/project" className={styles.navLink}>Project</Link></li>
          <li onClick={closeMenu}><Link href="/contact" className={styles.navLink}>Contact</Link></li>

          {/* Download CV button */}
          <div className={styles.navBtn}>
            <Link href="/pdf.pdf" download className="btn btn-nav" onClick={closeMenu}>
              <FaDownload /> Download CV
            </Link>
          </div>
        </ul>
      </nav>
    </header>
  );
}
