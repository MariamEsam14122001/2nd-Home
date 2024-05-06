// ItemsOwner.jsx
import React from "react";
//import { useHistory } from "react-router-dom";
import ItemOwner from "../Item owner/ItemOwner";
import styles from "./items.module.css";

const ItemsOwner = ({ accommodations, onDelete }) => {
  //const history = useHistory(); // Initialize useHistory hook

  // Function to navigate to the edit page
  // const handleEdit = (propertyId) => {
  //   // Navigate to the edit page with the property ID as a parameter
  //   history.push(`/edit/${propertyId}`);
  // };

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
            // onEdit={handleEdit} // Pass the handleEdit function as onEdit prop
          />
        ))}
      </div>
    </div>
  );
};

export default ItemsOwner;
