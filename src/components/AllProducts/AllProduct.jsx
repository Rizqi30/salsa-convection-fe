import React from "react";
import Card from "react-bootstrap/Card";

function AllProduct(props) {
  return (
    <div>
      <Card className="mx-3" style={{ width: "18rem" }}>
        <Card.Img
          variant="top"
          src={props.image}
          style={{ height: "15rem", objectFit: "cover" }}
        />
        <Card.Body>
          <Card.Title>{props.title}</Card.Title>
          <Card.Text>{props.price}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}

export default AllProduct;
