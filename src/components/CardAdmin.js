import React, { Fragment } from "react";
import { useNavigate } from "react-router-dom";

export default function CardAdmin() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/login");
  };

  return (
    <Fragment>
    <h1>CARD DEL ADMINISTRATIVO</h1>
      <button onClick={handleClick}>Login</button>
    </Fragment>
  );
}
