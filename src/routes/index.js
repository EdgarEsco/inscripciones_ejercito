import { BrowserRouter as Router, Navigate, Route, Routes } from "react-router-dom";
import MainApp from "../pages";
import NotFound from "../pages/notFoundPage";
import AdminPage from "../pages/admin";
import Dashboard from "../pages/dashboard";
import Login from "../pages/login";
import useAuth from "../components/useAuth";
import Admin from "../pages/admin";

const RoutesApp = () => {
  
  const {user} = useAuth();

  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<MainApp />} />
        <Route exact path="/login" element = {<Login />} />
        <Route exact path="/admin" element = {user ? (<Admin />) : (<Navigate to="/login" />)} />
        <Route exact path="/admin/dashboard" element = {user ? (<Dashboard />) : (<Navigate to="/login" />)} />            
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default RoutesApp;
