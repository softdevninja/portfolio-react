import {Navbar, Container, NavLink, Nav} from "react-bootstrap"
import "../styles/NavBar.css"
export const NavBar = () => {
    return (
      <Navbar expand="lg" bg="dark" data-bs-theme="dark">
      <Container>
        <Navbar.Brand href="#home">
          {/*<img> src= {''} alt="Logo"</img>*/}
        </Navbar.Brand>
          
        <Navbar.Toggle aria-controls="basic-navbar-nav" >
        <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavLink href="#home">Home</NavLink>
            <NavLink href="#skills">Skills</NavLink>
            <NavLink href="#projects">Projects</NavLink>
          </Nav>
          <span className="navbar-text">
            <div className="social-icon">
            {/*
              <a href="#"><img src={' '} alt=""/></a>
              <a href="#"><img src={' '} alt=""/></a>
              <a href="#"><img src={' '} alt=""/></a>
            */}
            </div>
            <button className=""></button>
          </span>
 
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}