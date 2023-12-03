import React from "react";
import NavItem from "../components/NavItem/NavItem";
import Footer from "../components/Footer/Footer";
import { Outlet } from "react-router-dom";

const NavbarFooter = () => {
  return (
    <>
      <NavItem />
      <Outlet />
      <Footer />
    </>
  );
};

export default NavbarFooter;
