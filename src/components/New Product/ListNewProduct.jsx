import Batik from "../../assets/batik.png";
import { useState } from "react";
import NewProduct from "./NewProduct";
import { Container } from "react-bootstrap";

function ListNewProduct() {
  const [newProduct, setNewProduct] = useState([
    {
      id: 1,
      imageUrl: Batik,
      title: "Batik",
      desc: "Batik",
    },
    {
      id: 2,
      imageUrl: Batik,
      title: "Batik",
      desc: "Batik",
    },
    {
      id: 3,
      imageUrl: Batik,
      title: "Batik",
      desc: "Batik",
    },
    {
      id: 4,
      imageUrl: Batik,
      title: "Batik",
      desc: "Batik",
    },
    {
      id: 5,
      imageUrl: Batik,
      title: "Batik",
      desc: "Batik",
    },
    {
      id: 6,
      imageUrl: Batik,
      title: "Batik",
      desc: "Batik",
    },
    {
      id: 7,
      imageUrl: Batik,
      title: "Batik",
      desc: "Batik",
    },
  ]);

  return (
    <Container style={{ padding: 22 }}>
      <h2>Produk Terbaru</h2>
      <div className="category-container d-flex p-3">
        {newProduct.map((item) => {
          return (
            <NewProduct
              key={item.id}
              image={item.imageUrl}
              title={item.title}
              description={item.desc}
            />
          );
        })}
      </div>
    </Container>
  );
}

export default ListNewProduct;
