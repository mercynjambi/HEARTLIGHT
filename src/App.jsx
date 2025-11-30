import {  Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import RegistrationForm from "./components/RegistrationForm";

function App() {
  return (
    
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<RegistrationForm />} />
      </Routes>
    
  );
}

export default App;
