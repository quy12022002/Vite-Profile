import Content from "../../components/layouts/Content";
import Footer from "../../components/layouts/Footer";
import About from "../../components/layouts/About";
import Experience from "../../components/layouts/Experience";
import Skills from "../../components/layouts/Skills";
import Contact from "../../components/layouts/Contact";
import Projects from "../../components/layouts/Projects";
import Activities from "../../components/layouts/Activities";
import Education from "../../components/layouts/Education";
import Template from "../../components/layouts/Template";

const index = () => {
  return (
    <Template>
      <Content />
      <About />
      <Experience />
      <Skills />
      <Education />
      <Projects />
      <Activities />
      <Contact />
      <Footer />
    </Template>
  );
};

export default index;
