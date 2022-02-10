// import logo from "./logo.svg";
import "./App.css";
import RouterApp from "./routes/index";
import AuthProvider from "./components/AuthProvider";

function App() {
  return (
    <div>
      <AuthProvider>
        <RouterApp />
      </AuthProvider>
    </div>
  );
}

export default App;
