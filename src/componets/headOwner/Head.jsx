import React from "react";
import styles from "./head.module.css";
import image from "./image.png";

const HeadOwner = () => {
    return(
        <div className={styles['head'] }>
      <img
        src={image}
        className={styles['image']}
      />
     
     
    </div>
    )
}

export default HeadOwner ;