import"./Home.css";
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faPhoneVolume,faCartPlus,faArrowRight} from '@fortawesome/free-solid-svg-icons'
import { Button, Container, Form, FormControl, Nav, Navbar,Carousel } from 'react-bootstrap';

const Home = () => {
    return (
        <div className="header">
        <Navbar bg="light" expand="lg">
        <Container fluid>
          <Navbar.Brand href="#">MEDI ID</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll>
            </Nav>
            <Form className="d-flex scarch-bar">
              <FormControl
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
            </Form>
            <FontAwesomeIcon icon={faPhoneVolume} size="2x"></FontAwesomeIcon>
            <h6>01670674402</h6>
            <FontAwesomeIcon icon={faCartPlus} size="2x"></FontAwesomeIcon>
          </Navbar.Collapse>
          
          </Container>
      </Navbar>


        {/* carousel */}

          <Carousel>
            <Carousel.Item>
              <img
                className="d-block w-100"
                alt="First slide"
                src="https://i.ibb.co/GWZz4Gk/banner.jpg"
              />
              <Carousel.Caption>
              <h3>Medsy Provides You Safe Delivery</h3>
                <p>Get medicines at your home within 30 minutes</p>
                <button type="button" class="btn btn-dark">Shop Now <FontAwesomeIcon icon={faArrowRight} size="1x"></FontAwesomeIcon></button>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-100"
                src="https://i.ibb.co/mCfn2Pm/banner2.jpg"
                alt="Second slide"
              />

              <Carousel.Caption>
                <h3>Medsy Provides You Safe Delivery</h3>
                <p>Get medicines at your home within 30 minutes</p>
                <button type="button" class="btn btn-dark">Shop Now <FontAwesomeIcon icon={faArrowRight} size="1x"></FontAwesomeIcon></button>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
      </div>
    );
};

export default Home;