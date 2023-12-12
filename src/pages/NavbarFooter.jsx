import React, { useEffect } from "react";
import NavItem from "../components/NavItem/NavItem";
import Footer from "../components/Footer/Footer";
import { Outlet } from "react-router-dom";
import Admin from "../components/Admin/Admin";
import { me } from "../config/Redux/Action/authAction";
import { useDispatch } from "react-redux";

const NavbarFooter = () => {
  // mendapatkan user saat Login
  const dispatch = useDispatch(); // useDispatch() digunakan untuk mengirim action ke reducer
  const token = localStorage.getItem("token");

  useEffect(() => {
    dispatch(me(token));
  }, [dispatch, token]);

  return (
    <>
      <NavItem />
      <Outlet />
      <Footer />
      <Admin />
    </>
  );
};

export default NavbarFooter;
