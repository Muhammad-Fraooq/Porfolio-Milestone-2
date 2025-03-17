import Image from "next/image";
import ProfilePic from "@/public/about.jpg";
import RotatingServices from "../components/RotatingServices/RotatingServices";  
import TypingWriter from "../components/TypingWritter";

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
            />
          </div>
          <div className="text-container-about">
            <h1>About Me</h1>
            <TypingWriter/>
            <p className="about-para">
              I am Muhammad Farooq, a passionate frontend developer with a year of
              experience in creating responsive, user-friendly web interfaces.
              Proficient in HTML, CSS, JavaScript, and frontend frameworks, I
              specialize in building interactive websites that prioritize
              performance and user experience. I am always eager to learn and
              adapt to the latest industry trends and technologies to deliver
              efficient and visually appealing solutions.
            </p>
              <RotatingServices />
          </div>
      </div>
    </>
  );
}
