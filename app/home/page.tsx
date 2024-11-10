import Image from 'next/image';
import PIC from '@/public/my-pic.jpg';

export default function Home() {
  return (
    <>
      <div className="container">
        {/* Text Section */}
        <div className="text-container">
          <h1>Hy, I&apos;m Muhammad Farooq</h1>
          <h2>Frontend Developer</h2>
          <p className="about-para">
            Welcome to my personal portfolio! I am a frontend developer with one year of experience in building responsive and dynamic web applications.
          </p>
          <p className="about-para">
            Take a look at my projects below and feel free to reach out to me if you&apos;d like to collaborate!
          </p>
          <div className="mt-3">
            <a href="mailto:muhammad888xyz@gmail.com" className="btn me-3">Hire Me</a>
            <a href="https://github.com/Muhammad-Fraooq"  rel="noopener noreferrer" className="btn btn-dark">GitHub</a>
          </div>
        </div>
        
        {/* Image Section */}
        <div className="profile-section">
          <div className="image-container">
            <Image 
              src={PIC} 
              alt="Muhammad Farooq" 
              className="profile-image"
              width={250}
              height={250}
              objectFit="cover"
            />
          </div>
        </div>
      </div>
    </>
  );
}
