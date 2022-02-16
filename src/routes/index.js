import { BrowserRouter as Router, Navigate, Route, Routes } from "react-router-dom";
import NotFound from "../pages/notFoundPage";
import Dashboard from "../pages/dashboard";
import Login from "../pages/login";
import useAuth from "../components/useAuth";
import Admin from "../pages/admin";
import Cards from "../pages/Cards";
import FormInscripcion from "../pages/form_inscripcion";

const RoutesApp = () => {
  
  const {user} = useAuth();

  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Cards />} />
        <Route exact path="/inscripcion_form" element={<FormInscripcion />} />
        <Route exact path="/login" element = {<Login />} />
        <Route exact path="/admin" element = {user ? (<Admin />) : (<Navigate to="/login" />)} />
        <Route exact path="/admin/dashboard" element = {user ? (<Dashboard />) : (<Navigate to="/login" />)} />            
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default RoutesApp;
