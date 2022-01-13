import { Component } from "react";
import Comment from "./Comment";
import AddComment from "./AddComment";
import { useState, useEffect } from "react";

const CommentArea = ({ id }) => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    fetchComments();
  }, [id]);
  const fetchComments = async () => {
    try {
      let response = await fetch(
        "https://striveschool-api.herokuapp.com/api/comments/" + id,
        {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTgyODk0ZGFhY2FhMjAwMTU1MmExNjMiLCJpYXQiOjE2NDE4MjI0NTcsImV4cCI6MTY0MzAzMjA1N30.lN1RxoQOJ30JKSwPt0p956WSubDVQISDhHcwn_78XXg",
          },
        }
      );
      if (response.ok) {
        let comments = await response.json();
        console.log(comments);
        setComments(comments);
      }
    } catch (err) {
      alert("Fetch failed");
    }
  };
  return (
    <div>
      <AddComment asin={id} />
      <Comment comments={comments} />
    </div>
  );
};
export default CommentArea;
