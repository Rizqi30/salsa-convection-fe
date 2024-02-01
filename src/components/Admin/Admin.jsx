import "./style.css";
import SideBar from "./SideBar";
import Header from "./Header";
import { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { me } from "../../config/Redux/Action";

function Admin() {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false);
  const dispatch = useDispatch();
  const token = localStorage.getItem("token");
  const { user } = useSelector((state) => state.authReducer);
  const nav = useNavigate();

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle);
  };

  useEffect(() => {
    dispatch(me(token));
    if (user.role && user.role !== "admin") {
      nav("/");
    }
  }, [dispatch, token, nav, user.role, user.id]);

  return (
    <div className="grid-container">
      <Header OpenSidebar={OpenSidebar} />
      <SideBar
        openSidebarToggle={openSidebarToggle}
        OpenSidebar={OpenSidebar}
      />
      <div className="content d-flex" style={{ overflowY: "auto" }}>
        <Outlet />
      </div>
    </div>
  );
}

export default Admin;
