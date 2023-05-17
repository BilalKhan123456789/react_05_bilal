import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Images from '../Images/logo.png'



function Home() {
  return (
    < >
      <Navbar bg="warning" expand="lg">
        <Container fluid>
          <Navbar.Brand href="#"><Link to="/"><img src={ Images} alt="" style={{height:"40px"}} /></Link></Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' ,  marginLeft:"250px" }}
              navbarScroll>
              <Nav.Link href="#action1" ><Link to="/" style={{textDecoration:"none" , color:"black" }}>Home</Link></Nav.Link>
              <Nav.Link href="#action2"><Link to="/gallery" style={{textDecoration:"none", color:"black"}}>Gallery</Link></Nav.Link>
              <Nav.Link href="#" ><Link to="/service" style={{textDecoration:"none", color:"black"}}>Services</Link></Nav.Link>
              <Nav.Link href="#action2"><Link to="/about" style={{textDecoration:"none", color:"black"}}>About</Link></Nav.Link>
              <Nav.Link href="#action2"><Link to="/login" style={{textDecoration:"none",color:"black"}}>Contact us</Link></Nav.Link>


            </Nav>

          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Home;