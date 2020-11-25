import React from "react"
import "./../index.css"
import { motion } from "framer-motion"

const boxVariants = {
  hover: {
    scale: 1.06,
    transition: {
      type: "spring",
    },
  },
}

const Portfolio = () => {
  return (
    <section
      data-aos="fade-up"
      className="portfolio-container"
      name="portfolio"
      id="portfolio"
    >
      <h1 className="heading">Mes Projets</h1>
      <div className="projects-container">


        {/* Projet 1 - Movies Search */}
        <motion.div
          className="projects"
          variants={boxVariants}
          whileHover="hover"
        >
          <a
            rel="noopener noreferrer"
            target="_blank"
            href=""
          >
             <div className="project-images" id="MoviesS"></div>
          </a>

          <div className="project-links">
            <div className="text">
              <h3>Movies Search</h3>
            </div>
            <div className="icons">
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://github.com/aimen05/MoviesSearch"
              >
                <i className="fab fa-github" title="github repo" id="github">
                  {" "}
                </i>
              </a>
              
            </div>
          </div>
        </motion.div>

        {/* Project 2 - MapQuizz */}
        <motion.div
          variants={boxVariants}
          whileHover="hover"
          className="projects"
        >
          <a
            rel="noopener noreferrer"
            target="_blank"
            href=""
          >
            <div className="project-images" id="MapQuizz"></div>
          </a>

          <div className="project-links">
            <div className="text">
              <h3> Map Quizz</h3>
            </div>
            <div className="icons">
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://github.com/aimen05/JeuQuizz"
              >
                <i className="fab fa-github" title="github repo" id="github">
                  {" "}
                </i>
              </a>
            </div>
          </div>
        </motion.div>

        

      

        
      </div>
      <a
        rel="noopener noreferrer"
        target="_blank"
        href="https://github.com/aimen05/"
        className="button-link"
      >
        <button className="button">Plus de Projets</button>
      </a>
    </section>
  )
}

export default Portfolio
