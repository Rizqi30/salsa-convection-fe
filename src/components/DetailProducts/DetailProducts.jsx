import { useEffect, useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import Batik from "../../assets/batik.png";
import ProductDescription from "./ProductDescription";
import { useDispatch, useSelector } from "react-redux";
import { showProductById } from "../../config/Redux/Action/productAction";
import { useParams } from "react-router-dom";

const DetailProduct = () => {
  const [selectedSize, setSelectedSize] = useState("S");
  const [selectedColor, setSelectedColor] = useState("Blue");
  const [quantity, setQuantity] = useState(1);

  const dispatch = useDispatch();

  const { productById } = useSelector((state) => state.productReducer);

  const { id } = useParams();

  useEffect(() => {
    dispatch(showProductById(id));
  }, [dispatch, id]);

  const handleSizeChange = (size) => {
    setSelectedSize(size);
  };

  const handleColorChange = (color) => {
    setSelectedColor(color);
  };
  console.log(productById);

  const handleQuantityChange = (change) => {
    setQuantity((prevQuantity) => Math.max(1, prevQuantity + change));
  };

  const handleAddToCart = () => {
    // Implement logic to add product to the shopping cart
    console.log("Added to Cart:", {
      size: selectedSize,
      color: selectedColor,
      quantity: quantity,
    });
  };

  const handleBuyNow = () => {
    // Implement logic to proceed with the purchase
    console.log("Buy Now:", {
      size: selectedSize,
      color: selectedColor,
      quantity: quantity,
    });
  };

  return (
    <>
      <Container
        className="mb-2 my-4 p-5"
        style={{ boxShadow: "0px 0px 10px 0px rgba(0, 0, 0, 0.2)" }}
      >
        <Row>
          <Col md={6}>
            <img src={productById.img} alt="Product" className="img-fluid" />
          </Col>
          <Col md={6}>
            <h3>{productById.name}</h3>
            <h2 className="my-4">Harga: Rp {productById.price}</h2>

            <h5 className="mb-3">Pilih Size</h5>
            <div className="mb-4">
              <Button
                className="mx-1"
                variant={selectedSize === "S" ? "primary" : "light"}
                onClick={() => handleSizeChange("S")}
              >
                Size S
              </Button>
              <Button
                className="mx-1"
                variant={selectedSize === "M" ? "primary" : "light"}
                onClick={() => handleSizeChange("M")}
              >
                Size M
              </Button>
              <Button
                className="mx-1"
                variant={selectedSize === "L" ? "primary" : "light"}
                onClick={() => handleSizeChange("L")}
              >
                Size L
              </Button>
            </div>

            <h5 className="mb-3">Pilih Warna</h5>
            <div className="mb-4">
              <Button
                className="mx-1"
                variant={selectedColor === "Red" ? "danger" : "light"}
                onClick={() => handleColorChange("Red")}
              >
                Red
              </Button>
              <Button
                className="mx-1"
                variant={selectedColor === "Blue" ? "primary" : "light"}
                onClick={() => handleColorChange("Blue")}
              >
                Blue
              </Button>
              <Button
                className="mx-1"
                variant={selectedColor === "Green" ? "success" : "light"}
                onClick={() => handleColorChange("Green")}
              >
                Green
              </Button>
            </div>

            <h5 className="mb-3">Kuantitas</h5>
            <div className="mb-5">
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

            <div className="my-2">
              <Button
                className="mx-1"
                variant="primary"
                onClick={handleAddToCart}
              >
                Add to Cart
              </Button>
              <Button className="mx-1" variant="success" onClick={handleBuyNow}>
                Buy Now
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
      <ProductDescription desc={productById.description} />
    </>
  );
};

export default DetailProduct;
