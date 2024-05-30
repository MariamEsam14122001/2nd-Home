import React from "react";
import { Link } from "react-router-dom";
import logo from "./logo.svg";
import people from "./people.png";
import search from "./search.png";
import wishlist from "./wishlist.png";
import { useSelector } from "react-redux";
import styles from "./header.module.css";

const Header = (props) => {
  const authToken = useSelector((state) => state.auth.token);

  return (
    <header>
      <img src={logo} className={styles["logo"]} />
      <ul className={styles["menu"]}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/search">Accommodation</Link>
        </li>
        <li>
          <Link to="/contact">Contact us</Link>
        </li>
        <li>
          <Link to="/support">Help</Link>
        </li>
        <li>
          <Link to="/Getstarted">Get started </Link>
        </li>
        {!authToken && (
          <li>
            <Link to="/Login">Log in</Link>
          </li>
        )}
      </ul>
      <div className={styles["profile-icons"]}>
        {authToken && (
          <>
            <Link to="/userform">
              <img src={people} className={styles["people"]} />
            </Link>
            <Link to="/wishlist">
              <img src={wishlist} className={styles["wishlist"]} />
            </Link>
          </>
        )}
      </div>
    </header>
  );
};

export default Header;
