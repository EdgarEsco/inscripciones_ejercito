import React from "react";
import { useNavigate } from "react-router-dom";
import { Fragment } from "react/cjs/react.production.min";
import useAuth from "../components/useAuth";

export default function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();

  const handlerLogin = () => {
    login();
    navigate("/admin");
  };

  return (
    <Fragment>
      <button onClick={handlerLogin}>Login</button>
    </Fragment>
  );
}
