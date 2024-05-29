import React from "react";
import axios from "axios";
import styles from "./logout.module.css";

const handleLogout = () => {
  axios
    .post(
      "/api/logout",
      {},
      {
        headers: {
          Authorization: localStorage.getItem("authToken"),
        },
      }
    )
    .then((response) => {
      // Clear tokens from localStorage/sessionStorage or cookies
      localStorage.removeItem("authToken");
      sessionStorage.removeItem("authToken");
      document.cookie = "authToken=; expires=Thu, 01 Jan 1970 00:00:00 GMT";

      // Redirect to the login page
      window.location.href = "/";
    })
    .catch((error) => {
      console.error("There was an error logging out!", error);
    });
};

const LogoutButton = () => {
  return (
    <>
      <button className={styles["button"]} onClick={handleLogout}>
        <span className={styles["logout"]}>Logout</span>
      </button>
    </>
  );
};

export default LogoutButton;
