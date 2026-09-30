import yelpcampImage from "../assets/yelpcamp.png";
import paryavaranImage from "../assets/paryavaran-kavalu.png";
import tshirtImage from "../assets/tshirt-shopping.png";
import actionRecognitionImage from "../assets/human-action-recognition.png";

function Projects() {
  const projects = [
    {
      title: "YelpCamp",
      image: yelpcampImage,
      description:
        "A full-stack campground platform where users can explore, create, edit, and review campgrounds with secure authentication and authorization.",
      technologies: [
        "Node.js",
        "Express.js",
        "MongoDB",
        "Mongoose",
        "EJS",
        "Passport.js",
        "Cloudinary",
      ],
      github: "https://github.com/Pavan-P45/Yelpcamp",
    },
    {
      title: "Paryavaran Kavalu",
      image: paryavaranImage,
      description:
        "A smart waste management Android application that allows citizens to report public waste issues using image uploads and GPS-based location tagging.",
      technologies: [
        "Kotlin",
        "Firebase",
        "Google Maps API",
        "GPS",
        "Android Studio",
      ],
      github: "https://github.com/Pavan-P45/Paryavaran-Kavalu",
    },
    {
      title: "T-Shirt Shopping",
      image: tshirtImage,
      description:
        "A full-stack e-commerce application for browsing products, managing cart items, placing orders, and handling products and inventory through an admin system.",
      technologies: [
        "MongoDB",
        "Express.js",
        "Node.js",
        "HTML",
        "CSS",
        "JavaScript",
      ],
      github: "https://github.com/Pavan-P45/Online-T-Shirt-Booking",
    },
    {
      title: "Human Action Recognition",
      image: actionRecognitionImage,
      description:
        "A real-time computer vision system that recognizes human actions from webcam video using a trained ResNet deep learning model.",
      technologies: [
        "Python",
        "OpenCV",
        "Deep Learning",
        "ResNet",
        "Computer Vision",
      ],
      github: "https://github.com/Pavan-P45/Human-action-recognition",
    },
  ];
  return (
    <section id="projects" className="section">
      <div className="section-container">
        <div className="section-heading">
          <span>04.</span>
          <h2>Projects</h2>
        </div>
        <div className="projects-grid">
          {projects.map((project) => (
            <div className="project-card" key={project.title}>
              <a href={project.github} target="_blank" rel="noreferrer"><img src={project.image} alt={`${project.title} project screenshot`} className="project-image"/></a>
              <div className="project-top">
                <a href={project.github} target="_blank" rel="noreferrer" className="project-github">View on GitHub ↗</a>
              </div>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="project-tech">
                {project.technologies.map((technology) => (
                  <span key={technology}>
                    {technology}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;