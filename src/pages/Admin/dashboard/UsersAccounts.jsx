import React from "react";
//import styles from "./AdminDashboard.module.css";
//import { Link } from "react-router-dom";
import Side from "./Sidebarcomponents";
import Items2 from "../Items2/Items2";
const accommodations = [
  {
    id: 1,
    name: "mary",
    age: "20",
    location: "Los Angeles, CA",
    image: "luxury-villa.JPEG",
  },
  {
    id: 2,
    name: "memo",
    age: "30",
    location: "Miami, FL",
    image: "beachfront-condo.JPEG",
  },
  {
    id: 3,
    name: "rony",
    age: "23",
    location: "Aspen, CO",
    image: "mountain-cabin.JPEG",
  },
  // Add more accommodation objects as needed
];

const UsersAccounts = () => {
  return (
    <div>
      <Side />
      <Items2 accommodations={accommodations} />
    </div>
  );
};
export default UsersAccounts;
