import { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import InputGroup from "react-bootstrap/InputGroup";
import { FaShoppingCart, FaSearch } from "react-icons/fa";
import { MdMessage } from "react-icons/md";

function NavItem() {
  const [screenWidth, setScreenWidth] = useState();

  useEffect(() => {
    setScreenWidth(window.innerWidth);
    window.addEventListener("resize", () => {
      setScreenWidth(window.innerWidth);
    });
  }, []);

  return (
    <Navbar expand="lg" style={{ padding: "10px", background: " #d63031" }}>
      <Container fluid className={screenWidth >= 992 ? "mx-5" : null}>
        {screenWidth >= 992 && (
          <Navbar.Brand href="#" style={{ fontSize: "28px", color: "#ffffff" }}>
            Salsa Convection
          </Navbar.Brand>
        )}

        <InputGroup
          className="my-2"
          style={screenWidth >= 992 ? { width: "100%" } : { width: "70%" }}
        >
          <Form.Control
            className="py-2"
            placeholder="Cari Pakaian Anda"
            aria-label="Cari Pakaian Anda"
            aria-describedby="basic-addon2"
          />
          <InputGroup.Text id="basic-addon2">
            <FaSearch />
          </InputGroup.Text>
        </InputGroup>
        <Nav.Link
          className="mx-2"
          href="#action1"
          style={{ color: "#ffffff", fontSize: "23px" }}
        >
          <FaShoppingCart />
        </Nav.Link>
        {screenWidth >= 992 && (
          <Nav.Link
            href="#action1"
            className="mx-2"
            style={{ color: "#ffffff", fontSize: "23px" }}
          >
            <MdMessage />
          </Nav.Link>
        )}

        <Navbar.Toggle aria-controls="navbarScroll" className="bg-white" />

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
                style={{ color: "#ffffff", fontSize: "23px" }}
              >
                Salsa Convection
              </Nav.Link>
            )}

            <Nav.Link
              href="#action2"
              style={{ color: "#ffffff", fontSize: "20px" }}
            >
              Daftar
            </Nav.Link>
            <Nav.Link
              href="#action3"
              style={{ color: "#ffffff", fontSize: "20px" }}
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