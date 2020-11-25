import React from "react";
import "./../index.css";

const Skills = () => {
  return (
    <section
      data-aos="fade-right"
      className="skills-container"
      name="skills"
      id="skills"
    >
      <h1 className="heading">Je Maitrise Quoi &nbsp;&nbsp;?</h1>

      <div className="techs">
        <li>
          <i className="fab html fa-html5"></i> <p>HTML5</p>
        </li>
        <li>
          <i className="fab css fa-css3"></i>
          <p>CSS3</p>
        </li>
        <li>
          <i className="fab Symfony fa-symfony"></i>
          <p>Symfony</p>
        </li>
        <li>
          <i className="fab bootstrap fa-bootstrap"></i>
          <p>Bootstrap</p>
        </li>
        <li>
          <i className="fab javascript fa-js"></i>
          <p>Javascript</p>
        </li>
        <li>
          <i className="fab react fa-react"></i>
          <p>React</p>
        </li>
        <li>
          <i className="fab php fa-php"></i>
          <p>PHP7</p>
        </li>
        <li>
          <i className="fab git fa-git"></i>
          <p>Git</p>
        </li>
      </div>
    </section>
  );
};

export default Skills;
