import React from "react";
import styles from "./footer.module.css";
import facebook from "./facebook.png";
import insta from "./insta.png";
import twetter from "./twetter.png";
import whatts from "./whatts.png";

const Footer = () =>{
    return(
        <div className={styles['footer']}  >
        <span className={styles['text']}>
          <span>FOLLOW US </span>
        </span>
        <img
          src={facebook}
          className={styles['facebook']}
        />
        <img
          src={insta}
          className={styles['insta']}
        />
        <img
          src={twetter}
          className={styles['twetter']}
        />
        <img
          src={whatts}
          className={styles['whatts']}
        />
      </div>
    )
}

export default Footer;