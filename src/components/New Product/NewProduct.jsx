import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function NewProduct(props) {
  return (
    <div>
      <Card className="mx-3" style={{ width: "18rem" }}>
        <Card.Img variant="top" src={props.image} />
        <Card.Body>
          <Card.Title>{props.title}</Card.Title>
          <Card.Text>{props.description}</Card.Text>
          <Button variant="primary">Beli</Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default NewProduct;
