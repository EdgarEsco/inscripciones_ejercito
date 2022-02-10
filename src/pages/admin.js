import React from "react";
import { useNavigate } from "react-router-dom";
import { Fragment } from "react/cjs/react.production.min";

export default function Admin() {
  const navigate = useNavigate();

  const handlerDasboard = () => {
    navigate("/admin/dashboard");
  };
  return (
    <Fragment>
      <button onClick={handlerDasboard}>Dashboard</button>
    </Fragment>
  );
}
