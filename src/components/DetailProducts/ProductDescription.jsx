import { Container } from "react-bootstrap";

const ProductDescription = (props) => {
  return (
    <Container
      className="p-4"
      style={{ boxShadow: "0px 0px 10px 0px rgba(0, 0, 0, 0.2)" }}
    >
      <h5>Deskripsi Produk</h5>
      <p>{props.desc}</p>
    </Container>
  );
};

export default ProductDescription;
