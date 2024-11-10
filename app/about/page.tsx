import Image from "next/image";
import ProfilePic from "@/public/my-pic.jpg";
import RotatingServices from "../components/RotatingServices/RotatingServices";
import { FaDownload } from "react-icons/fa";

export default function About() {
  return (
    <>
      <div className="container">
        <div className="image-container">
          <Image
            src={ProfilePic}
            alt="Muhammad Farooq"
            className="profile-image-about"
            width={250}
            height={250}
            objectFit="cover"
          />
        </div>
        <div className="text-container-about">
          <h1>About Me</h1>
          <h2>Frontend Developer with One Year of Experience</h2>
          <p className="about-para">
            I am Muhammad Farooq, a passionate frontend developer with a year of
            experience in creating responsive, user-friendly web interfaces.
            Proficient in HTML, CSS, JavaScript, and frontend frameworks, I
            specialize in building interactive websites that prioritize
            performance and user experience. I am always eager to learn and
            adapt to the latest industry trends and technologies to deliver
            efficient and visually appealing solutions.
          </p>
          {/* Frontend Skills Section */}
          <div>
            <div>
              <RotatingServices />
            </div>
            {/* Download CV Button */}
            <div className="about-btn">
              <a href="/cv.pdf" download className="btn">
                <FaDownload />
                Download CV
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
