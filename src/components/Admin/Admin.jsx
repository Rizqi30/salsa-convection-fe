import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import SideBar from "./SideBar";
import Home from "./Home";

function Admin() {
  return (
    <div className="container-fluid bg-secondary min-vh-100">
      <div className="row">
        <div className="col-2 bg-white vh-100">
          <SideBar />
        </div>
      </div>
      <div className="col-auto">
        <Home />
      </div>
    </div>
  );
}

export default Admin;
