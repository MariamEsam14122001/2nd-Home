import React from "react";
import styles from "./vr.module.css";

const PanoramaViewer = ({ imageUrl }) => {
  return (
    <div className={styles["panorama-container"]}>
      <a href={imageUrl} target="_blank" rel="noopener noreferrer">
        <img
          src={imageUrl}
          alt="Panorama"
          className={styles["panorama-image"]}
        />
      </a>
    </div>
  );
};

export default PanoramaViewer;

/*<img src={imageUrl} alt="Panorama" className={styles["panorama-image"]} />*/
