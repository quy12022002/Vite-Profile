import type React from "react";
import Background from "../common/Background";
import Content from "./Content";
import Footer from "./Footer";
import Header from "./Header";
import About from "./About";
import Experience from "./Experience";

const Template: React.FC = () => {
  return (
    <div id="template-container">
      <Background />
      <Header />
      <Content />
      <About />
      <Experience />
      <Footer />
    </div>
  );
};

export default Template;
