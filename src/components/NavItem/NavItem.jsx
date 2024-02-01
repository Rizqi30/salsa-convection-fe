import { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import InputGroup from "react-bootstrap/InputGroup";
import { FaShoppingCart, FaSearch } from "react-icons/fa";
import { MdDashboard } from "react-icons/md";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "react-bootstrap";
import { logout } from "../../config/Redux/Action/authAction";

function NavItem() {
  const [screenWidth, setScreenWidth] = useState();
  const dispatch = useDispatch(); // useDispatch() digunakan untuk mengirim action ke reducer
  const token = localStorage.getItem("token");
  const { idUser } = useParams();
  const { user } = useSelector((state) => state.authReducer); // mendapatkan data

  const handleLogout = () => {
    dispatch(logout(token));
  };

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
          <Navbar.Brand>
            <Link
              to={"/"}
              style={{
                fontSize: "28px",
                color: "#ffffff",
                textDecoration: "none",
              }}
            >
              Salsa Convection
            </Link>
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
        {!token || token == "" || idUser === undefined ? (
          <Link
            className="mx-2"
            href="#action1"
            style={{ color: "#ffffff", fontSize: "23px" }}
            to={"/login"}
          >
            <FaShoppingCart />
          </Link>
        ) : (
          <Link
            className="mx-2"
            href="#action1"
            style={{ color: "#ffffff", fontSize: "23px" }}
            to={"/cart/" + idUser}
          >
            <FaShoppingCart />
          </Link>
        )}

        {user.role === "admin" && (
          <Link
            to={"/admin/" + user.id}
            className="mx-2"
            style={{ color: "#ffffff", fontSize: "23px" }}
          >
            <MdDashboard />
          </Link>
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
              <Link
                to={"/"}
                style={{
                  color: "#ffffff",
                  fontSize: "23px",
                  textDecoration: "none",
                }}
              >
                Salsa Convection
              </Link>
            )}

            <Link
              to={"/daftar"}
              className="me-3"
              style={{
                color: "#ffffff",
                fontSize: "20px",
                textDecoration: "none",
              }}
            >
              Daftar
            </Link>

            {user.name ? ( // untuk logout set user kosong di action
              <Link
                className="me-3"
                style={{
                  color: "#ffffff",
                  fontSize: "20px",
                  textDecoration: "none",
                }}
              >
                <Button variant="warning" onClick={() => handleLogout()}>
                  Logout
                </Button>
              </Link>
            ) : (
              <Link
                to={"/login"}
                className="me-3"
                style={{
                  color: "#ffffff",
                  fontSize: "20px",
                  textDecoration: "none",
                }}
              >
                <Button variant="light">Login</Button>
              </Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavItem;
