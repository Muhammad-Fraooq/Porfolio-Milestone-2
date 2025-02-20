import { Params } from '@/types/page';
import Image from 'next/image';


// Project component that displays project details
const Project: React.FC<Params> = ({ params }) => {
    const { slug } = params;

    // Example project data for demonstration; replace with a real data fetch if needed
    const projectData = {
        title: 'Portfolio Website',
        description: 'A personal portfolio website showcasing my projects and skills.',
        image: '/proj_1.jpg', // Ensure this path is correct and the image exists
        slug: slug,
    };

    return (
        <div>
            <h1>{projectData.title}</h1>
            <Image 
                src={projectData.image}
                alt={projectData.title}
                width={800}
                height={600}
            />
            <p>{projectData.description}</p>
            <p>Slug: {slug}</p> {/* Displaying the slug for reference */}
        </div>
    );
};

export default Project;
