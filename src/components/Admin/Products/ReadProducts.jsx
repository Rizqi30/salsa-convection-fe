import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { showProductById } from "../../../config/Redux/Action/productAction";

const ReadProducts = () => {
  const dispatch = useDispatch();

  const { id } = useParams();

  const { productById } = useSelector((state) => state.productReducer);

  useEffect(() => {
    dispatch(showProductById(id));
  }, [dispatch, id]);

  return (
    <div
      className="d-flex w-100 justify-content-center py-5 bg-light"
      style={{ height: "fit-content" }}
    >
      <div
        className="w-50 border bg-white shadow px-5 pt-3 pb-5 rounded"
        style={{ height: "fit-content" }}
      >
        <h3>Detail Produk Salsa Convection</h3>
        <div className="mb-2">
          <strong>Produk: </strong>
          <img
            className="img-fluid"
            src={`http://127.0.0.1:8000/images/${productById.img}`}
            alt={productById.name}
          />
        </div>
        <div className="mb-2">
          <strong>Nama: {productById.name}</strong>
        </div>
        <div className="mb-2">
          <strong>Harga: {productById.price}</strong>
        </div>
        <div className="mb-2">
          <strong>Ukuran: {productById.size}</strong>
        </div>
        <div className="mb-2">
          <strong>Warna: {productById.color}</strong>
        </div>
        <div className="mb-2">
          <strong>Jumlah: {productById.quantity}</strong>
        </div>
        <div className="mb-2">
          <strong>Deskripsi: {productById.description}</strong>
        </div>
        <Link
          to={"/admin/update/" + productById.id}
          className="btn btn-success"
        >
          Edit
        </Link>
        <Link to="/admin" className="btn btn-primary ms-3">
          Back
        </Link>
      </div>
    </div>
  );
};

export default ReadProducts;
