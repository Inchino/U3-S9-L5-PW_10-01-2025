import { Navbar, Image } from "react-bootstrap";

const NetflixNavbar = function () {
  return (
    <Navbar expand="lg" data-bs-theme="dark">
      <Navbar.Brand href="#home">
        <Image src="public/logo.png" width={100} height={55}/>
      </Navbar.Brand>
    </Navbar>
  );
};

export default NetflixNavbar;