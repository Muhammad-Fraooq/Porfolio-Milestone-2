"use client";
import React, { useState, useEffect } from "react";
import { FaHtml5, FaCss3Alt, FaJs, FaReact } from "react-icons/fa";
import { SiTypescript, SiNextdotjs } from "react-icons/si";
import styles from "../RotatingServices.module.css";
import { Service } from "@/types/page";
import AnimationWrapper from "../ScrollAnimation/ScrollAnimation";

const services: Service[] = [
  {
    name: "HTML",
    description: "Structure web pages with HTML.",
    color: "#FF6B6B",
    icon: <FaHtml5 />,
  },
  {
    name: "CSS",
    description: "Style web pages with CSS.",
    color: "#4FC3F7",
    icon: <FaCss3Alt />,
  },
  {
    name: "JavaScript",
    description: "Add interactivity with JavaScript.",
    color: "#FFC75F",
    icon: <FaJs />,
  },
  {
    name: "React",
    description: "Build UI components with React.",
    color: "#61DBFB",
    icon: <FaReact />,
  },
  {
    name: "TypeScript",
    description: "Use static typing with TypeScript.",
    color: "#007ACC",
    icon: <SiTypescript />,
  },
  {
    name: "Next.js",
    description: "Build fast web apps with Next.js.",
    color: "#33CCCC",
    icon: <SiNextdotjs />,
  },
];

const RotatingServices: React.FC = () => {
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % services.length);
      setSelectedService(services[(currentIndex + 1) % services.length]);
    },1000);

    return () => clearInterval(interval);
  }, [currentIndex]);
  
  return (
    <AnimationWrapper>
    <div className={styles.skillsAndCircle}>
    {/* Left Side - Skills Section */}
    <div className={styles.skillsSection}>
      <h2>Skills</h2>
      <div className={styles.skill}>
        <p>HTML5 / CSS3 80%</p>
        <div className={styles.progressBar}>
          <div className={styles.progress} style={{ width: "80%" }}></div>
        </div>
      </div>
      <div className={styles.skill}>
        <p>JavaScript / TypeScript 80%</p>
        <div className={styles.progressBar}>
          <div className={styles.progress} style={{ width: "80%" }}></div>
        </div>
      </div>
      <div className={styles.skill}>
        <p>Web Design 60%</p>
        <div className={styles.progressBar}>
          <div className={styles.progress} style={{ width: "60%" }}></div>
        </div>
      </div>
      <div className={styles.skill}>
        <p>UI / UX Design 85%</p>
        <div className={styles.progressBar}>
          <div className={styles.progress} style={{ width: "85%" }}></div>
        </div>
      </div>
      <div className={styles.skill}>
        <p>React.js / Next.js 60%</p>
        <div className={styles.progressBar}>
          <div className={styles.progress} style={{ width: "60%" }}></div>
        </div>
      </div>
      <div className={styles.skill}>
        <p>Git / Github 70%</p>
        <div className={styles.progressBar}>
          <div className={styles.progress} style={{ width: "70%" }}></div>
        </div>
      </div>
    </div>

    {/* Right Side - Rotating Services */}
    <div className={styles.container}>
      <div
        className={styles.centralCircle}
        style={{
          color: selectedService?.color ? "aqua" : "#333",
          backgroundColor: selectedService?.color || "transparent",
        }}
      >
        {selectedService ? (
          <p>{selectedService.description}</p>
        ) : (
          <p className={styles.hoverText}>SKILLS</p>
        )}
      </div>
      <div className={styles.outerCircle}>
        {services.map((service, index) => (
          <div
            key={index}
            className={styles.smallCircle}
            style={{ backgroundColor: service.color }}
            onMouseEnter={() => setSelectedService(service)}
            onMouseLeave={() => setSelectedService(null)}
          >
            <span className={styles.circleText}>{service.name}</span>
          </div>
        ))}
      </div>
    </div>
  </div>
  </AnimationWrapper>

  );
};
export default RotatingServices;