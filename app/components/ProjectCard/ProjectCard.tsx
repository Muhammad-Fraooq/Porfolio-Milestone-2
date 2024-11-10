'use client';
import Image from 'next/image';
import Link from 'next/link';
import { PageProps } from '@/types/page'; // Ensure this type includes the `url` property
import styles from './ProjectCard.module.css'; // Assuming CSS styles are in the same folder
const ProjectCard: React.FC<{ project: PageProps }> = ({ project }) => {
    return (
      <div className={styles.card}>
        {/* Image Section */}
        <div className={styles.imageWrapper}>
          <Image 
            src={project.image}      // Project image path
            alt={project.title}       // Alt text for accessibility
            priority            // Adjust as needed
            width={400}               // Adjust as needed
            height={300}              // Adjust as needed
            className={styles.image}  // CSS class for image styling
          />
        </div>
        
        {/* Project Details */}
        <div className={styles.details}>
          <h2 className={styles.title}>{project.title}</h2>
          <p className={styles.description}>{project.description}</p>
          {/* Update the link to point to the external project URL */}
          <Link href={project.url} rel="noopener noreferrer">
            <Link href="#" className='btn'>View Project</Link>
          </Link>
        </div>
      </div>
    );
  };

export default ProjectCard;
