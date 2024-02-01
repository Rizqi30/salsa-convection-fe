import { useEffect } from "react";
import NewProduct from "./NewProduct";
import { Container } from "react-bootstrap";
import "./newproduct.css";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { indexProducts } from "../../config/Redux/Action";

function ListNewProduct() {
  const dispatch = useDispatch();
  const { idUser } = useParams();

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

  return (
    <Container style={{ padding: 22 }}>
      <h2>Produk Terbaru</h2>
      <div className="detail-product-container d-flex p-3">
        {allProducts.map((item) => {
          if (item.status == "New") {
            return (
              <Link
                to={"/" + idUser + "/" + item.id}
                key={item.id}
                style={{ textDecoration: "none" }}
              >
                <NewProduct
                  image={"http://127.0.0.1:8000/images/" + item.img}
                  title={item.name}
                  price={formatPriceInRupiah(item.price)}
                />
              </Link>
            );
          }
        })}
      </div>
    </Container>
  );
}

export default ListNewProduct;
