import ProjectCard from "../components/ProjectCard/ProjectCard";
import styles from "../components/ProjectCard/ProjectCard.module.css"; // Import CSS for styling if needed
import AnimationWrapper from "../components/ScrollAnimation/ScrollAnimation";

// Dummy data for projects
const projects = [
  {
    title: "Eid Celebration: Embrace the Joy and Festivities!",
    description: "Celebrate Eid with vibrant festivities, uniting the community in joyful experiences.",
    image: "/proj_1.webp",
    slug: "project-one",
    url: "https://eidceleberation.netlify.app",
  },
  {
    title: "🌟 Star Educators: Elevating Learning 🌟",
    description: "Transform learning with personalized content and intuitive design for better engagement.",
    image: "/proj_2.webp",
    slug: "project-two",
    url: "https://stareducators.netlify.app",
  },
  {
    title: "Dressing.pk: Your Hub for Elegant Fashion",
    description: "Explore a curated collection of trendy and elegant fashion styles for every occasion.",
    image: "/proj_3.webp",
    slug: "project-three",
    url: "https://dresspk.netlify.app/",
  },
  {
    title: "Golden Shop: Easy Add to Cart for Effortless Shopping",
    description: "Simplify your shopping experience with an easy-to-use 'Add to Cart' feature at Golden Shop.",
    image: "/proj_4.webp",
    slug: "project-four",
    url: "https://golden-product.netlify.app",
  },
  {
    title: "Headphone Landing: Personalized Segment Picks",
    description: "Get personalized headphone recommendations based on customer segmentation.",
    image: "/proj_5.png",
    slug: "project-five",
    url: "https://star-responsive-website.netlify.app/",
  },
  {
    title: "Interactive Resume Builder: Custom Sections for You",
    description: "Create personalized resumes using HTML, CSS, and TypeScript with custom sections.",
    image: "/proj_6.webp",
    slug: "project-six",
    url: "https://resume-builder-by-muhammad.vercel.app/",
  },
  {
    title: "Simple E-commerce Website with API Integration",
    description: "A simple e-commerce website built with Next.js, TypeScript, Tailwind CSS, and API integration for seamless shopping.",
    image: "/proj_7.png",
    slug: "simple-ecommerce-api",
    url: "https://my-shop-ecommerce-2024.vercel.app/"
  },
  {
    title: "Furnior E-commerce Website: Modern Shopping",
    description: "A modern e-commerce site built with Next.js, TypeScript, Tailwind CSS, and designed in Figma for an optimized shopping experience.",
    image: "/proj_8.png",
    slug: "furnior-ecommerce",
    url: "https://hackathone-2-rust.vercel.app/"
  },
  {
    title: "ShopifyX E-commerce Website: Seamless Shopping",
    description: "A full-stack e-commerce website built with Next.js, Tailwind CSS, TypeScript, and Sanity for smooth shopping.",
    image: "/proj_9.png",
    slug: "shopifyx-ecommerce",
    url: "https://full-stack-ecommerce-website-seven.vercel.app/"
  }
];


export default function Projects() {
  return (
    <div className={styles.container} id="project">
      <AnimationWrapper>
        <div>
          <h1 style={{ marginTop: "2rem" }} className={styles.heading}>
            My Projects
          </h1>
          <div className={styles.projectList}>
            {projects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </div>
      </AnimationWrapper>
    </div>
  );
}
