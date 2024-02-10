import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { storeProducts } from "../../../config/Redux/Action/productAction";

const AddProducts = () => {
  const [values, setValues] = useState({
    name: "",
    price: "",
    size: "",
    color: "",
    categories: "",
    quantity: "",
    description: "",
    status: "",
  });

  const [image, setImage] = useState(null);

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const { user } = useSelector((state) => state.authReducer);
  const handleSubmit = (event) => {
    event.preventDefault();
    // storeProducts didapat dari productAction untuk menambahkan produk
    dispatch(storeProducts(values, image, navigate, user.id)); // navigate untuk kembali ke awal
  };

  return (
    <div className="d-flex w-100 vh-100 justify-content-center align-items-center bg-light">
      <div className="w-50 border bg-white shadow px-5 pt-3 pb-5 rounded">
        <h1>Tambah Produk</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-2">
            <label htmlFor="name">Gambar Produk</label>
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
              placeholder="Masukkan Produk"
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
            <label htmlFor="name">Warna</label>
            <input
              type="text"
              name="color"
              className="form-control"
              placeholder="Masukkan Warna"
              onChange={(e) => setValues({ ...values, color: e.target.value })}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="name">Kategori</label>
            <select
              name="categories"
              className="form-control"
              onChange={(e) =>
                setValues({ ...values, categories: e.target.value })
              }
            >
              <option value="">Pilih Kategori</option>
              <option value="Batik">Batik</option>
              <option value="Celana">Celana</option>
              <option value="Gamis">Gamis</option>
              <option value="Hijab">Hijab</option>
              <option value="Kaos">Kaos</option>
              <option value="Kemeja">Kemeja</option>
              <option value="Kemeja">Pants</option>
              <option value="Kemeja">Rok</option>
            </select>
          </div>
          <div className="mb-2">
            <label htmlFor="name">Quantity</label>
            <input
              type="text"
              name="quantity"
              className="form-control"
              placeholder="Masukkan Jumlah"
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
          <div className="mb-2">
            <label htmlFor="name">Status</label>
            <select
              name="status"
              className="form-control"
              onChange={(e) => setValues({ ...values, status: e.target.value })}
            >
              <option value="">Pilih Status</option>
              <option value="New">New</option>
              <option value="Latest">Latest</option>
            </select>
          </div>

          <button className="btn btn-success">Submit</button>
          <Link to={"/admin/" + user.id} className="btn btn-primary ms-3">
            Back
          </Link>
        </form>
      </div>
    </div>
  );
};

export default AddProducts;
