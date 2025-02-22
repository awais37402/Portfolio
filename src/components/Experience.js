import React, { useEffect, useRef } from "react";
import "./Experience.css";
import { FaCode, FaPaintBrush, FaBriefcase } from "react-icons/fa"; // Import Icons

const experiences = [
  {
    title: "Web Developer",
    company: "Freelance & Agencies",
    duration: "2018 - Present",
    description:
      "Developed dynamic websites, e-commerce platforms, and custom web applications using HTML, CSS, JavaScript, ReactJS, WordPress, and PHP.",
    icon: <FaCode className="experience-icon" />,
  },
  {
    title: "Graphic Designer",
    company: "Freelance & Design Studios",
    duration: "2017 - Present",
    description:
      "Created visually appealing designs, brand identities, UI/UX mockups, and marketing materials using Photoshop, Illustrator, and Figma.",
    icon: <FaPaintBrush className="experience-icon" />,
  },
  {
    title: "UI/UX Designer",
    company: "Various Clients",
    duration: "2020 - Present",
    description:
      "Designed user-friendly interfaces and prototypes with a strong focus on usability and aesthetics using Figma, Adobe XD, and Sketch.",
    icon: <FaBriefcase className="experience-icon" />,
  },
];

const Experience = () => {
  const cardRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          }
        });
      },
      { threshold: 0.3 }
    );

    cardRefs.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => {
      cardRefs.current.forEach((card) => {
        if (card) observer.unobserve(card);
      });
    };
  }, []);

  return (
    <section className="experience-section" id="experience">
      <h2 className="experience-title">Experience</h2>
      <div className="experience-container">
        {experiences.map((exp, index) => (
          <div
            key={index}
            ref={(el) => (cardRefs.current[index] = el)}
            className={`experience-card fade-${index % 2 === 0 ? "left" : "right"}`}
          >
            <div className="experience-icon-box">{exp.icon}</div>
            <h3 className="experience-role">{exp.title}</h3>
            <p className="experience-company">{exp.company}</p>
            <span className="experience-duration">{exp.duration}</span>
            <p className="experience-description">{exp.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
