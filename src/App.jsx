// src/App.jsx

import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setAuthToken } from "./redux/authSlice";
import Home from "./pages/Home/Home.jsx";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const token = localStorage.getItem("authToken");
    if (token) {
      dispatch(setAuthToken(token));
    }
  }, [dispatch]);

  return <Home />;
}

export default App;
