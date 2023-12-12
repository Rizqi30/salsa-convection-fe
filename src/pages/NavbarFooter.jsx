import React from "react";
import NavItem from "../components/NavItem/NavItem";
import Footer from "../components/Footer/Footer";
import { Outlet } from "react-router-dom";
import Admin from "../components/Admin/Admin";

const NavbarFooter = () => {
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
