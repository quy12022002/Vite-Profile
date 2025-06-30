import type React from "react";
// import Template from "./components/layouts/Template";
// import Background from "./components/common/Background";
// import Header from "./components/layouts/Header";
// import Content from "./components/layouts/Content";
// import About from "./components/layouts/About";
// import Experience from "./components/layouts/Experience";
// import Skills from "./components/layouts/Skills";
// import Education from "./components/layouts/Education";
// import Projects from "./components/layouts/Projects";
// import Activities from "./components/layouts/Activities";
// import Contact from "./components/layouts/Contact";
// import Footer from "./components/layouts/Footer";
import { Route, Routes } from "react-router-dom";
import Clients from "./pages/clients";

const App: React.FC = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Clients />} />
      </Routes>
    </>
  );
};

export default App;
