import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import './skillCard.css';

const skills = [
  { name: 'Communication', percentage: 85 },
  { name: 'Teamwork', percentage: 90 },
  { name: 'Creativity', percentage: 80 },
  { name: 'Leadership', percentage: 75 }
];

const ExtraSkills = () => {
  const [progress, setProgress] = useState(skills.map(() => 0));

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) =>
        prev.map((value, index) => {
          if (value < skills[index].percentage) {
            return value + Math.ceil((skills[index].percentage - value) / 10);
          }
          return value;
        })
      );
    }, 30);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className='extra-skills'>
      <h2 className='title'>Extra Skills</h2>
      <div className='skills-container'>
        {skills.map((skill, index) => (
          <motion.div 
            className='skill-card' 
            key={index}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.3 }}
          >
            <div className='circle'>
              <svg>
                <circle cx='50' cy='50' r='45'></circle>
                <motion.circle
                  cx='50'
                  cy='50'
                  r='45'
                  initial={{ strokeDashoffset: 283 }}
                  animate={{ strokeDashoffset: 283 - (283 * progress[index]) / 100 }}
                  transition={{ duration: 1.5, ease: 'easeInOut' }}
                />
              </svg>
              <span className='percentage'>{progress[index]}%</span>
            </div>
            <h3 className='skill-name'>{skill.name}</h3>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ExtraSkills;
