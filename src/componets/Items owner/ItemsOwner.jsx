// ItemsOwner.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import ItemOwner from "../Item owner/ItemOwner";
import styles from "./items.module.css";

const ItemsOwner = ({ accommodations, onDelete }) => {
  const navigate = useNavigate(); // Initialize useNavigate hook

  const handleEdit = (itemId) => {
    // Navigate to the details page of the item
    navigate(`/details/${itemId}`);
  };

  return (
    <div className={styles["card-container"]}>
      <div className="row  row-cols-md-3 g-3">
        {accommodations.map((accommodation) => (
          <ItemOwner
            key={accommodation.id}
            id={accommodation.id}
            title={accommodation.title}
            price={accommodation.price}
            location={accommodation.location}
            image={accommodation.image}
            onDelete={() => onDelete(accommodation.id)}
            onClick={() => handleEdit(accommodation.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default ItemsOwner;
