import React from "react";
//import styles from "./AdminDashboard.module.css";
//import { Link } from "react-router-dom";
import Side from "./Sidebarcomponents";
import Items from "../Items2/Items2.jsx";
const accommodations = [
  {
    id: 1,
    title: "Luxury Villa",
    price: "$500",
    location: "Los Angeles, CA",
    image: "luxury-villa.JPEG",
  },
  {
    id: 2,
    title: "Beachfront Condo",
    price: "$300",
    location: "Miami, FL",
    image: "beachfront-condo.JPEG",
  },
  {
    id: 3,
    title: "Mountain Cabin",
    price: "$200",
    location: "Aspen, CO",
    image: "mountain-cabin.JPEG",
  },
  // Add more accommodation objects as needed
];

function Accommodations() {
  return (
    <div>
      <Side />
      <Items accommodations={accommodations} />
    </div>
  );
}
export default Accommodations;
/**/
