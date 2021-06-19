import { Link } from "react-router-dom"
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Logo from '../../assets/logo.png'

export default function NavBar () {
    
    return (
        <Navbar bg="light" expand="lg" className='navbar'>
        <Link to="/"><Navbar.Brand href="#home"><img src={Logo} alt="App logo" className='logo'/></Navbar.Brand></Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
                <Link to="/warriors"><Nav.Link href="#link" className='navLink'>Warriors</Nav.Link></Link>
                <Link to="/stellarFighting/selectFighters"><Nav.Link href="#link" className='navLink'>Stellar fighting</Nav.Link></Link>
            </Nav>
        </Navbar.Collapse>
        </Navbar>
    )
}