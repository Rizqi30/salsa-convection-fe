import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { filterByCategories, indexProducts } from "../config/Redux/Action";
import { Col, Container, Row } from "react-bootstrap";
import AllProduct from "../components/AllProducts/AllProduct";

const CategoryProduct = () => {
  const dispatch = useDispatch();
  const { idUser, categories } = useParams();

  const { allProducts, productByCategories } = useSelector(
    (state) => state.productReducer
  );

  const formatPriceInRupiah = (price) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
    }).format(price);
  };

  useEffect(() => {
    dispatch(indexProducts()); // indexPorducts didapat dari productAction
  }, [dispatch]);

  useEffect(() => {
    dispatch(filterByCategories(categories, allProducts)); // indexPorducts didapat dari productAction
  }, [dispatch, categories]);

  return (
    <Container style={{ padding: 22 }}>
      <h2>{categories}</h2>
      <Row className="flex-wrap">
        {productByCategories.map((item) => (
          <Col key={item.id} md={6} lg={3} className="p-3">
            <Link
              to={"/" + idUser + "/" + item.id}
              className="text-decoration-none"
            >
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
};

export default CategoryProduct;
