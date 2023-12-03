import Batik from "../../assets/batik.png";
import { useState } from "react";
import NewProduct from "./NewProduct";
import { Container } from "react-bootstrap";
import "./nweproduct.css";
import { Link } from "react-router-dom";

function ListNewProduct() {
  const [newProduct, setNewProduct] = useState([
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
      <h2>Produk Terbaru</h2>
      <div className="detail-product-container d-flex p-3">
        {newProduct.map((item) => {
          return (
            <Link to={"/" + item.id} key={item.id}>
              <NewProduct
                image={item.imageUrl}
                title={item.title}
                price={item.price}
              />
            </Link>
          );
        })}
      </div>
    </Container>
  );
}

export default ListNewProduct;
