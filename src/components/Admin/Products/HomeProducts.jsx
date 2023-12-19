import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { indexProducts } from "../../../config/Redux/Action/productAction";
import { Link } from "react-router-dom";

function HomeProducts() {
  const dispatch = useDispatch();

  const { allProducts } = useSelector((state) => state.productReducer);

  useEffect(() => {
    dispatch(indexProducts()); // indexProducts didapat dari productAction untuk menampilkan keseluruhan produk
  }, [dispatch]);

  return (
    <div
      className="d-flex flex-column justify-content-center align-items-center bg-light vh-100 "
      style={{ width: "100%", zIndex: 0 }}
    >
      <h1>Daftar Produk Salsa Convection</h1>
      <div className="w-75 rounded bg-white border shadow p-4">
        <div className="d-flex justify-content-end">
          <Link to="/admin/create" className="btn btn-success">
            Add +
          </Link>
        </div>
        <table className="table table-stipend" style={{ width: "100%" }}>
          <thead>
            <tr>
              <th style={{ width: "2rem" }}>Product</th>
              <th style={{ width: "2rem" }}>Name</th>
              <th style={{ width: "2rem" }}>Harga</th>
              <th style={{ width: "2rem" }}>Size</th>
              <th style={{ width: "2rem" }}>Color</th>
              <th style={{ width: "2rem" }}>Quantity</th>
              <th style={{ width: "2rem" }}>Action</th>
            </tr>
          </thead>
          <tbody>
            {allProducts.map((item) => (
              <tr key={item.id}>
                <td>
                  <img
                    className="img-fluid"
                    src={"http://127.0.0.1:8000/images/" + item.img}
                  />
                </td>
                <td>{item.name}</td>
                <td>{item.price}</td>
                <td>{item.size}</td>
                <td>{item.color}</td>
                <td>{item.quantity}</td>
                <td>
                  <Link to={"/admin/read/" + item.id}>
                    <button className="btn btn-sm btn-primary me-2">
                      Read
                    </button>
                  </Link>
                  <Link to={"/admin/update/" + item.id}>
                    <button className="btn btn-sm btn-primary me-2">
                      Update
                    </button>
                  </Link>
                  <Link to={"/admin/delete/" + item.id}>
                    <button className="btn btn-sm btn-danger">Delete</button>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default HomeProducts;
