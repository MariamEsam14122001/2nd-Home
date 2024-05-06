import React, { useState, useEffect } from "react";
import styles from "./property.module.css";
import CommentSection from "../../componets/comment/Comment";
import img6 from "./location.png";
import img7 from "./provide.png";
import StarRating from "../../componets/stars/Star-rate";
import HeartButton from "../../componets/heart/Heart";
import PanoramaViewer from "../../componets/vr/VR";
import img from "../../componets/vr/vr.png";
import img1 from "../contact&about/line.png";
import Header from "../../componets/header/Header";
import { useParams } from "react-router-dom";
import PropTypes from "prop-types";
import axios from "axios";

const PropertyDetails1 = (props) => {
  const { itemId } = useParams();
  const [item, setItem] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchItem = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/api/items/${itemId}`
        );
        setItem(response.data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchItem();
  }, [itemId]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!item) {
    return <div>Item not found</div>;
  }

  // const { itemId } = useParams();
  // const [item, setItem] = useState(null);

  // useEffect(() => {
  //   // Fetch item details from API using itemId
  //   fetch(`http://localhost:5000/api/items/${itemId}`)
  //     .then(response => {
  //       if (response.ok) {
  //         return response.json();
  //       }
  //       throw new Error('Failed to fetch item details');
  //     })
  //     .then(data => setItem(data))
  //     .catch(error => console.error('Error fetching item details:', error));
  // }, [itemId]);

  // if (!item) {
  //   return <div>Loading...</div>;
  // }

  const initialRating = 3;
  const [rating, setRating] = useState(initialRating);
  const [showMore, setShowMore] = useState(false);

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  return (
    <>
      <Header />
      <div className={styles["property-details"]}>
        <img src={img1} alt="gege" className={styles["line"]} />
        <img src={img1} alt="gege" className={styles["lineee"]} />
        <div className={styles["image1"]}>
          <PanoramaViewer imageUrl={item.image} />
        </div>
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
        <button className={styles["rentbutton"]} />
        <span className={styles["renttext"]}>
          <span>Rent</span>
        </span>
        <span>{props.imageUrl}</span>
        <span className={styles["d3"]}>
          <span>Bedrooms: 2</span>
        </span>
        <span className={styles["d4"]}>
          <span>Available from: 21 Jul 2024</span>
        </span>
        <span className={styles["d5"]}>
          <span>Property size: 98 sqft</span>
        </span>
        <span className={styles["d6"]}>
          <span>Bathrooms: 1</span>
        </span>
        <button className={styles["vrbutton"]} />
        <span className={styles["textbuttonvr"]}>
          <span>Property&apos;s Virtual Reality</span>
        </span>
        <span className={styles["location"]}>
          <span>Location:</span>
        </span>
        <span className={styles["description"]}>
          <span>Description</span>
        </span>
        <span className={styles["provider"]}>
          <span>Provider:</span>
        </span>
        <span className={styles["text15"]}>
          <span>
            <span>The Village</span>
            <br />
            <span>{item.location}</span>
            <br />
            <span>Investors Area</span>
          </span>
        </span>
        <span className={styles["text22"]}>
          <span>
            <span>yasmin mohamed</span>
            <br />
            <span>{item.title}</span>
            <br />
            <span>(150 properties)</span>
          </span>
        </span>
        <img src={img6} alt={props} className={styles["locationphoto"]} />
        <img src={img7} alt={props} className={styles["providerphoto"]} />
        <div>
          <StarRating onClick={() => setRating(1)} rating={rating} />
        </div>
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
        <div
          style={{
            color: "black",
            top: "1150px",
            position: "absolute",
            left: "150px",
          }}
        >
          <p>This is the initial content.</p>
          {showMore && (
            <div>
              <p>This is additional content that will be hidden initially.</p>
              <p>This is additional content that will be hidden initially.</p>
              <p>This is additional content that will be hidden initially.</p>
              <p>This is additional content that will be hidden initially.</p>
            </div>
          )}
          <button
            onClick={toggleShowMore}
            style={{
              backgroundColor: "rgb(172, 233, 252)",
              color: "black",
              borderRadius: "20px",
              left: "200px",
              top: "0px",
              position: "relative",
            }}
          >
            {showMore ? "Show Less" : "Show More"}
          </button>
        </div>
      </div>
    </>
  );
};

// PropertyDetails1.propTypes = {
//   itemId: PropTypes.string.isRequired,
// };

export default PropertyDetails1;
