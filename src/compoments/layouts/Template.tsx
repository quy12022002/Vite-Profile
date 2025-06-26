import type React from "react";
import Background from "../common/Background";
import Content from "./Content";
import Footer from "./Footer";
import Header from "./Header";
import About from "./About";

const Template: React.FC = () => {
  return (
    <div id="template-container">
      <Background />
      <Header />
      <Content />
      <About />
      <Footer />
    </div>
  );
};

export default Template;
