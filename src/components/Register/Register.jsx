import { useEffect, useState } from "react";
import { Container, FloatingLabel, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

const Login = () => {
  const [screenWidth, setScreenWidth] = useState();

  useEffect(() => {
    setScreenWidth(window.innerWidth);
    window.addEventListener("resize", () => {
      setScreenWidth(window.innerWidth);
    });
  }, []);

  return (
    <>
      <div style={{ background: " #d63031", height: "auto" }}>
        {screenWidth >= 768 ? (
          <Container
            className="p-0 d-flex justify-content-center align-items-center font-popins "
            style={{ height: "100vh" }}
          >
            {screenWidth >= 768 && (
              <div className="mx-4 w-25">
                <div className="d-flex justify-content-center">
                  <img src="https://via.placeholder.com/275x275" alt="logo" />
                </div>
                <p
                  className="text-white text-center m-0"
                  style={{ fontSize: "22px" }}
                >
                  Tempat Belanja Pakaian Anda
                </p>
              </div>
            )}
            <div className="bg-white p-3 px-4 login-container mx-4 rounded">
              <h2 className="text-center mb-4">Daftar</h2>
              <form style={{ width: "23rem" }}>
                <FloatingLabel
                  className="mb-2"
                  controlId="floatingInputNama"
                  label="Nama"
                >
                  <Form.Control type="text" placeholder="Nama" required />
                </FloatingLabel>
                <FloatingLabel
                  className="mb-2"
                  controlId="floatingInputNoTelp"
                  label="NoTelp"
                >
                  <Form.Control type="number" placeholder="NoTelp" required />
                </FloatingLabel>
                <FloatingLabel
                  className="mb-2"
                  controlId="floatingInputAlamat"
                  label="Alamat"
                >
                  <Form.Control as="textarea" placeholder="Alamat" required />
                </FloatingLabel>
                <FloatingLabel
                  className="mb-2"
                  controlId="floatingInputEmail"
                  label="Email"
                >
                  <Form.Control type="email" placeholder="Email" required />
                </FloatingLabel>
                <FloatingLabel
                  className="mb-2"
                  controlId="floatingInputPassword"
                  label="Password"
                >
                  <Form.Control
                    type="password"
                    placeholder="Password"
                    required
                  />
                </FloatingLabel>
                <FloatingLabel
                  className="mb-2"
                  controlId="floatingInputConfirmPassword"
                  label="Confirm Password"
                >
                  <Form.Control
                    type="text"
                    placeholder="ConfirmPassword"
                    required
                  />
                </FloatingLabel>
                <div className="d-flex justify-content-center mt-3">
                  <button type="submit" className="btn btn-primary">
                    Daftar
                  </button>
                </div>
                <p className="text-center mt-3">
                  Sudah memiliki akun? <Link to="/login">Login</Link>
                </p>
              </form>
            </div>
          </Container>
        ) : (
          <Container
            className="p-0 d-flex justify-content-center align-items-center font-popins"
            style={{ minHeight: "100vh" }}
          >
            <div className={`${screenWidth >= 768 ? "w-25 mx-4" : "w-100 "}`}>
              <div className="bg-white p-3 px-4 login-container mx-4 rounded">
                <h2 className="text-center mb-4">Daftar</h2>
                <form>
                  <FloatingLabel
                    className="mb-2"
                    controlId="floatingInputNama"
                    label="Nama"
                  >
                    <Form.Control type="text" placeholder="Nama" required />
                  </FloatingLabel>
                  <FloatingLabel
                    className="mb-2"
                    controlId="floatingInputNoTelp"
                    label="NoTelp"
                  >
                    <Form.Control type="number" placeholder="NoTelp" required />
                  </FloatingLabel>
                  <FloatingLabel
                    className="mb-2"
                    controlId="floatingInputAlamat"
                    label="Alamat"
                  >
                    <Form.Control as="textarea" placeholder="Alamat" required />
                  </FloatingLabel>
                  <FloatingLabel
                    className="mb-2"
                    controlId="floatingInputEmail"
                    label="Email"
                  >
                    <Form.Control type="email" placeholder="Email" required />
                  </FloatingLabel>
                  <FloatingLabel
                    className="mb-2"
                    controlId="floatingInputPassword"
                    label="Password"
                  >
                    <Form.Control
                      type="password"
                      placeholder="Password"
                      required
                    />
                  </FloatingLabel>
                  <FloatingLabel
                    className="mb-2"
                    controlId="floatingInputConfirmPassword"
                    label="Confirm Password"
                  >
                    <Form.Control
                      type="text"
                      placeholder="ConfirmPassword"
                      required
                    />
                  </FloatingLabel>
                  <div className="d-flex justify-content-center mt-3">
                    <button type="submit" className="btn btn-primary">
                      Daftar
                    </button>
                  </div>
                  <p className="text-center mt-3">
                    Sudah memiliki akun? <Link to="/login">Login</Link>
                  </p>
                </form>
              </div>
            </div>
          </Container>
        )}
      </div>
    </>
  );
};

export default Login;