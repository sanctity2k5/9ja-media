import React from "react";
import Logo from "../Portfolio/Logo.jpeg";
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from 'react-bootstrap/Nav';
import SportsSoccerIcon from '@material-ui/icons/SportsSoccer';
import ExplicitIcon from '@material-ui/icons/ExplicitOutlined';
import InputIcon from '@material-ui/icons/Input';
import LocalMoviesIcon from '@material-ui/icons/LocalMovies';
import PublicIcon from '@material-ui/icons/Public';
import AlbumIcon from '@material-ui/icons/Album';
import Spinner from 'react-bootstrap/Spinner'


function Header () {

    return(
        <div>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Navbar.Brand href="#home">
  {/* Logo Format */}
  <header className="App-header">
        <img src={Logo} className="App-logo" alt="logo" />
        <h1 className="logo-tag">9JA-MEDIA.COM </h1>
      </header>
      <Navbar.Toggle className="nav-ico" aria-controls="responsive-navbar-nav" />
      </Navbar.Brand>
  
  <Navbar.Collapse id="responsive-navbar-nav" >
    <Nav >
      <Nav.Link href="/"><SportsSoccerIcon id = "mat-icon"/> Sports  </Nav.Link>
      <Nav.Link href="/" ><ExplicitIcon id = "mat-icon" /> Entertainment </Nav.Link>
      <Nav.Link href="/"><AlbumIcon id = "mat-icon" /> Music</Nav.Link>
      <Nav.Link href="/"><PublicIcon id = "mat-icon" /> Politics </Nav.Link>
      <Nav.Link href="/"><LocalMoviesIcon id = "mat-icon" /> Videos </Nav.Link>
      <Nav.Link href="/"><InputIcon id = "mat-icon" /> Login/Register <Spinner animation="grow" variant = "success" /> </Nav.Link>
    </Nav>
    
  </Navbar.Collapse>
</Navbar>

            
        </div>
    )
}



export default Header;











