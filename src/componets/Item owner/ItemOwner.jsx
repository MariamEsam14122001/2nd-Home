import React from "react";
import styles from "./item.module.css";
import loc from "./location.png";

import img from "./delete.svg";

function ItemOwner({ id, title, price, location, image, onDelete, onEdit }) {
  const handleDelete = () => {
    onDelete();
  };

  const handleEditClick = () => {
    onEdit(id); // Pass the property id to the onEdit function
  };
  return (
    <>
      <div>
        <div className={styles["card"]} onClick={handleEditClick}>
          <div className="col card ">
            <div className={styles["item"]}>
              <div className={styles["content"]}>
                <div className={styles["frame53"]}>
                  <span className={styles["text"]}>{title}</span>
                  <span className={styles["text2"]}>{price}</span>
                </div>
                <p>Discription</p>
                <div className={styles["frame52"]}>
                  <img src={loc} className={styles["locationonblack24dp2"]} />
                  <span className={styles["text4"]}>{location}</span>
                </div>
                <span className={styles["text"]}>Shared</span>
                <span className={styles["text"]}>0111111111</span>
              </div>
              <img src={image} alt={title} className={styles["image"]} />
              <div onClick={handleDelete} className={styles["delete"]}>
                <img src={img} alt="delete" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ItemOwner;
