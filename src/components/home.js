import {React} from "react";
import "../styles/home.css";


import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Carousel from "react-bootstrap/Carousel";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";

import Card from 'react-bootstrap/Card';


const Home = () => {
    return ( 
        <section>
          <div className="twodiv">
           <div className="Appp">
        <Navbar bg="light" expand="lg" variant="light">
        <Navbar.Brand href="">Grocery </Navbar.Brand>
          <Container fluid>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: "100px" }}
                navbarScroll
              >
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="#action2">Features</Nav.Link>
                <NavDropdown title="LogIn/Sign Up" id="navbarScrollingDropdown">
                  <NavDropdown.Item href="/admin-login">Admin LogIn</NavDropdown.Item>
                  {/* <NavDropdown.Item href="#action4">
                    Admin Login 2
                  </NavDropdown.Item> */}
                  <NavDropdown.Divider />
                  <NavDropdown.Item  type="onClick" href="/user-login"> <img src="" alt="" />
                    Users LogIn
                  </NavDropdown.Item>
                </NavDropdown>
                <Nav.Link href="action6" className="actn6" >
                  Your Cart
              </Nav.Link>
              </Nav> 
              <Form className="d-flex">
                <Form.Control
                  type="search"
                  placeholder="Search for Products..."
                  className="me-2"
                  aria-label="Search"
                />
                <Button variant="outline-success">Search</Button>
              </Form>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
      
      <div className="cat">
        <DropdownButton id="dropdown-item-button" title="SHOP BY CATEGORIES">
          <Dropdown.Item as="button">Fruits & Vegetables</Dropdown.Item>
          <Dropdown.Item as="button">Foodgrains, Oil & Masala</Dropdown.Item>
          <Dropdown.Item as="button">Bakery, Cakes & Dairy</Dropdown.Item>
          <Dropdown.Item as="button">Beverages</Dropdown.Item>
          <Dropdown.Item as="button">Snacks & Branded Foods</Dropdown.Item>
          <Dropdown.Item as="button">Eggs, Meat & Fish</Dropdown.Item>
          <Dropdown.Item as="button">Kitchen, Garden & Pets</Dropdown.Item>
          <Dropdown.Item as="button">Cleaning & Household</Dropdown.Item>
          <Dropdown.Item as="button">Baby Care</Dropdown.Item>
          <Dropdown.Item as="button">View All</Dropdown.Item>
        </DropdownButton>
       
      </div>
      </div>
      <div className="secbnr">
        <Carousel>
          <Carousel.Item interval={2000}>
            <img
              className="d-block w-100"
              src="https://www.bigbasket.com/media/uploads/banner_images/hp_m_bcd_paneer_1600x460-141122.jpg"
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item interval={2000}>
            <img
              className="d-block w-100"
              src="https://www.bigbasket.com/media/uploads/banner_images/hp_m_pl_oilandghee_1600x460-141122.jpg"
              alt="Second slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <Carousel.Item interval={2000} />
            <img
              className="d-block w-100"
              src="https://www.bigbasket.com/media/uploads/banner_images/YXHP144_hp_fom_m_bbpl-staples_800_131122_Bangalore.jpg"
              alt="Third slide"
            />
          </Carousel.Item>
        </Carousel>
      </div>
    <div className="crds">
    <Card style={{ width: '15rem'}}>
      <Card.Img variant="top" src="https://www.bigbasket.com/media/uploads/p/s/40033819_29-fresho-apple-shimla.jpg" />
      <Card.Body>
        <Card.Title>Apples</Card.Title>
        <Card.Text>
           1 kg of fresh  Apple  Rs.120/-
        </Card.Text>
        <Button variant="primary">Add to Cart</Button>
      </Card.Body>
    </Card><Card style={{ width: '15rem' }}>
      <Card.Img variant="top" src="https://www.bigbasket.com/media/uploads/p/s/10000069_20-fresho-capsicum-green.jpg" />
      <Card.Body>
        <Card.Title>capsicum-green(fresh)</Card.Title>
        <Card.Text>
          500 Grms Capsicum Rs.35/-
        </Card.Text>
        <Button variant="primary">Add to Cart</Button>
      </Card.Body>
    </Card>
    <Card style={{ width: '15rem' }}>
      <Card.Img variant="top" src="https://www.bigbasket.com/media/uploads/p/s/126906_8-aashirvaad-atta-whole-wheat.jpg" />
      <Card.Body>
        <Card.Title>Aashirvaad-Atta</Card.Title>
        <Card.Text>
          10 Kg Pouch Rs.475/-
        </Card.Text>
        <Button variant="primary">Add to Cart</Button>
      </Card.Body>
    </Card>
    <Card style={{ width: '15rem' }}>
      <Card.Img variant="top" src="https://www.bigbasket.com/media/uploads/p/s/10000486_14-bb-royal-cuminjeera-whole.jpg" />
      <Card.Body>
        <Card.Title>CuminJeera</Card.Title>
        <Card.Text>
        200 Grms Pouch Rs.78/- 
        </Card.Text>
        <Button variant="primary">Add to Cart</Button>
      </Card.Body>
    </Card>
    <Card style={{ width: '15rem' }}>
      <Card.Img variant="top" src="https://www.bigbasket.com/media/uploads/p/s/40186855_6-colgate-strong-teeth-anticavity-toothpaste-with-amino-shakti-formula-provides-fresher-breath.jpg" />
      <Card.Body>
        <Card.Title>Toothpaste (Colgate)</Card.Title>
        <Card.Text>
          100 Grms Colgate Rs.62/-
        </Card.Text>
        <Button variant="primary">Add to Cart</Button>
      </Card.Body>
    </Card>
    </div>
    </section>
     );
}
 
export default Home;