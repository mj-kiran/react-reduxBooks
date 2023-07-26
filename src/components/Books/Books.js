import React from 'react'
import {  Card, ListGroup } from 'react-bootstrap';
// import { Link } from 'react-router-dom';

function Books({ item }) {
  return (
    <>
      <Card style={{ minHeight: "642px" }} className="my-3 p-3 rounded">
        <div style={{ minHeight: "401pxpx" }}>
          <Card.Img variant="top" src={item.image_url} className="p-3" />
        </div>
        <Card.Body>
          <Card.Title as="div">Item Name:{item.name}</Card.Title>
          {/* <Card.Text as="div">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text> */}
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroup.Item>{item.description}</ListGroup.Item>
          <ListGroup.Item>Price:{item.price}</ListGroup.Item>
          <ListGroup.Item>Remaining Stock:{item.stock}</ListGroup.Item>
        </ListGroup>
      </Card>
    </>
  );
}

export default Books