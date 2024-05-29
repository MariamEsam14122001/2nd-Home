import React, { useState, useEffect } from "react";
import Header from "../../componets/header/Header";
import Head from "../../componets/head/Head";
import Footer from "../../componets/footer/Footer";
import AccommodationList from "../../componets/AccommodationList/AccommodationList";
//import RecommendedList from "../../componets/RecommendedList/RecommendedList";
import styles from "./home.module.css";
import Title from "../../componets/title/Title";
import accommodationsData from "./accommodations.json";
import SearchBar from "../../componets/SearchBar/SearchBar";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { ItemContext } from "../../Context/itemContext.jsx";
import Items from "../../componets/Items/Items";

const Home = () => {
  //recommended
  const [items, setItems] = useState([]);
  //const { setSelectedItem } = useContext(ItemContext);
  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    // Simulated data for demonstration
    const response = await axios.get("http://localhost:8000/items");
    setItems(response.data);
  };

  //search

  const navigate = useNavigate();

  const handleSearch = async (params) => {
    try {
      const response = await axios.get("/api/search", { params });
      // Assuming you want to navigate after setting the state
      setSearchResults(response.data);
      navigate("/search");
    } catch (error) {
      console.error("Error searching:", error);
    }
  };

  return (
    <div className={styles["container"]}>
      <div className={styles["home"]}>
        <Header />
        <Head />
        <div className={styles["archieve"]}>
          <SearchBar onSearch={handleSearch} />
        </div>
        <Title />

        {/*recommended
        <AccommodationList accommodations={accommodationsData}/>*/}

        <Items accommodations={items} />
        {/* <Items accommodations={items} onItemSelect={setSelectedItem} /> */}

        <Footer />
      </div>
    </div>
  );
};

export default Home;
