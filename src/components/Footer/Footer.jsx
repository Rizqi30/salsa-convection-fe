import { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  const [screenWidth, setScreenWidth] = useState();

  useEffect(() => {
    setScreenWidth(window.innerWidth);
    window.addEventListener("resize", () => {
      setScreenWidth(window.innerWidth);
    });
  }, []);

  return (
    <>
      {screenWidth >= 768 ? (
        <footer
          className=" text-light py-4"
          style={{ background: " #d63031", marginTop: "2rem" }}
        >
          <Container>
            <div className="d-flex justify-content-between">
              <div>
                <img
                  src="path/to/your/logo.png"
                  alt="Your Logo"
                  style={{ width: "100px", marginBottom: "10px" }}
                />
                <p>© 2023 Your Company</p>
              </div>

              <div className="d-flex">
                <div className="mx-4">
                  <h5>Follow Us</h5>
                  <div>
                    <a href="#" className="text-light me-3">
                      <FaFacebook />
                    </a>
                    <a href="#" className="text-light me-3">
                      <FaTwitter />
                    </a>
                    <a href="#" className="text-light">
                      <FaInstagram />
                    </a>
                  </div>
                </div>
                <div className="mx-4">
                  <h5>Legal</h5>
                  <ul className="list-unstyled">
                    <li>
                      <a href="#" className="text-light">
                        Terms of Service
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-light">
                        Privacy Policy
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </Container>
        </footer>
      ) : (
        <footer
          className="text-light py-4"
          style={{ background: " #d63031", height: "auto", marginTop: "2rem" }}
        >
          <Container>
            <Row>
              <Col md={4}>
                <img
                  src="path/to/your/logo.png"
                  alt="Your Logo"
                  style={{ width: "100px", marginBottom: "10px" }}
                />
                <p>© 2023 Your Company</p>
              </Col>
              <Col className="mt-3" md={4}>
                <h5>Follow Us</h5>
                <div>
                  <a href="#" className="text-light me-3">
                    <FaFacebook />
                  </a>
                  <a href="#" className="text-light me-3">
                    <FaTwitter />
                  </a>
                  <a href="#" className="text-light">
                    <FaInstagram />
                  </a>
                </div>
              </Col>
              <Col className="mt-5" md={4}>
                <h5>Legal</h5>
                <ul className="list-unstyled">
                  <li>
                    <a href="#" className="text-light">
                      Terms of Service
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-light">
                      Privacy Policy
                    </a>
                  </li>
                </ul>
              </Col>
            </Row>
          </Container>
        </footer>
      )}
    </>
  );
};

export default Footer;
