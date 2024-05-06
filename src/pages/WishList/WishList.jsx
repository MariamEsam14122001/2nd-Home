// WishList.js

import React, {  useEffect } from 'react';
import axios from 'axios';
import Items from '../../componets/Items/Items';
import Header from '../../componets/header/Header';
import styles from './wishlist.module.css';
//import { useWishlist } from '../../Context/WishlistContext';

function WishList() {

  // const { wishlist, fetchLikedItems } = useWishlist();

  // useEffect(() => {
  //   fetchLikedItems();
  // }, []);

 

  return (
    <div>
      <nav className={styles['header']}>
        <Header/></nav>
        {/*<Items accommodations={wishlist} />*/}
  
    </div>
  );
}

export default WishList;
