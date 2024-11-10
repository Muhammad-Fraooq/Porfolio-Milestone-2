// Footer.js
import Link from "next/link";
import styles from "../Footer.module.css"; // Ensure you have a CSS module for styling
import { FaFacebook, FaGithub,FaLinkedin } from "react-icons/fa"; // Importing icons

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.footer1}>
          <div className={styles.logoBrand}>
            <Link href="/" className={styles.footerSubheading}>
            👋My Portfolio!⭐
            </Link>
          </div>
          <p>
            🚀I’m a frontend developer passionate
            about creating user-friendly web applications. Let’s connect!⭐
          </p>

          <div className={styles.socialFooterIcons}>
            <Link
              href="https://www.facebook.com/profile.php?id=61557075680613&mibextid=ZbWKwL"
              target="_blank"
            >
              <FaFacebook size={24} />
            </Link>
            <Link href="https://github.com/Muhammad-Fraooq" target="_blank">
              <FaGithub size={24} />
            </Link>
            <Link href="https://www.linkedin.com/in/muhammad-farooq-developer/" target="_blank">
              <FaLinkedin size={24} />
            </Link>
          </div>
        </div>

        <div className={styles.footer2}>
          <p className={styles.footerSubheading}>Courses</p>
          <ul className={styles.courseList}>
            <li className={styles.courseItem}>
              <Link className={styles.link} href="/">
              HTML5
              </Link>
            </li>
            <li className={styles.courseItem}>
              <Link className={styles.link} href="/">
                CSS3
              </Link>
            </li>
            <li className={styles.courseItem}>
              <Link className={styles.link} href="/">
                JavaScript
              </Link>
            </li>
            <li className={styles.courseItem}>
              <Link className={styles.link} href="/">
                React
              </Link>
            </li>
            <li className={styles.courseItem}>
              <Link className={styles.link} href="/">
                Next.js
              </Link>
            </li>
          </ul>
        </div>

        <div className={styles.footer3}>
          <p className={styles.footerSubheading}>Links</p>
          <ul className={styles.linkList}>
            <li className={styles.linkItem}>
              <Link className={styles.link} href="/">
                Home
              </Link>
            </li>
            <li className={styles.linkItem}>
              <Link className={styles.link} href="/about">
                About
              </Link>
            </li>
            <li className={styles.linkItem}>
              <Link className={styles.link} href="/services">
                Services
              </Link>
            </li>
            <li className={styles.linkItem}>
              <Link className={styles.link} href="/project">
               Projects
              </Link>
            </li>
            <li className={styles.linkItem}>
              <Link className={styles.link} href="/contact">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <div className={styles.footer4}>
          <p className={styles.footerSubheading}>Projects</p>
          <ul className={styles.blogList}>
            <li className={styles.blogItem}>
              <Link className={styles.link} href="https://eidceleberation.netlify.app">
              EidCelebration
              </Link>
            </li>
            <li className={styles.blogItem}>
              <Link className={styles.link} href="https://stareducators.netlify.app">
               StarEducators
              </Link>
            </li>
            <li className={styles.blogItem}>
              <Link className={styles.link} href="https://dresspk.netlify.app/">
               Dressing.pk
              </Link>
            </li>
            <li className={styles.blogItem}>
              <Link className={styles.link} href="https://golden-product.netlify.app">
                GoldenShop
              </Link>
            </li>
            <li className={styles.blogItem}>
              <Link className={styles.link} href="https://star-responsive-website.netlify.app/">
              HeadPhone
              </Link>
            </li>
            <li className={styles.blogItem}>
              <Link className={styles.link} href="https://resume-builder-by-muhammad.vercel.app/">
              ResumeBuilder
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
