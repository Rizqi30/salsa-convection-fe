import NavItem from "../components/NavItem/NavItem";
import Footer from "../components/Footer/Footer";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { me } from "../config/Redux/Action/authAction";

const NavbarFooter = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const token = localStorage.getItem("token");
  const nav = useNavigate();
  const { user } = useSelector((state) => state.authReducer);

  useEffect(() => {
    if (token && location.pathname === "/") {
      // CEK APAKAH ADA TOKEN
      dispatch(me(token, nav));
    }
  }, [dispatch, token, nav, location.pathname]);

  return (
    <>
      <NavItem role={user.role} />
      <div style={{ minHeight: "72vh" }}>
        <Outlet />
      </div>
      <Footer />
      {/* <Admin /> */}
    </>
  );
};

export default NavbarFooter;
