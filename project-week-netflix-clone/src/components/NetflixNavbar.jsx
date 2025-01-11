import { Container, Navbar, Nav, Row, Col } from 'react-bootstrap';


const NetflixNavbar = function (){
    return (
        <Navbar expand="lg" className="bg-dark" data-bs-theme="dark">
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto mb-2 mb-lg-0">
            <Nav.Link href="#home" className="fw-bold ms-2">Home</Nav.Link>
            <Nav.Link href="#" className="fw-bold ms-2">Tv Shows</Nav.Link>
            <Nav.Link href="#" className="fw-bold ms-2">Movies</Nav.Link>
            <Nav.Link href="#" className="fw-bold ms-2">Recently Added</Nav.Link>
            <Nav.Link href="#" className="fw-bold ms-2">My List</Nav.Link>
          </Nav>
          <Container className="d-flex align-items-center m-0 p-0 my-2 d-lg-none">
            <Nav className="bi bi-search icons"></Nav>
            <Nav id="kids" className="fw-bold">KIDS</Nav>
            <Nav className="bi bi-bell icons"></Nav>
            <Nav className="bi bi-person-circle icons"></Nav>
            </Container>
        </Navbar.Collapse>
            <Nav className="bi bi-search icons d-lg-block d-none"></Nav>
            <Nav id="kids" className="fw-bold d-lg-block d-none">KIDS</Nav>
            <Nav className="bi bi-bell icons d-lg-block d-none"></Nav>
            <Nav className="bi bi-person-circle icons d-lg-block d-none"></Nav>
    </Navbar>
    )
}

export default NetflixNavbar;