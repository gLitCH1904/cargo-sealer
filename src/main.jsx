import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./components/Home/Home-index";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Pickup from "./components/Pickup/Pickup";
import Dealer from "./components/Dealer/Dealer";
import Vendor from "./components/Vendor/Vendor";
import Shop from "./components/Shop/Shop";
import Services from "./components/Services/Services";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pickup" element={<Pickup />} />
        <Route path="/dealer" element={<Dealer />} />
        <Route path="/vendor" element={<Vendor />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/services" element={<Services />} />
        <Route />
      </Routes>
    </Router>
  </React.StrictMode>
);
