import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { motion } from "framer-motion";
import "./pro.css";
import sql from "../portfolioimges/project.jpg";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..
AOS.init();

const projects = [
  {
    title: "Bus Ticket Reservation",
    description:
      "A web application for booking bus tickets with real-time seat selection and payment integration.",
    image: "https://picsum.photos/seed/1/800/600",
    link: "#",
    languages: "React, Java, SpringBoot,Postgrsql",
    github: "https://github.com/saravananjr11/BusTicketReservationAPI-S.git",
  },
  {
    title: "Portfolio",
    description:
      "A personal portfolio showcasing my projects, skills, and contact information.",
    image: "https://picsum.photos/seed/2/800/600",
    link: "#",
    languages: "React, CSS",
    github: "https://github.com/yourusername/portfolio",
  },
  {
    title: "Travel Website",
    description:
      "An interactive travel website with destination guides, booking options, and user reviews.",
    image: "https://picsum.photos/seed/3/800/600",
    link: "#",
    languages: "HTML,CSS,JS,BOOTSTRAP ",
    github: "https://github.com/saravananjr11/Travel.git",
  },
  {
    title: "Project $",
    description:
      "Comming Soon",
    image: "https://picsum.photos/seed/3/800/600",
    link: "#",
    languages: " ",
    github: "",
  },
];

function Project() {
  return (
    <div className="project-section">
      <h2 className="section-title">Projects</h2>
      <div className="projects-container"  data-aos="flip-left"
            data-aos-easing="ease"
            data-aos-duration="2000"
            data-aos-delay="0"
            
            data-aos-mirror="true"
            data-aos-once="false">
        {projects.map((project, index) => (
          <motion.div
            className="project-card"
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.3 }}
            whileHover={{ scale: 1.05 }}
           
          >
            <img
              src={project.image}
              alt={project.title}
              className="project-image"
            />
            <h3 className="project-title">{project.title}</h3>
            <p className="project-description">{project.description}</p>
            <p className="project-languages">
              <strong>Languages:</strong> {project.languages}
            </p>
            <div className="button-container">
              <motion.a
                href={project.github}
                className="project-github"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <img
                  src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
                  alt="GitHub Logo"
                  className="github-logo"
                />
                GitHub
              </motion.a>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Project;
