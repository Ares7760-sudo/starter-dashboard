'use client'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Link from 'next/link';

const Header = () => {
    return (
        <>
        <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand>
        <Link className='nav-link' href={"/"}>Chó nhỏ</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link className="nav-link" href={"/blogs"}>Nhật ký</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
        </>
    )
}

export default Header