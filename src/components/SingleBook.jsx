import { Component } from "react";
import { Card, Row, Col, Badge, Button, Modal } from "react-bootstrap";
import CommentArea from "./CommentArea";
const SingleBook = ({ book, changeSelecteBook, selectedBook }) => {
  /*  state = {
    selectedBook: false,
  }; */

  return (
    <>
      <Col md={3} className="mb-2">
        <Card
          /*  onClick={() =>
              this.setState({
                selectedBook: !this.state.selectedBook,
              }) } */

          onClick={() => changeSelecteBook(book.asin)}
          style={{
            height: "68vh",
            border: selectedBook === book.asin ? "3px solid red" : "none",
          }}
        >
          <Card.Img
            variant="top"
            style={{ height: "40vh", objectFit: "cover" }}
            src={book.img}
          />
          <Card.Body>
            <Card.Title>{book.title}</Card.Title>
            <Card.Text></Card.Text>
          </Card.Body>
          <Card.Footer>
            <Button variant="warning">$ {book.price}</Button>
            <Badge pill variant="info" className="ml-5">
              {book.category}
            </Badge>
          </Card.Footer>
        </Card>
      </Col>
      {/*  {this.state.selectedBook && (
          <CommentArea asin={this.props.singlebook.asin} />
        )} */}
    </>
  );
};

export default SingleBook;
