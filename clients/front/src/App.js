import React, { useEffect, useState } from "react";
import to from "await-to-js";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import axios from "axios";

import Login from "./components/LoginPage";
import PrivatePage from "./components/PrivatePage";

import "./App.css";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);
  const [error, setError] = useState("");
  const [foolMeData, setFoolMeData] = useState(null);

  const handleSignOut = async () => {
    const [err] = await to(axios.post("/api/auth/sign-out"));

    if (err) {
      return;
    }

    setIsLoggedIn(false);
    setUser(null);
  };

  const handleFoolMe = async () => {
    const [err, { data }] = await to(axios.get("/api/faker/fool-me"));

    if (err) {
      setFoolMeData(null);
      return;
    }

    setFoolMeData(data);
  };

  const handleForbidden = async () => {
    console.log();
    // const [err, { data }] = await to(axios.get("http://localhost:3000/"));

    // if (err) {
    //   console.log({ err });
    //   return;
    // }
  };

  const handleLogin = (email, password) => async (e) => {
    setError("");
    e.preventDefault();

    try {
      const res = await axios.post("/api/auth/sign-in", { email, password });

      if (res.data.data) {
        setIsLoggedIn(true);
        setUser(res.data.data);
      }
    } catch (err) {
      setError("Wrong Details");
    }
  };

  useEffect(() => {
    axios
      .get("/api/auth/handshake")
      .then((res) => {
        if (res && res.data && res.data.data && res.data.data.payload) {
          setIsLoggedIn(true);
          setUser(res.data.data.payload);
        }
      })
      .catch((err) => {
        isLoggedIn(false);
        console.log("Error:", err.message);
      });
  }, [isLoggedIn]);

  console.log({ user, isLoggedIn });

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            !isLoggedIn ? (
              <Login handleLogin={handleLogin} error={error} />
            ) : (
              <PrivatePage
                handleSignOut={handleSignOut}
                handleFoolMe={handleFoolMe}
                handleForbidden={handleForbidden}
                foolMeData={foolMeData}
              />
            )
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
