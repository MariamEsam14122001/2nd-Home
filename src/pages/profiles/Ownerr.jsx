import React, { useState } from "react";

import PropTypes from "prop-types";

import styles from "./owner.module.css";
import Photos from "../../componets/photo/Photo.jsx";
import img from "../profiles/prof.png";
import LogoutButton from "../../componets/logoutButton/LogoutButton.jsx";
//import { Link } from "react-router-dom";
//import { useNavigate } from "react-router-dom";
//import { useParams } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";

const Ownerform = (props) => {
  /* const { userType } = useParams();*/
  /* const navigate = useNavigate();*/
  const [formData, setFormData] = useState({
    nameinput: "",
    emailinput: "",
    passwordinput: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:8000/api/register", {
        ...formData,
      });
      console.log("upload image successful:", response.data);
      /*navigate("/");*/
    } catch (error) {
      console.error("upload image failed:", error);
      return <h1>upload image failed: {error}</h1>;
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Photos />

        <Link to="/upload">
          {" "}
          <button
            name="Uload Properities"
            id="Uload Properities"
            type="submit"
            className={styles["button2"]}
          >
            <span className={styles["acccountsetting"]}>
              Upload Properities
            </span>
          </button>
        </Link>

        <button
          name="Properities"
          id="Properities"
          type="submit"
          className={styles["button3"]}
        >
          <span className={styles["acccountsetting"]}>Properities</span>
        </button>

        <div className={styles["logout"]}>
          <LogoutButton />
        </div>

        <div className={styles["form"]}>
          <span className={styles["userprofile"]}>Owner profile</span>
          <div className={styles["full-name"]}>
            <span className={styles["name"]}>Name</span>
          </div>
          <input
            onChange={handleChange}
            name="nameinput"
            value={formData.nameinput}
            id="nameinput"
            type="text"
            className={styles["nameinput"]}
          />

          <div className={styles["email-address"]}>
            <span className={styles["email"]}>Email Address</span>
          </div>

          <input
            onChange={handleChange}
            name="emailinput"
            value={formData.emailinput}
            id="emailinput"
            type="text"
            className={styles["emailinput"]}
          />

          <div className={styles["password"]}>
            <span className={styles["password1"]}>Password</span>
          </div>

          <input
            onChange={handleChange}
            name="passwordinput"
            value={formData.passwordinput}
            id="passwordinput"
            type="text"
            className={styles["passwordinput"]}
          />

          <button
            name="setting"
            id="setting"
            type="submit"
            className={styles["button"]}
          >
            <span className={styles["accountsetting"]}>Account Setting</span>
          </button>
        </div>
      </form>
    </div>
  );
};
Photos.defaultProps = {
  iMAGESrc: img,
  iMAGEAlt: "IMAGE",
};

Photos.propTypes = {
  iMAGESrc: PropTypes.any,
  iMAGEAlt: PropTypes.string,
};
export default Ownerform;
