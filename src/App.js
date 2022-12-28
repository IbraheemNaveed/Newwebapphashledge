import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LandingPage from "./components/main";
import Register from "./components/register";
import Login from "./components/login";
import Result from "./components/result";
import New from "./components/NEW"
import { UserContext } from "./context/usercontext";
function App() {
  const userData = localStorage.getItem("user")
    ? localStorage.getItem("user")
    : {
        name: "",
        email: "",
        password: "",
      };
  const [user, setUser] = useState(userData);
  return (
    <UserContext.Provider value={{ user: user, setUser: setUser }}>
      <Router>
        {/* <Navigation />
      <hr /> */}
        <Routes>
          {user.name !== "" ? (
            <Route exact path="/" element={<LandingPage />} />
          ) : (
            <Route exact path="/" element={<LandingPage />} />
          )}
          <Route exact path="/register" element={<Register />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/result" element={<Result />} />
          <Route exact path="/New" element={<New />} />

        </Routes>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
