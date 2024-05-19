import img from "./logo3.svg";
import React, { useState } from "react";
import styles from "./sidebarcomponents.module.css";
import { Link } from "react-router-dom";
const Side = () => {
  const [isUserAccountExpanded, setIsUserAccountExpanded] = useState(false);

  const toggleUserAccount = () => {
    setIsUserAccountExpanded(!isUserAccountExpanded);
  };

  return (
    <div>
      <div className={styles.navigationbar}>
        <img
          style={{
            position: "absolute",
            top: "-30px",
            height: "110px",
            width: "10%",
          }}
          src={img}
          alt="mego"
        ></img>
      </div>
      <div className={styles.sidebar}>
        <ul>
          <ul>
            <button className={styles.button} onClick={toggleUserAccount}>
              {" "}
              Users Accounts
            </button>
            {isUserAccountExpanded && (
              <div>
                <li>
                  {" "}
                  <Link to="/provider" className={styles.buttonchild}>
                    providers accounts
                  </Link>
                </li>
                <li>
                  {" "}
                  <Link to="/user" className={styles.buttonchild}>
                    users Accounts
                  </Link>
                </li>
                <li>
                  {" "}
                  <Link to="/dectivated" className={styles.buttonchild}>
                    Deactivated Accounts
                  </Link>
                </li>
              </div>
            )}
          </ul>
          <ul className={styles.button1}>
            <Link to="/accomodations">Accommodations</Link>
          </ul>
          <ul className={styles.button2}>
            <Link to="/Admin">admin</Link>
          </ul>
          <ul className={styles.button3}>Settings</ul>
          <ul className={styles.button4}>Analytics</ul>
          <ul className={styles.button5}>
            <Link to="/support">Support</Link>
          </ul>
        </ul>
      </div>
    </div>
  );
};
export default Side;
