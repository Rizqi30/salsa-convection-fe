import { useState } from "react";
import Category from "./Category";
import Batik from "../../assets/batik.png";
import Celana from "../../assets/celana.png";
import Gamis from "../../assets/gamis.png";
import Hijab from "../../assets/hijab.png";
import Kaos from "../../assets/kaos.png";
import Kemeja from "../../assets/kemeja.png";
import Pants from "../../assets/pants.png";
import Skirt from "../../assets/skirt.png";
import "./ListCategory.css";
import { Container } from "react-bootstrap";

function ListCategory() {
  const [category, setCategory] = useState([
    {
      id: 1,
      imageUrl: Batik,
      desc: "Batik",
    },
    {
      id: 2,
      imageUrl: Celana,
      desc: "Celana",
    },
    {
      id: 3,
      imageUrl: Gamis,
      desc: "Gamis",
    },
    {
      id: 4,
      imageUrl: Hijab,
      desc: "Hijab",
    },
    {
      id: 5,
      imageUrl: Kaos,
      desc: "Kaos",
    },
    {
      id: 6,
      imageUrl: Kemeja,
      desc: "Kemeja",
    },
    {
      id: 7,
      imageUrl: Pants,
      desc: "Pants",
    },
    {
      id: 8,
      imageUrl: Skirt,
      desc: "Rok",
    },
  ]);

  return (
    <Container
      style={{
        padding: 22,
      }}
    >
      <h2>Kategori</h2>
      <div className="category-container d-flex md-p-3">
        {category.map((item) => (
          <Category
            key={item.id}
            image={item.imageUrl}
            keterangan={item.desc}
          />
        ))}
      </div>
    </Container>
  );
}

export default ListCategory;
