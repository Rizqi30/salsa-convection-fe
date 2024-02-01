import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  destroyProductsById,
  indexProducts,
} from "../../../config/Redux/Action/productAction";
import { Link } from "react-router-dom";

function HomeProducts() {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.authReducer);
  const { allProducts } = useSelector((state) => state.productReducer);

  const handleDelete = (id) => {
    const confirm = window.confirm("Yakin mau hapus produk?");
    if (confirm) {
      dispatch(destroyProductsById(id));
    }
  };

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
          <Link to={"/admin/create/" + user.id} className="btn btn-success">
            Add +
          </Link>
        </div>
        <div className="table-responsive">
          <table
            className="table table-stipend overflow-x-auto"
            style={{ width: "100%" }}
          >
            <thead>
              <tr>
                <th style={{ width: "2rem" }}>Produk</th>
                <th style={{ width: "2rem" }}>Nama</th>
                <th style={{ width: "2rem" }}>Harga</th>
                <th style={{ width: "2rem" }}>Ukuran</th>
                <th style={{ width: "2rem" }}>Warna</th>
                <th style={{ width: "2rem" }}>Jumlah</th>
                <th style={{ width: "2rem" }}>Status</th>
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
                      alt="product"
                      style={{
                        height: "5rem",
                        width: "100%",
                        objectFit: "cover",
                      }}
                    />
                  </td>
                  <td>{item.name}</td>
                  <td>{item.price}</td>
                  <td>{item.size}</td>
                  <td>{item.color}</td>
                  <td>{item.quantity}</td>
                  <td>{item.status}</td>
                  <td>
                    <div className="d-flex">
                      <Link to={"/admin/read/" + item.id}>
                        <button className="btn btn-sm btn-info me-2">
                          Read
                        </button>
                      </Link>
                      <Link to={"/admin/update/" + item.id}>
                        <button className="btn btn-sm btn-primary me-2">
                          Update
                        </button>
                      </Link>
                      <button
                        onClick={() => handleDelete(item.id)}
                        className="btn btn-sm btn-danger"
                      >
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default HomeProducts;
