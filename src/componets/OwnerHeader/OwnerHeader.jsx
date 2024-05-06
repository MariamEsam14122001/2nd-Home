import React from 'react';
import { Link } from 'react-router-dom';
import logo from './logo.svg';
import people from './people.png';

import styles from './header.module.css';



const OwnerHeader = (props) => {
  return (
    <header>
    <img src={logo} className={styles['logo']} />
    <ul className={styles['menu']}>
    <li ><Link >My Accommodations</Link></li>
    <li ><Link>Help</Link></li>
    <li><Link to="/Getstarted" >Get started </Link></li>
    </ul>
    <div className={styles["profile-icons"]}>
    <Link to="/ownerform"><img src={people} className={styles['people']}/></Link>
    </div>
  </header>
    
  )
}

export default OwnerHeader;
