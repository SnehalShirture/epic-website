import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./MyNavbar";
import Home from "./Component/Home";
import About from "./Component/About";
import Team from "./Component/Team";
import Services from "./Component/Services";

import Batches from "./Component/Batches";
import TakeAdmisssion from "./Component/TakeAdmisssion";
function MyRoutes() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/batches" element={<Batches />}></Route>
          <Route path="/team" element={<Team />}></Route>
          <Route path="/services" element={<Services />}></Route>
          <Route path="/takeadmision" element={<TakeAdmisssion
 />}></Route>
          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default MyRoutes;
