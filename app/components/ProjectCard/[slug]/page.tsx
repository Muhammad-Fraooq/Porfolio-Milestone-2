import Image from 'next/image';
import { useRouter } from 'next/router';
import { Params } from '@/types/page'; // Replace with your actual Params type

// Project component that displays project details
const Project: React.FC<{ project: { title: string; description: string; image: string; slug: string } }> = ({ project }) => {
  const router = useRouter();
  const { slug } = router.query;

  return (
    <div>
      <h1>{project.title}</h1>
      <Image 
        src={project.image}
        alt={project.title}
        width={800}
        height={600}
      />
      <p>{project.description}</p>
      <p>Slug: {slug}</p> {/* Displaying the slug for reference */}
    </div>
  );
};

export default Project;

// Fetch project data based on slug
export async function getStaticProps({ params }: { params: Params }) {
  // Example project data; in a real case, fetch this from your CMS or API
  const projectData = {
    title: 'Portfolio Website',
    description: 'A personal portfolio website showcasing my projects and skills.',
    image: '/proj_1.jpg', // Ensure this path is correct and the image exists
    slug: params.slug,
  };

  return { props: { project: projectData } };
}

// Define the paths for static generation
export async function getStaticPaths() {
  const paths = [
    { params: { slug: 'portfolio-website' } }, // Use a slug without URL
    { params: { slug: 'dresspk' } },          // Use a slug without URL
    // Add more project slugs here
  ];
  return { paths, fallback: false };
}
