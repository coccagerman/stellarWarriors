import { Link } from "react-router-dom"
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Logo from '../../assets/logo.png'
import LogoDark from '../../assets/logo_dark.png'
import DarkModeToggle from './DarkModeToggle/DarkModeToggle'

export default function NavBar ({darkMode, setDarkMode}) {
    
    return (
        <Navbar bg={darkMode ? 'black' : "light"} expand="lg" className={darkMode ? 'navbar navbar-dark' : 'navbar'}>
        <Link to="/"><Navbar.Brand href="#home"><img src={darkMode ? LogoDark : Logo} alt="App logo" className='logo'/></Navbar.Brand></Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
                <Link to="/warriors"><Nav.Link href="#link" className='navLink'>Warriors</Nav.Link></Link>
                <Link to="/warriorBuilder"><Nav.Link href="#link" className='navLink'>Build your warrior</Nav.Link></Link>
                <Link to="/stellarFighting"><Nav.Link href="#link" className='navLink'>Stellar fighting</Nav.Link></Link>
                <DarkModeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
            </Nav>
        </Navbar.Collapse>
        </Navbar>
    )
}