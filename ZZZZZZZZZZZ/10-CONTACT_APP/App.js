import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Navbar";
import ContactList from "./ContactList";
import Home from "./Home"
let App = () => {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/contacts" element={<ContactList />} />
        </Routes>
      </Router>
    </div>
  );
};
export default App;
