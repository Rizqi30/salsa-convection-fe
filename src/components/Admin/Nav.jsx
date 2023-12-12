import React from "react";

function Nav() {
  return (
    <nav className="navbar navbar-expand-sm navbar-white bg-white">
      <div className="container-fluid">
        <button className="btn btn-light" id="sidebar-toggle">
          <i className="bi bi-list"></i>
        </button>
        <ul className="navbar-nav ms-auto ms-md-0 me-3 me-lg-4">
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdown"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <i className="bi bi-person-fill"></i>
            </a>
            <ul
              className="dropdown-menu dropdown-menu-end"
              aria-labelledby="navbarDropdown"
            >
              <li>
                <a className="dropdown-item" href="#">
                  Profile
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Settings
                </a>
              </li>
              <li>
                <hr className="dropdown-divider" />
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Logout
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </nav>

    // <nav className='navbar navbar-expand-sm navbar-white bg-white'>
    //   <i className="navbar-brand bi bi-justify-left"></i>

    // </nav>
  );
}

export default Nav;
