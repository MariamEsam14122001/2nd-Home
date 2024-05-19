// AccommodationList.jsx
import React from "react";
import Item2 from "../Item2/Item2";
import styles from "./items2.module.css";

const Items2 = ({ accommodations }) => {
  return (
    <div className={styles["card-container"]}>
      <div className="row  row-cols-3 g-3">
        {accommodations.map((accommodation) => (
          <div className="col" key={accommodation.id}>
            <Item2
              id={accommodation.id}
              name={accommodation.name}
              age={accommodation.age}
              location={accommodation.location}
              image={accommodation.image}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Items2;
