import { useState } from "react";
import { Row, Form, Button, Container, Col } from "react-bootstrap";
import CommentArea from "./CommentArea";
import SingleBook from "./SingleBook";
const Books = ({ books }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedBook, setSelectedBook] = useState(null);
  return (
    <Container fluid>
      <Row>
        <Col md={8}>
          <Form>
            <Form.Group className="mb-3">
              <Form.Control
                style={{ border: "2px solid #343a40" }}
                type="text"
                placeholder="Search for Books"
                value={searchQuery}
                onChange={
                  (e) =>
                    setSearchQuery({
                      searchQuery: e.target.value,
                    })
                  /*  this.setState({ searchQuery: e.target.value }) */
                }
              ></Form.Control>
            </Form.Group>
          </Form>

          <Row>
            {books
              .filter((book) => book.title.toLowerCase().includes(searchQuery))
              .map((book, i) => (
                <SingleBook
                  book={book}
                  key={i}
                  selectedBook={selectedBook}
                  changeSelecteBook={(asin) => setSelectedBook(asin)}
                />
              ))}
          </Row>
        </Col>
        <Col md={4} className="d-flex justify-content-center">
          <h3></h3>
          {<CommentArea id={selectedBook} />}
        </Col>
      </Row>
    </Container>
  );
};

export default Books;
