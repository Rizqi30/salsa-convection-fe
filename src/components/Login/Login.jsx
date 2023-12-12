import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../../config/Redux/Action/authAction";

const Login = () => {
  const [screenWidth, setScreenWidth] = useState();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const dispatch = useDispatch();

  const nav = useNavigate(); // untuk menuju ke home setelah login

  // Cek token apakah sudah diisi
  const { token } = useSelector((state) => state.authReducer);
  console.log(token);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login(formData, nav)); // tambah nav
  };

  useEffect(() => {
    setScreenWidth(window.innerWidth);
    window.addEventListener("resize", () => {
      setScreenWidth(window.innerWidth);
    });
  }, []);

  return (
    <>
      <div style={{ background: " #d63031", height: "100vh" }}>
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
              <h2 className="text-center mb-4">Selamat Datang</h2>
              <form onSubmit={handleSubmit}>
                <div className="mb-2">
                  <label htmlFor="exampleInputEmail1" className="form-label">
                    Email
                  </label>
                  <input
                    name="email"
                    onChange={handleChange}
                    style={{ width: "23rem" }}
                    type="email"
                    className="form-control"
                    id="exampleInputEmail1"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="exampleInputPassword1" className="form-label">
                    Password
                  </label>
                  <input
                    name="password"
                    onChange={handleChange}
                    type="password"
                    className="form-control"
                    id="exampleInputPassword1"
                  />
                </div>
                <p className="text-end mb-4">
                  Belum punya akun? <Link to="/daftar">Daftar</Link>
                </p>
                <div className="d-flex justify-content-center ">
                  <button type="submit" className="btn btn-primary">
                    Login
                  </button>
                </div>
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
                <h2 className="text-center mb-4">Selamat Datang</h2>
                <form onSubmit={handleSubmit}>
                  <div className="mb-2">
                    <label htmlFor="exampleInputEmail1" className="form-label">
                      Email
                    </label>
                    <input
                      name="email"
                      onChange={handleChange}
                      style={{ width: "100%" }}
                      type="email"
                      className="form-control"
                      id="exampleInputEmail1"
                    />
                  </div>
                  <div className="mb-3">
                    <label
                      htmlFor="exampleInputPassword1"
                      className="form-label"
                    >
                      Password
                    </label>
                    <input
                      name="password"
                      onChange={handleChange}
                      style={{ width: "100%" }}
                      type="password"
                      className="form-control"
                      id="exampleInputPassword1"
                    />
                  </div>
                  <p className="text-end mb-4">
                    Belum punya akun? <Link to="/daftar">Daftar</Link>
                  </p>
                  <div className="d-flex justify-content-center">
                    <button type="submit" className="btn btn-primary">
                      Login
                    </button>
                  </div>
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
