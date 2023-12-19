import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { storeProducts } from "../../../config/Redux/Action/productAction";

const AddProducts = () => {
  const [values, setValues] = useState({
    name: "",
    price: "",
    size: "",
    color: "",
    quantity: "",
    description: "",
  });

  const [image, setImage] = useState(null);

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    // storeProducts didapat dari productAction untuk menambahkan produk
    dispatch(storeProducts(values, image, navigate)); // navigate untuk kembali ke awal
  };

  return (
    <div className="d-flex w-100 vh-100 justify-content-center align-items-center bg-light">
      <div className="w-50 border bg-white shadow px-5 pt-3 pb-5 rounded">
        <h1>Tambah Produk</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-2">
            <label htmlFor="name">Tambah Gambar</label>
            <input
              type="file"
              name="img"
              className="form-control"
              placeholder="Masukkan Gambar"
              onChange={(e) => setImage(e.target.files[0])}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="name">Nama Produk</label>
            <input
              type="text"
              name="name"
              className="form-control"
              placeholder="Masukkan Product"
              onChange={(e) => setValues({ ...values, name: e.target.value })}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="name">Harga</label>
            <input
              type="text"
              name="price"
              className="form-control"
              placeholder="Masukkan Harga"
              onChange={(e) => setValues({ ...values, price: e.target.value })}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="name">Size</label>
            <input
              type="text"
              name="size"
              className="form-control"
              placeholder="Masukkan Size"
              onChange={(e) => setValues({ ...values, size: e.target.value })}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="name">Color</label>
            <input
              type="text"
              name="color"
              className="form-control"
              placeholder="Masukkan Color"
              onChange={(e) => setValues({ ...values, color: e.target.value })}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="name">Quantity</label>
            <input
              type="text"
              name="quantity"
              className="form-control"
              placeholder="Masukkan Quantity"
              onChange={(e) =>
                setValues({ ...values, quantity: e.target.value })
              }
            />
          </div>
          <div className="mb-2">
            <label htmlFor="name">Description</label>
            <textarea
              type="text"
              name="description"
              className="form-control"
              placeholder="Masukkan Description"
              onChange={(e) =>
                setValues({ ...values, description: e.target.value })
              }
            />
          </div>
          <button className="btn btn-success">Submit</button>
          <Link to="/admin" className="btn btn-primary ms-3">
            Back
          </Link>
        </form>
      </div>
    </div>
  );
};

export default AddProducts;
