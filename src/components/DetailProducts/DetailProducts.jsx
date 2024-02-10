import { useEffect, useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import ProductDescription from "./ProductDescription";
import { useDispatch, useSelector } from "react-redux";
import { showProductById } from "../../config/Redux/Action/productAction";
import { useNavigate, useParams } from "react-router-dom";
import { storeCarts } from "../../config/Redux/Action/cartAction";

const DetailProduct = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { productById } = useSelector((state) => state.productReducer);
  const { idUser } = useParams();

  const [selectedSize, setSelectedSize] = useState("");
  const [selectedColor, setSelectedColor] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [size, setSize] = useState([]);
  const [color, setColor] = useState([]);

  const token = localStorage.getItem("token"); // jwt token
  const nav = useNavigate();
  const handleLogin = () => {
    nav("/login");
  };

  const formatPriceInRupiah = (price) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
    }).format(price);
  };

  const handleSizeChange = (size) => {
    setSelectedSize(size);
  };

  const handleColorChange = (color) => {
    setSelectedColor(color);
  };

  const handleQuantityChange = (change) => {
    setQuantity((prevQuantity) => Math.max(1, prevQuantity + change));
  };

  const handleAddToCart = () => {
    // Implement logic to add product to the shopping cart
    console.log(idUser);
    const data = {
      user_id: idUser,
      product_id: productById.id,
      size: selectedSize,
      color: selectedColor,
      quantity: quantity,
      price: productById.price * quantity,
    };
    dispatch(storeCarts(data));
  };

  // mendapatkan data size
  useEffect(() => {
    const sizeData = productById?.size;
    if (sizeData) {
      const splitSizes = sizeData.split(","); // Memisahkan string menjadi array
      const delSpace = splitSizes.map((item) => item.trim()); // Menghapus spasi pada setiap item array
      setSize(delSpace);
    }
  }, [productById]);

  // mendapatkan data color
  useEffect(() => {
    const colorData = productById?.color;
    if (colorData) {
      const splitColors = colorData.split(","); // Memisahkan string menjadi array
      const delSpace = splitColors.map((item) => item.trim()); // Menghapus spasi pada setiap item array
      setColor(delSpace);
    }
  }, [productById]);

  useEffect(() => {
    dispatch(showProductById(id));
  }, [dispatch, id]);

  return (
    <>
      <Container
        className="mb-2 my-4 p-5"
        style={{ boxShadow: "0px 0px 10px 0px rgba(0, 0, 0, 0.2)" }}
      >
        <Row>
          <Col md={6}>
            <img
              src={"http://127.0.0.1:8000/images/" + productById.img}
              alt="Product"
              className="img-fluid"
            />
          </Col>
          <Col md={6}>
            <h3>{productById.name}</h3>
            <h2 className="my-4">
              Harga: {formatPriceInRupiah(productById?.price)}
            </h2>
            <h5 className="mb-3">Pilih Size</h5>
            <div className="mb-4">
              {size.map((item) => (
                <Button
                  key={item}
                  className="mx-1"
                  variant={selectedSize === item ? "primary" : "light"}
                  onClick={() => handleSizeChange(item)}
                >
                  Size {item}
                </Button>
              ))}
            </div>
            <h5 className="mb-3">Pilih Warna</h5>
            <div className="mb-4">
              {color.map((item) => (
                <Button
                  key={item}
                  className="mx-1"
                  variant={selectedColor === item ? "danger" : "light"}
                  onClick={() => handleColorChange(item)}
                >
                  {item}
                </Button>
              ))}
            </div>
            <h5 className="mb-3">Kuantitas</h5>
            <div className="mb-5">
              <div>
                <Button
                  className="mx-1"
                  variant="secondary"
                  onClick={() => handleQuantityChange(-1)}
                >
                  -
                </Button>
                <Button variant="light" disabled>
                  {quantity}
                </Button>
                <Button
                  variant="secondary"
                  onClick={() => handleQuantityChange(1)}
                >
                  +
                </Button>
              </div>
              <p>Jumlah Stock: {productById?.quantity}</p>
            </div>
            {!token || token == "" || idUser === undefined ? (
              <div className="my-2">
                <Button
                  className="mx-1"
                  variant="primary"
                  onClick={handleLogin}
                >
                  Add to Cart
                </Button>
              </div>
            ) : (
              <div className="my-2">
                <Button
                  className="mx-1"
                  variant="primary"
                  onClick={handleAddToCart}
                >
                  Add to Cart
                </Button>
              </div>
            )}
          </Col>
        </Row>
      </Container>
      <ProductDescription desc={productById.description} />
    </>
  );
};

export default DetailProduct;
