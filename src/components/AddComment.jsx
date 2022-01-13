import { Component } from "react";
import { useEffect, useState } from "react";
import { Form, Button } from "react-bootstrap";
const AddComment = ({ asin }) => {
  const [comment, setComment] = useState({
    comment: "",
    rate: 1,
    elementId: null,
  });
  /*  state = {
    comment: {
      comment: "",
      rate: 1,
      elementId: null,
    },
  }; */

  /*  componentDidUpdate(prevProps) {
    if (prevProps.asin !== this.props.asin) {
      this.setState({
        comment: {
          ...this.state.comment,
          elementId: this.props.asin,
        },
      });
    }
  } */
  useEffect(() => {
    setComment((c) => ({
      ...c,
      elementId: asin,
    }));
  }, [asin]);

  const addComment = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        "https://striveschool-api.herokuapp.com/api/comments",
        {
          method: "POST",
          body: JSON.stringify(comment),
          headers: {
            "Content-type": "application/json",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTgyODk0ZGFhY2FhMjAwMTU1MmExNjMiLCJpYXQiOjE2NDE4MjI0NTcsImV4cCI6MTY0MzAzMjA1N30.lN1RxoQOJ30JKSwPt0p956WSubDVQISDhHcwn_78XXg",
          },
        }
      );
      if (response.ok) {
        alert("comment successfully Added");
      } else {
        alert("comment NOT Added");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Form
      onSubmit={addComment}
      style={{ border: "1px solid black", borderRadius: "0.6rem" }}
    >
      <Form.Group controlId="exampleForm.ControlTextarea1">
        <Form.Label>
          <h4>Comment Here</h4>
        </Form.Label>
        <Form.Control
          type="text"
          as="textarea"
          value={comment.comment}
          rows={3}
          onChange={(e) =>
            setComment({
              ...comment,
              comment: e.target.value,
            })
          }
        />
      </Form.Group>
      <Form.Group variant="warning" controlId="exampleForm.ControlSelect1">
        <Form.Label>
          <h4>Ratings</h4>
        </Form.Label>
        <Form.Control
          as="select"
          onChange={(e) =>
            setComment({
              ...comment,
              rate: e.target.value,
            })
          }
        >
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
        </Form.Control>
      </Form.Group>
      <Button variant="success" className="mb-2" type="submit">
        Submit
      </Button>
    </Form>
  );
};

export default AddComment;
