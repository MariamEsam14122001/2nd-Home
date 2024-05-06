import React, { useState } from "react";
import img8 from "./user1.png";

function CommentSection() {
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);

  const handleCommentChange = (e) => {
    setComment(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (comment.trim() !== "") {
      setComments([...comments, comment]);
      setComment("");
    }
  };

  return (
    <div
      style={{
        top: "1300px",
        position: "absolute",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <h2
        style={{
          color: "rgb(9, 192, 248)",
          fontSize: "24px",
        }}
      >
        Reviews
      </h2>
      <form onSubmit={handleSubmit}>
        <textarea
          style={{
            fontSize: "16px",
            marginLeft: "20px",
            marginRight: "20px",
            marginTop: "15px",
            marginBottom: "20px",
            width: "80%",

            padding: "10px",
          }}
          value={comment}
          onChange={handleCommentChange}
          placeholder="Enter your comment..."
          rows="4"
          cols="50"
        />
        <br />
        <button
          style={{
            backgroundColor: "rgb(172, 233, 252)",
            color: "black",
            padding: "10px 20px",

            borderRadius: "30px",
            borderColor: "black",
            cursor: "pointer",
            left: "600px",
            position: "absolute",
            top: "100px",
          }}
          type="submit"
        >
          Add Comment
        </button>
      </form>

      <div>
        <ul style={{ left: "5px", position: "absolute", marginTop: "auto" }}>
          {comments.map((comment, index) => (
            <img
              key={index}
              src={img8}
              alt="Account"
              style={{
                width: "50px",
                height: "50px",
                borderRadius: "70%",
                marginRight: "10px",
                display: "flex",
                marginTop: "55px",

                top: "5px",
                left: "-30px",
              }}
            />
          ))}
        </ul>
        <ul
          style={{
            left: "60px",
            position: "absolute",
            width: "auto",
            marginTop: "auto",
          }}
        >
          {comments.map((comment, index) => (
            <li
              key={index}
              style={{
                marginTop: "40px",
                padding: "5px",
                backgroundColor: "rgb(172, 233, 252)",
                width: "auto",
                height: "50px",
                borderRadius: "30px",

                borderBottomLeftRadius: 0,
                border: "solid",
                borderColor: "rgba(172, 233, 252, 0.548)",
                fontStyle: "italic",

                /* display: "flex",*/

                left: "110px",
              }}
            >
              <p
                style={{
                  fontSize: "16px",
                  marginLeft: "20px",
                  marginRight: "20px",
                  marginTop: "20px",
                  marginBottom: "20px",
                  color: "black",
                }}
              >
                {comment}
              </p>
              <span
                style={{
                  fontSize: "10px",
                  marginTop: "2px",
                  color: "black",
                }}
              >
                03 Jan 2022 rented it for 3 mon
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default CommentSection;
