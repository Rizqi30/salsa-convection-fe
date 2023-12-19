import "./style.css";
import SideBar from "./SideBar";
import Home from "./Home";
import Header from "./Header";
import { useState } from "react";
import { Outlet } from "react-router-dom";

function Admin() {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false);

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle);
  };

  return (
    <div className="grid-container">
      <Header OpenSidebar={OpenSidebar} />
      <SideBar
        openSidebarToggle={openSidebarToggle}
        OpenSidebar={OpenSidebar}
      />
      <div className="content d-flex">
        <Outlet />
      </div>
      {/* <Home /> */}
    </div>
  );
}

export default Admin;
