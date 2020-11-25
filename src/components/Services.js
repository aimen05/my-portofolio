import React from "react";
import "./../index.css";
import uiImage from "./../images/ui.svg";
import webImage from "./../images/web.svg";

const Services = () => {
  return (
    <section
      data-aos="zoom-in"
      className="services-container"
      name="services"
      id="services"
    >
      <h1 className="heading">Parcours Universitaire</h1>
      <div className="services-wrapper">
        <div className="services">
          <li>
            <img src={uiImage} alt="" />
            <p>Master IWOCS : Ingénierie du Web, des objets communicants et des systèmes complexes- Univéristé du Havre</p>
          </li>
        </div>
        <div className="services">
          <li>
            <img src={webImage} alt="" />
            <p>Licence En Développement Informatique - Ecole Marocaine des Sciences de l’Ingénieur – Casablanca – Maroc</p>
          </li>
        </div>
      </div>
    </section>
  );
};

export default Services;
