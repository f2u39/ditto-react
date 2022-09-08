import { Outlet, Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import History from '@mui/icons-material/History';
import Bookmarks from '@mui/icons-material/Bookmarks';
import VideoGameAsset from '@mui/icons-material/VideogameAsset';
import Themes from '../Themes/Themes';

import './Navi.css'

const Navi = () => {
    return (
        <Navbar className="nav-bar" variant="dark" sticky="top">
            <Themes />
            <Container>
                <Navbar.Brand href="/">Ditto</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link className="nav-link" href="/game"><VideoGameAsset className="nav-icon" style={{ color: "slateblue" }} /></Nav.Link>
                        <Nav.Link className="nav-link" href="/invoices"><Bookmarks className="nav-icon" style={{ color: "cadetblue" }} /></Nav.Link>
                        <Nav.Link className="nav-link" href="/act"><History className="nav-icon" style={{ color: "darkorange" }} /></Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>

            <Outlet />
        </Navbar>
    )
}

export default Navi;
