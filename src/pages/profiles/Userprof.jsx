import React, { useState } from "react";

import PropTypes from "prop-types";

import styles from "./user.module.css";
import Photos from "../../componets/photo/Photo";
import img from "./prof.png";
import LogoutButton from "../../componets/logoutButton/LogoutButton.jsx";
//import { Link } from "react-router-dom";
//import { useNavigate } from "react-router-dom";
//import { useParams } from "react-router-dom";
import axios from "axios";
import { Line } from "three";
import { Link } from "react-router-dom";

const Userform = (props) => {
  /* const { userType } = useParams();*/
  /* const navigate = useNavigate();*/
  const [formData, setFormData] = useState({
    name: "",
    email: "",

    status: "",
    gender: "",
    age: "",

    phone: "",
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
      const response = await axios.post(
        "http://localhost:8000/api/user/profile",
        {
          ...formData,
        }
      );
      console.log("upload image successful:", response.data);
      /*navigate("/");*/
    } catch (error) {
      console.error("upload image failed:", error);
      return <h1>upload image failed: {error}</h1>;
    }
  };

  return (
    <div styles={{ width: "400px", position: "relative" }}>
      <Photos />
      <div className={styles["button1"]}>
        <LogoutButton />
      </div>

      <form onSubmit={handleSubmit}>
        <div className={styles["form"]}>
          <span className={styles["userprofile"]}>User Profile</span>
          <div className={styles["full-name"]}>
            <span className={styles["name"]}>Name</span>
          </div>
          <input
            onChange={handleChange}
            name="name"
            value={formData.name}
            id="name"
            type="text"
            className={styles["nameinput"]}
          />

          <div className={styles["email-address"]}>
            <span className={styles["email"]}>Email Address</span>
          </div>

          <input
            onChange={handleChange}
            name="email"
            value={formData.email}
            id="email"
            type="text"
            className={styles["emailinput"]}
          />

          <div className={styles["password"]}>
            <span className={styles["password1"]}>Password</span>
          </div> 

           <input
            onChange={handleChange}
            name="password"
            value={formData.password}
            id="password"
            type="text"
            className={styles["passwordinput"]}
          />

          <div>
            <span className={styles["status"]}>Status</span>
          </div>

          <input
            onChange={handleChange}
            name="status"
            value={formData.status}
            id="status"
            type="text"
            className={styles["statusinput"]}
          />
          <span className={styles["gender"]}>Gender</span>

          <input
            onChange={handleChange}
            name="gender"
            value={formData.gender}
            id="gender"
            type="text"
            className={styles["genderinput"]}
          />

          <span className={styles["age"]}>
            <span>Age</span>
          </span>

          <input
            onChange={handleChange}
            name="age"
            value={formData.age}
            id="age"
            type="text"
            className={styles["ageinput"]}
          />

          <span className={styles["city"]}>
            <span>City</span>
          </span>

          <input
            onChange={handleChange}
            name="city"
            value={formData.city}
            id="city"
            type="text"
            className={styles["cityinput"]}
          />
          <div>
            <span className={styles["phone"]}>phone</span>
          </div>

          <input
            onChange={handleChange}
            name="phone"
            value={formData.phone}
            id="phone"
            type="text"
            className={styles["phoneinput"]}
          />

          <Link to="/userform">
            <button
              name="setting"
              id="setting"
              type="submit"
              className={styles["button"]}
            >
              <span className={styles["accountsetting"]}>Account Setting</span>
            </button>
          </Link>
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
  iMAGESrc: PropTypes.string,
  iMAGEAlt: PropTypes.string,
};
export default Userform;
