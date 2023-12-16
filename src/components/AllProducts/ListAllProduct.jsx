import Batik from "../../assets/batik.png";
import { useEffect, useState } from "react";
import AllProduct from "./AllProduct";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { indexProducts } from "../../config/Redux/Action/productAction";

function ListAllProduct() {
  const dispatch = useDispatch();

  const { allProducts } = useSelector((state) => state.productReducer);

  const formatPriceInRupiah = (price) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
    }).format(price);
  };

  useEffect(() => {
    dispatch(indexProducts()); // indexPorducts didapat dari productAction
  }, [dispatch]);

  console.log(allProducts);

  return (
    <Container style={{ padding: 22 }}>
      <h2>Semua Produk</h2>
      <Row className="flex-wrap">
        {allProducts.map((item) => (
          <Col key={item.id} md={6} lg={3} className="p-3">
            <Link to={"/" + item.id} className="text-decoration-none">
              <AllProduct
                image={"http://127.0.0.1:8000/images/" + item.img}
                title={item.name}
                price={formatPriceInRupiah(item.price)}
              />
            </Link>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default ListAllProduct;
