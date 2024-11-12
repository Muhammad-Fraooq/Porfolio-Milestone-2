import Image from "next/image";
import ProfilePic from "@/public/my-pic.jpg";
import RotatingServices from "../components/RotatingServices/RotatingServices";
import Animation from "../components/Animation/Animation";  
import AnimationWrapper from "../components/ScrollAnimation/ScrollAnimation";

export default function About() {
  return (
    <>
      <div className="container">
        {/* Image Section with Animation */}
        <AnimationWrapper>
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
        </AnimationWrapper>

        {/* Text Section with Animation */}
        <AnimationWrapper>
          <div className="text-container-about">
            <h1>About Me</h1>
            <Animation/>
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
              <RotatingServices />
            </div>

            {/* Download CV Button (Optional) */}
            {/* <div className="about-btn">
              <a href="/cv.pdf" download className="btn">
                <FaDownload />
                Download CV
              </a>
            </div> */}
          </div>
        </AnimationWrapper>
      </div>
    </>
  );
}
