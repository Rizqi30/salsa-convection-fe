import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import {
  showProductById,
  updateProductsById,
} from "../../../config/Redux/Action/productAction";

const UpdateProducts = () => {
  const [values, setValues] = useState({
    img: "",
    name: "",
    price: "",
    size: "",
    color: "",
    quantity: "",
    description: "",
  });

  const { id } = useParams();

  const [image, setImage] = useState(null);
  // ...
  const [imagePreview, setImagePreview] = useState("");

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const { productById } = useSelector((state) => state.productReducer);

  // ...
  const handleImageChange = (e) => {
    const selectedImage = e.target.files[0];
    setImage(selectedImage);

    // Buat URL objek untuk preview gambar
    const imageURL = URL.createObjectURL(selectedImage);
    setImagePreview(imageURL);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(updateProductsById(values, image, id, navigate));
    console.log(values);
  };

  useEffect(() => {
    dispatch(showProductById(id));
  }, [dispatch, id]);

  useEffect(() => {
    setValues({
      img: productById.img,
      name: productById.name,
      price: productById.price,
      size: productById.size,
      color: productById.color,
      quantity: productById.quantity,
      description: productById.description,
    });
    setImagePreview("http://127.0.0.1:8000/images/" + productById.img);
  }, [productById]);

  return (
    <div
      className="d-flex w-100 justify-content-center py-5 bg-light"
      style={{ height: "fit-content" }}
    >
      <div
        className="w-50 border bg-white shadow px-5 pt-3 pb-5 rounded"
        style={{ height: "fit-content" }}
      >
        <h1>Update Produk</h1>
        <form onSubmit={handleSubmit}>
          {imagePreview && (
            <img src={imagePreview} alt="Preview" className="img-fluid mt-2" />
          )}

          <div className="mb-2">
            <label htmlFor="name">Gambar Produk</label>
            <input
              type="file"
              name="img"
              className="form-control"
              placeholder="Masukkan Gambar"
              onChange={handleImageChange}
            />
          </div>

          <div className="mb-2">
            <label htmlFor="name">Nama Produk</label>
            <input
              type="text"
              name="name"
              className="form-control"
              placeholder="Masukkan Product"
              value={values.name}
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
              value={values.price}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="name">Size</label>
            <input
              type="text"
              name="size"
              className="form-control"
              placeholder="Masukkan Size"
              value={values.size}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="name">Color</label>
            <input
              type="text"
              name="color"
              className="form-control"
              placeholder="Masukkan Warna"
              value={values.color}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="name">Quantity</label>
            <input
              type="text"
              name="quantity"
              className="form-control"
              placeholder="Masukkan Quantity"
              value={values.quantity}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="name">Description</label>
            <textarea
              type="text"
              name="description"
              className="form-control"
              placeholder="Masukkan Description"
              value={values.description}
            />
          </div>
          <button className="btn btn-success" type={"submit"}>
            Update
          </button>
          <Link to="/admin" className="btn btn-primary ms-3">
            Back
          </Link>
        </form>
      </div>
    </div>
  );
};

export default UpdateProducts;
