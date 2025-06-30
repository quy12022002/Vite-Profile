import type React from "react";
import { useEffect, useState } from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import imgLogo from "../../assets/logo.png";

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState<boolean>(false);
  const [expanded, setExpanded] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      setScrolled(isScrolled);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleToggle = () => {
    setExpanded(!expanded);
  };

  const handleLinkClick = (sectionId: string) => {
    setExpanded(false);
    scrollToSection(sectionId);
  };

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      const navbar = document.querySelector(".navbar") as HTMLElement;
      const navbarHeight = navbar.offsetHeight;
      const sectionTop = section.getBoundingClientRect().top + window.scrollY;

      window.scrollTo({
        top: sectionTop - navbarHeight,
        behavior: "smooth",
      });
    }
  };

  return (
    <Navbar
      bg="dark"
      variant="dark"
      expand="lg"
      sticky="top"
      className={`scrolled-navbar ${scrolled ? "scrolled" : ""}`}
      expanded={expanded}
    >
      <Container>
        <Navbar.Brand href="#">
          <img src={imgLogo} alt="Logo" className="navbar-logo" />
          DEV DOXUANQUY
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          onClick={handleToggle}
        />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#about" onClick={() => handleLinkClick("about")}>
              About
            </Nav.Link>
            <Nav.Link
              href="#experience"
              onClick={() => handleLinkClick("experience")}
            >
              Experience
            </Nav.Link>
            <Nav.Link href="#skill" onClick={() => handleLinkClick("skill")}>
              Skills
            </Nav.Link>
            <Nav.Link
              href="#education"
              onClick={() => handleLinkClick("education")}
            >
              Education
            </Nav.Link>
            <Nav.Link
              href="#project"
              onClick={() => handleLinkClick("project")}
            >
              Projects
            </Nav.Link>
            <Nav.Link
              href="#activity"
              onClick={() => handleLinkClick("activity")}
            >
              Activity
            </Nav.Link>
          </Nav>
          <Nav.Link
            href="#contact"
            onClick={() => handleLinkClick("contact")}
            className="d-block d-md-none"
          >
            Contact
          </Nav.Link>
          <Button
            className="btn-contact ms-auto mt-3 mt-md-0 d-none d-md-block"
            type="button"
            onClick={() => handleLinkClick("contact")}
          >
            Contact Me!
          </Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
