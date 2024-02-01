import NavItem from "../components/NavItem/NavItem";
import Footer from "../components/Footer/Footer";
import { Outlet, useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { me } from "../config/Redux/Action/authAction";

const NavbarFooter = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.authReducer);
  const { idUser } = useParams();
  const token = localStorage.getItem("token");
  const nav = useNavigate();

  useEffect(() => {
    if (token) {
      // CEK APAKAH ADA TOKEN
      dispatch(me(token, nav));
    }
  }, [dispatch, token, nav]);

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
