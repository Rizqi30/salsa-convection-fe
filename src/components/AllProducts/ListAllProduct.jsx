import Batik from "../../assets/batik.png";
import { useState } from "react";
import AllProduct from "./AllProduct";
import { Container, Row, Col } from "react-bootstrap";

function ListAllProduct() {
  const [allProducts, setAllProducts] = useState([
    {
      id: 1,
      imageUrl: Batik,
      title: "Batik",
      price: "Rp 100.000",
    },
    {
      id: 2,
      imageUrl: Batik,
      title: "Batik",
      price: "Rp 100.000",
    },
    {
      id: 3,
      imageUrl: Batik,
      title: "Batik",
      price: "Rp 100.000",
    },
    {
      id: 4,
      imageUrl: Batik,
      title: "Batik",
      price: "Rp 100.000",
    },
    {
      id: 5,
      imageUrl: Batik,
      title: "Batik",
      price: "Rp 100.000",
    },
    {
      id: 6,
      imageUrl: Batik,
      title: "Batik",
      price: "Rp 100.000",
    },
    {
      id: 7,
      imageUrl: Batik,
      title: "Batik",
      price: "Rp 100.000",
    },
  ]);

  return (
    <Container style={{ padding: 22 }}>
      <h2>Semua Produk</h2>
      <Row className="flex-wrap">
        {allProducts.map((item) => (
          <Col key={item.id} md={6} lg={3} className="p-3">
            <AllProduct
              image={item.imageUrl}
              title={item.title}
              price={item.price}
            />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default ListAllProduct;
