import React from "react";
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

import { motion } from "framer-motion";

import "./edu.css";

const educationData = [
  {
    institution: "Shree MurthuKumaraSwamy Collage ",
    degree: "Bachelor of Commerce & Computer Application ",
    year: "2021 - 2024",
    description:
      "Learned programming lanuages and Accounts",
  },
  {
    institution: "Shree A.G.Jain.Her.Sec.School",
    degree: "6-12th",
    year: "2016 - 2021",
    description: "Focused on science and mathematics with excellent grades.",
  },
  {
    institution: "LOGIN 360 Instution",
    degree: "JAVA FULLSTACK DEVLOPER",
    year: "2025",
    description: "Focused on JAVA,REACT JS , SPRING BOOT",
  },
];

function Education () {
  return (
    <div className="education-section">
      <h2 className="section-title">Education</h2>
      <VerticalTimeline>
        {educationData.map((item, index) => (
          <VerticalTimelineElement key={index} className="timeline-item" >
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.3 }}
              viewport={{ once: true }}
            >
              <h3 className="institution">{item.institution}</h3>
              <h4 className="degree">{item.degree}</h4>
              <span className="year">{item.year}</span>
              <p className="description">{item.description}</p>
            </motion.div>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </div>
  );
};

export default Education;
