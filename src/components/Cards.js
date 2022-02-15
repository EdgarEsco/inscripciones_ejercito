import React from "react";
import Card from "./Card";
import Image1 from "../assets/luismi_cadete.png";
import Image2 from "../assets/ejercito_mex.jpg";
import "./cards.css";

export default function Cards() {
  const cardsInfo = [
    {
      id: 1,
      title: "ALUMNOS",
      img: Image1,
      url: "/inscripcion_form",
      alt: "imagen del alumnos",
      texto: "Para inicar tu trámite de inscripción escolar da click en el boton",
    },
    {
      id: 2,
      title: "ADMINISTRATIVO",
      img: Image2,
      url: "/login",
      alt: "imagen de administrativo",
      texto:"Inicia sesión para ingresar al sistema",
    },
  ];

  return (
    <div className="container">
      {cardsInfo.map((card) => {
        return (
          <div className="container_card">
            <Card
              title={card.title}
              alt={card.alt}
              img={card.img}
              url={card.url}
              texto={card.texto}
              key={card.id}
            />
          </div>
        );
      })}
    </div>
  );
}
