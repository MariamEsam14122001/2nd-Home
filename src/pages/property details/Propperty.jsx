import React, { useState, useEffect } from "react";
import styles from "./property.module.css";
import CommentSection from "../../componets/comment/Comment";
import img6 from "./location.png";
import img7 from "./provide.png";
import StarRating from "../../componets/stars/Star-rate";
import HeartButton from "../../componets/heart/Heart";
import VRList from "../../componets/VRList/VRList";
import ImagesList from "../../componets/imagesList/imagesList.jsx";
import img1 from "../contact&about/line.png";
import Header from "../../componets/header/Header";
import { useParams } from "react-router-dom";
import img from "./image.jpg";
import axios from "axios";

const PropertyDetails = (props) => {
  //fetch data details
  const { id } = useParams();
  const [item, setItem] = useState(null);

  useEffect(() => {
    // Fetch item details from the backend API
    axios
      .get(`http://localhost:8000/items/${id}`)
      .then((response) => {
        setItem(response.data);
      })
      .catch((error) => {
        console.error("Error fetching item details:", error);
      });
  }, [id]);

  //Panorama show
  const [showPanorama, setShowPanorama] = useState(false);

  const togglePanorama = () => {
    setShowPanorama(!showPanorama);
  };

  //rating
  const initialRating = 3;
  const [rating, setRating] = useState(initialRating);

  return (
    <>
      <Header />
      <div className={styles["property-details"]}>
        <div className={styles["image1"]}>
          {showPanorama ? (
            <div className={styles["panorama-image"]}>
              <VRList images={item.images} />
            </div>
          ) : (
            <ImagesList images={item.images} />
          )}
        </div>
        <button onClick={togglePanorama} className={styles["vrbutton"]} />
        <span className={styles["textbuttonvr"]}>
          <span>Property&apos;s Virtual Reality</span>
        </span>

        <div>
          <StarRating onClick={() => handleRatingChange(1)} rating={rating} />
        </div>

        <button className={styles["rentbutton"]} />
        <span className={styles["renttext"]}>
          <span>Rent</span>
        </span>

        <span className={styles["d3"]}>
          <span>Bedrooms: 2</span>
        </span>
        <span className={styles["d4"]}>
          <span>Available from:{item.availability}</span>
        </span>
        <span className={styles["d5"]}>
          <span>Property size: 98 sqft</span>
        </span>
        <span className={styles["d6"]}>
          <span>Bathrooms: 1</span>
        </span>

        <div className={styles["rentdetails"]} />
        <span className={styles["r1"]}>
          <span>{item.price} EGP/Monthly</span>
        </span>

        <div className={styles["line2"]} />
        <div className={styles["r2"]} />

        <span className={styles["r3"]}>
          <span>Save to Wishlist</span>
        </span>

        <div className={styles["rectangle12"]}>
          {/*}  <HeartButton id={id} />*/}
        </div>

        <img src={img1} alt="gege" className={styles["line"]} />

        <span className={styles["description"]}>
          <span>Description</span>
        </span>
        <div
          style={{
            color: "black",
            top: "1150px",
            position: "absolute",
            left: "150px",
          }}
        >
          <p>{item.description}</p>
        </div>

        <span className={styles["location"]}>
          <span>Location:</span>
        </span>
        <img src={img6} alt={props} className={styles["locationphoto"]} />
        <span className={styles["text15"]}>
          <span>{item.location}</span>
        </span>

        <span className={styles["provider"]}>
          <span>Provider:</span>
        </span>
        <img src={img7} alt={props} className={styles["providerphoto"]} />
        <span className={styles["text22"]}>
          <span>
            <span>yasmin mohamed</span>
            <br></br>
            <span>Experts Home</span>
            <br></br>
            <span>(150 properties)</span>
          </span>
        </span>

        <img src={img1} alt="gege" className={styles["lineee"]} />

        <div
          style={{
            left: "125px",
            position: "absolute",
            width: "50%",
            top: "100px",
          }}
        >
          <CommentSection />
        </div>
      </div>
    </>
  );
};

export default PropertyDetails;
