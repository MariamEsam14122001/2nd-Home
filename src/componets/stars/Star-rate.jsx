import React, { useState } from "react";

function StarRating() {
  // State variable to hold the rating value
  const [rating, setRating] = useState(0);

  // Function to handle click on a star button
  const handleStarClick = (newRating) => {
    setRating(newRating); // Update the rating state with the new value
  };

  return (
    <div>
      {/* Render the stars based on the rating state */}
      {[1, 2, 3, 4, 5].map((index) => (
        <button
          key={index}
          onClick={() => handleStarClick(index)}
          style={{
            color: index <= rating ? "rgb(9, 192, 248)" : "gray", // Change color based on rating
            border: "none",
            background: "none",
            cursor: "pointer",
            fontSize: "50px",
            position: "relative",
            top: "620px",
            left: "200px",
          }}
        >
          {/* Render star icon */}
          &#9733;
        </button>
      ))}
      {/* Display the current rating value */}
    </div>
  );
}

export default StarRating;
