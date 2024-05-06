

import React, { useState } from 'react';
import styles from './searchBar.module.css';
import axios from 'axios';

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');
  const [searchType, setSearchType] = useState('');
  const [city, setCity] = useState('');
  const [price, setPrice] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get('/api/search', { params: { query, searchType, city, price } });
      onSearch(response.data);
    } catch (error) {
      console.error('Error searching:', error);
    }
  };

  const cities = ["Alexandria", "Cairo", "Aswan"];

 

  return (
    <form className={styles["search-form"]} onSubmit={handleSubmit}>
      <input
        type="text"
        name="query"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Enter Region"
      />
      <input
        type="number"
        name="price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        placeholder="Price"
      />
      <select value={city} name="city"  onChange={(e) => setCity(e.target.value)}>
        <option value="">All cities</option>
        {cities.map((city) => (
          <option key={city} value={city}>
            {city}
          </option>
        ))}
      </select>
      <select value={searchType} name={searchType} onChange={(e) => setSearchType(e.target.value)}>
        <option value="">All Types</option>
        <option value="ind">Individual</option>
        <option value="Shared">Shared</option>
       
      </select>
      <button className={styles["search-button"]} type="submit">Search</button>
    </form>
  );
}


export default SearchBar;
