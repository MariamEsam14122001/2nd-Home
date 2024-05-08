// AccommodationList.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import Item from "../Item/Item";
import styles from "./items.module.css";

const Items = ({ accommodations }) => {
  const navigate = useNavigate();

  const handleItemClick = (itemId) => {
    // Navigate to the details page of the item
    navigate(`/details/${itemId}`);
  };
  return (
    <div className={styles["card-container"]}>
      <div className="row  row-cols-md-4 g-4">
        {accommodations.map((accommodation) => (
          <Item
            id={accommodation.id}
            title={accommodation.title}
            price={accommodation.price}
            location={accommodation.location}
            images={accommodation.image}
            onClick={() => handleItemClick(accommodation.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default Items;

// const Items = ({ accommodations ,likedItems, onToggleLike }) => {
//   return (
//     <div className={styles["card-container"]}>
//     <div className="row  row-cols-md-3 g-3">
//     {accommodations.map( accommodation  => (
//           <Item
//             key={index}
//             id={accommodation.id}
//             title={accommodation.title}
//             price={accommodation.price}
//             location={accommodation.location}
//             image={accommodation.image}
//             isLiked={likedItems.includes(accommodation.id)}
//           onToggleLike={() => onToggleLike(accommodation.id)}
//           onClick={() => handleItemClick(accommodation.id)}
//           />
//           ))}
//     </div>
//     </div>
//   );
// };
