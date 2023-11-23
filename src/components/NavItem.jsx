import { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import InputGroup from "react-bootstrap/InputGroup";
import { FaShoppingCart } from "react-icons/fa";
import { MdMessage } from "react-icons/md";
import { FaSearch } from "react-icons/fa";

function NavItem() {
  const [screenWidth, setScreenWidth] = useState();

  useEffect(() => {
    setScreenWidth(window.innerWidth);
    window.addEventListener("resize", () => {
      setScreenWidth(window.innerWidth);
    });
  }, []);

  return (
    <Navbar expand="lg" style={{ padding: "20px", background: " #d63031" }}>
      <Container fluid className={screenWidth >= 992 ? "mx-5" : "d-flex"}>
        {screenWidth >= 992 && (
          <Navbar.Brand href="#" style={{ fontSize: "33px", color: "#ffffff" }}>
            Salsa Convection
          </Navbar.Brand>
        )}

        <InputGroup
          className="my-2"
          style={screenWidth >= 992 ? { width: "100%" } : { width: "50%" }}
        >
          <Form.Control
            className="py-2"
            placeholder="Find Your Cloths"
            aria-label="Find Your Cloths"
            aria-describedby="basic-addon2"
          />
          <InputGroup.Text id="basic-addon2">
            <FaSearch />
          </InputGroup.Text>
        </InputGroup>
        <Nav.Link
          className="p-0"
          href="#action1"
          style={{ color: "#ffffff", fontSize: "23px" }}
        >
          <FaShoppingCart />
        </Nav.Link>
        {screenWidth >= 992 && (
          <Nav.Link
            href="#action1"
            style={{ color: "#ffffff", fontSize: "23px" }}
          >
            <MdMessage />
          </Nav.Link>
        )}

        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className=""
            style={{
              maxHeight: "1000px",
              padding: "20px",
            }}
            navbarScroll
          >
            {screenWidth < 992 && (
              <Nav.Link
                href="#action2"
                style={{ color: "#ffffff", fontSize: "25px" }}
              >
                Salsa Convection
              </Nav.Link>
            )}

            <Nav.Link
              href="#action2"
              style={{ color: "#ffffff", fontSize: "25px" }}
            >
              Register
            </Nav.Link>
            <Nav.Link
              href="#action3"
              style={{ color: "#ffffff", fontSize: "25px" }}
            >
              Login
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavItem;
