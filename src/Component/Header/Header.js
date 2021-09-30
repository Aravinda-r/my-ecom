import "./header.css";

import {
  Navbar,
  Container,
  Nav,
  Button,
  FormControl,
  Form,
} from "react-bootstrap";

const Header = () => {
  return (
    <div>
      <Navbar bg="primary" variant="dark" className="container">
        <Container>
          <Navbar.Brand href="#home">Samsung</Navbar.Brand>
          <Form>
            <FormControl
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
          </Form>
          <Nav className="me-auto">
            <Nav.Link href="#home">Wishlist</Nav.Link>
            <Nav.Link href="#features">Cart</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
