import React from "react";
import "./../index.css";
import { motion } from "framer-motion";

const boxVariants = {
  hover: {
    scale: 1.06,
    transition: {
      type: "spring",
    },
  },
};

const Achievements = () => {
  return (
    <section
      data-aos="fade-up"
      className="achievements-container"
      name="achievements"
      id="achievements"
    >
      <h1 className="heading">Certificats</h1>
      <div className="projects-container">
        {/* Project 1 - Symfony */}
        <motion.div
          variants={boxVariants}
          whileHover="hover"
          className="projects"
        >
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://www.udemy.com/certificate/UC-94ae20db-6cbd-4ba4-acad-9ead0a7945f0/"
          >
            <div className="project-images" id="symfony"></div>
          </a>

          <div className="project-links">
            <div className="text">
              <h3>Symfony v4/v5 par la pratique, PHP, CRUD, Doctrine, Fixtures, Authentification, Faker, Pagination, Upload d'image, MVC..</h3>
            </div>
            <div className="icons">
              <a
                rel="noopener noreferrer"
                href="https://www.udemy.com/certificate/UC-94ae20db-6cbd-4ba4-acad-9ead0a7945f0/"
                target="_blank"
              >
                <i
                  className="fas fa-external-link-alt"
                  title="live preview"
                  id="live"
                ></i>
              </a>
            </div>
          </div>
        </motion.div>

        {/* Project 2 - Git */}
        <motion.div
          variants={boxVariants}
          whileHover="hover"
          className="projects"
        >
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://www.udemy.com/certificate/UC-79f8bac4-a830-412c-9edb-cdb1d695ff3d/"
          >
            <div className="project-images" id="html5"></div>
          </a>

          <div className="project-links">
            <div className="text">
              <h3>Formation Git et GitHub: de Débutant à Confirmé</h3>
            </div>
            <div className="icons">
              <a
                rel="noopener noreferrer"
                href="https://www.udemy.com/certificate/UC-79f8bac4-a830-412c-9edb-cdb1d695ff3d/"
                target="_blank"
              >
                {" "}
                <i
                  className="fas fa-external-link-alt"
                  title="url"
                  id="live"
                ></i>
              </a>
            </div>
          </div>
        </motion.div>

       

       

      </div>
    </section>
  );
};

export default Achievements;
