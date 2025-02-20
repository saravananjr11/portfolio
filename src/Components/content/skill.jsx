// src/components/Skills.js
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import "./skill.css";
import logo from "../portfolioimges/react.png";
import java from "../portfolioimges/java.png";
import psql from "../portfolioimges/ps.png";
import js from "../portfolioimges/js.png";
import css from "../portfolioimges/css.png";
import spring from "../portfolioimges/spring.png";
import html from "../portfolioimges/html.png";
import sql from "../portfolioimges/mySql.png";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..
AOS.init();

function Skills() {
  const skills = [
    { name: "JavaScript", icon: js, level: 90 },
    { name: "React", icon: logo, level: 85 },
    { name: "HTML", icon: html, level: 95 },
    { name: "CSS", icon: css, level: 75 },
    { name: "Java", icon: java, level: 80 },
    { name: "Spring Boot", icon: spring, level: 65 },
    { name: "PostgreSQL", icon: psql, level: 60 },
    { name: "MySQL", icon: sql, level: 75 },
  ];

  const [percentages, setPercentages] = useState(skills.map(() => 0));

  useEffect(() => {
    const interval = setInterval(() => {
      setPercentages((prevPercentages) =>
        prevPercentages.map((percent, index) => {
          if (percent < skills[index].level) {
            return percent + 1;
          }
          return percent;
        })
      );
    }, 30);

    return () => clearInterval(interval);
  }, [percentages,skills]);

  return (
    <div className="cont" id="skill">
      <h1 className="Title">TECHINCAL SKILLS</h1>
      <div
        className="skills-container box"
        data-aos="fade-up"
        data-aos-anchor-placement="top-bottom"
        data-aos-delay="0"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
        data-aos-mirror="true"
        data-aos-once="false"
      >
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            className="skill-card"
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <img src={skill.icon} alt={skill.name} className="skill-icon" />
            <p className="skill-name">{skill.name}</p>
            <div className="skill-bar">
              <motion.div
                className="skill-bar-fill"
                style={{ width: `${percentages[index]}%` }}
              >
                <span className="skill-bar-text">{percentages[index]}%</span>
              </motion.div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
