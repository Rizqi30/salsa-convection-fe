import Batik from "../../assets/batik.png";
import { useEffect, useState } from "react";
import AllProduct from "./AllProduct";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";

function ListAllProduct() {
  const [allProducts, setAllProducts] = useState([]);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/products")
      .then((response) => {
        setAllProducts(response.data.data);
        console.log(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <Container style={{ padding: 22 }}>
      <h2>Semua Produk</h2>
      <Row className="flex-wrap">
        {allProducts.map((item) => (
          <Col key={item.id} md={6} lg={3} className="p-3">
            <Link to={"/" + item.id}>
              <AllProduct
                image={"http://127.0.0.1:8000/images/" + item.img}
                title={item.title}
                price={item.price}
              />
            </Link>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default ListAllProduct;
