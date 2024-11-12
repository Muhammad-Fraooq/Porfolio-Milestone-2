import { FaCode, FaGlobe, FaPalette, FaTachometerAlt, FaSearch, FaWrench } from "react-icons/fa";
import AnimationWrapper from "../components/ScrollAnimation/ScrollAnimation";
export default function Services() {
  return (
    <>
      <div className="services-container">
        <AnimationWrapper>
        <h1 className="services-heading">My Services</h1>
        <div className="services-list">

          {/* Frontend Development */}
          <div className="service-card">
            <div className="service-icon-heading">
              <FaCode className="service-icon" />
              <h2>Frontend Development</h2>
            </div>
            <p>
              I build responsive, fast, and user-friendly web interfaces using modern frontend technologies like React, Next.js, HTML, CSS, and JavaScript. My focus is on crafting smooth, visually engaging experiences.
            </p>
          </div>

          {/* Web Development */}
          <div className="service-card">
            <div className="service-icon-heading">
              <FaGlobe className="service-icon" />
              <h2>Web Development</h2>
            </div>
            <p>
              Specializing in full web development, I offer a wide range of services including static websites, dynamic web applications, and single-page applications (SPAs). I ensure your website is optimized for both performance and user experience.
            </p>
          </div>

          {/* UI/UX Design */}
          <div className="service-card">
            <div className="service-icon-heading">
              <FaPalette className="service-icon" />
              <h2>UI/UX Design</h2>
            </div>
            <p>
              I design intuitive and beautiful interfaces with a user-centered approach. My UI/UX designs aim to provide an excellent balance between functionality and aesthetics, ensuring users have a seamless experience.
            </p>
          </div>

          {/* Performance Optimization */}
          <div className="service-card">
            <div className="service-icon-heading">
              <FaTachometerAlt className="service-icon" />
              <h2>Performance Optimization</h2>
            </div>
            <p>
              By enhancing site performance, I help businesses reduce load times, boost SEO, and improve user satisfaction. This includes optimizing assets, code splitting, and caching strategies.
            </p>
          </div>

          {/* SEO Optimization */}
          <div className="service-card">
            <div className="service-icon-heading">
              <FaSearch className="service-icon" />
              <h2>SEO Optimization</h2>
            </div>
            <p>
              I implement best SEO practices to increase your website’s visibility on search engines. This includes on-page optimization, fast-loading web pages, and mobile-friendly design.
            </p>
          </div>

          {/* Maintenance & Support */}
          <div className="service-card">
            <div className="service-icon-heading">
              <FaWrench className="service-icon" />
              <h2>Maintenance & Support</h2>
            </div>
            <p>
              I provide ongoing website maintenance and support services to ensure your website stays up-to-date, secure, and optimized. This includes bug fixes, feature updates, and performance improvements.
            </p>
          </div>

        </div>
        </AnimationWrapper>
      </div>
    </>
  );
}
