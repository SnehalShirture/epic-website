import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./MyNavbar";
import Home from "./Component/Home";
import Offers from "./Component/Offers";
import About from "./Component/About";
import Team from "./Component/Team";
import Services from "./Component/Services";
import Login from "./Component/Login";
import Registration from "./Component/Registration";

function MyRoutes() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/offers" element={<Offers />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/team" element={<Team />}></Route>
          <Route path="/services" element={<Services />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/registration" element={<Registration />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default MyRoutes;