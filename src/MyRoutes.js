import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./MyNavbar";
import Home from "./Component/Home";
import About from "./Component/About";
import Team from "./Component/Team";
import Services from "./Component/Services";
import Batches from "./Component/Batches";
import TakeAdmission from "./Component/TakeAdmission";
import SelectYourBatch from "./Component/SelectYourBatch";
import Register from "./Component/Register"
import Login from "./Component/Login"
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
          <Route path="/takeadmision" element={<TakeAdmission />}></Route>
          <Route path="/selectyourbatch" element={<SelectYourBatch />}></Route>
          <Route path="/register" element={<Register/>}></Route>
          <Route path="/login" element={<Login/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default MyRoutes;
