import { useEffect } from "react";
import NavItem from "../components/NavItem/NavItem";
import Footer from "../components/Footer/Footer";
import { Outlet } from "react-router-dom";
import { me } from "../config/Redux/Action/authAction";
import { useDispatch } from "react-redux";

const NavbarFooter = () => {
  // mendapatkan user saat Login
  const dispatch = useDispatch(); // useDispatch() digunakan untuk mengirim action ke reducer
  const token = localStorage.getItem("token");

  useEffect(() => {
    if (token) {
      // CEK APAKAH ADA TOKEN
      dispatch(me(token));
    }
  }, [dispatch, token]);

  return (
    <>
      <NavItem />
      <div style={{ minHeight: "72vh" }}>
        <Outlet />
      </div>
      <Footer />
      {/* <Admin /> */}
    </>
  );
};

export default NavbarFooter;
