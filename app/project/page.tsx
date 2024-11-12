import ProjectCard from "../components/ProjectCard/ProjectCard";
import styles from "../components/ProjectCard/ProjectCard.module.css"; // Import CSS for styling if needed
import AnimationWrapper from "../components/ScrollAnimation/ScrollAnimation";

// Dummy data for projects
const projects = [
  {
    title: "Eid Celebration: Embrace the Joy and Festivities!",
    description:
      "Celebrated Eid by uniting our community with vibrant festivities and joyful experiences.",
    image: "/proj_1.webp", // Add your image path here
    slug: "project-one", // Unique slug for internal routing (if needed)
    url: "https://eidceleberation.netlify.app", // External link
  },
  {
    title: "🌟 Star Educators: Elevating Learning 🌟",
    description:
      "Star Educators 🌟: Transforming learning with personalized content and intuitive design",
    image: "/proj_2.webp",
    slug: "project-two",
    url: "https://stareducators.netlify.app", // Update with actual URL
  },
  {
    title: "Dressing.pk: Your Hub for Elegant Fashion",
    description:
      "Dressing.pk: Explore our curated collection of trendy and elegant fashion styles just for you.",
    image: "/proj_3.webp",
    slug: "project-three",
    url: "https://dresspk.netlify.app/", // Update with actual URL
  },
  {
    title: "Golden Shop: Easy Add to Cart for Effortless Shopping",
    description:
      "Golden Shop: Add to Cart Feature – Simplify shopping with our easy “Add to Cart” option.",
    image: "/proj_4.webp",
    slug: "project-four",
    url: "https://golden-product.netlify.app", // Update with actual URL
  },
  {
    title: "Headphone Landing: Personalized Segment Picks",
    description:
      "Headphone Landing: Get personalized headphone picks with customer segmentation.",
    image: "/proj_5.png",
    slug: "project-five",
    url: "https://star-responsive-website.netlify.app/", // Update with actual URL
  },
  {
    title: "Interactive Resume Builder: Custom Sections for You",
    description:
      "Interactive Resume Builder: Create personalized resumes using HTML, CSS, and TypeScript.",
    image: "/proj_6.webp",
    slug: "project-six",
    url: "https://resume-builder-by-muhammad.vercel.app/", // Update with actual URL
  },
  // Add more projects as needed
];

export default function Projects() {
  return (
    <div className={styles.container}>
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
