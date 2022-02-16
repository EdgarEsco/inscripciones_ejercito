import React from "react";
import "./card.css";
import { useNavigate } from "react-router-dom";



export default function Card(props) {

  const navigate = useNavigate();

  
  const handleClick = () => {
    navigate(props.url);
  };

  return (
    <div className="conatiner_cards">
      <div className="card_header">
        <h3 className="">{props.title}</h3>
      </div>
      <div className="card-body">
        <img
          src={props.img}
          alt={props.alt}
          className=""
        />
        <p>{props.texto}</p>
      </div>
      <button className="btn btn-block btn-primary" onClick={handleClick}>Ingresar</button>
    </div>
  );
}
