import {
  BsCart3,
  BsFillArchiveFill,
  BsMenuButtonWideFill,
} from "react-icons/bs";
import { useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";

function SideBar({ openSidebarToggle, OpenSidebar }) {
  const { user } = useSelector((state) => state.authReducer);
  const location = useLocation();
  return (
    <aside
      id="sidebar"
      className={openSidebarToggle ? "sidebar-responsive" : ""}
    >
      <div className="sidebar-title text-white">
        <div className="sidebar-brand">
          <BsCart3 className="icon_header" /> SHOP
        </div>
        <span className="icon close_icon" onClick={OpenSidebar}>
          X
        </span>
      </div>

      <ul className="sidebar-list">
        <Link
          to={"/admin/" + user.id}
          className={`text-decoration-none text-secondary ${
            location.pathname === "/admin/" + user.id && "text-black"
          }`}
        >
          <li
            className={`sidebar-list-item ${
              location.pathname === "/admin/" + user.id && "bg-white"
            }`}
          >
            <BsFillArchiveFill className="icon" /> Products
          </li>
        </Link>
        <Link
          to={"/admin/transaction/" + user.id}
          className={`text-decoration-none text-secondary ${
            location.pathname === "/admin/transaction/" + user.id &&
            "text-black"
          }`}
        >
          <li
            className={`sidebar-list-item ${
              location.pathname === "/admin/transaction/" + user.id &&
              "bg-white"
            }`}
          >
            <BsMenuButtonWideFill className="icon" /> Reports
          </li>
        </Link>
      </ul>
    </aside>
  );
}

export default SideBar;
