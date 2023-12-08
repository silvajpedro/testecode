import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import StyleHeader from "./Styles/Style";
import Inicio from "./Components/Inicio";
import Projetos from "./Components/Projeto";
import Sobre from "./Components/Sobre";

const App = () => {
  return (
    <Router>
      <StyleHeader />
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/projetos" element={<Projetos />} />
      </Routes>
    </Router>
  );
};

export default App;
