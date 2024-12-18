import React from "react";
import "./gallery.css";
import grp from "../Images/grp.jpeg"
import Gall1 from "../Images/gall1.jpeg"
import Gall2 from "../Images/gall2.jpeg"
import Gall3 from "../Images/gall3.jpeg"
import Gall4 from "../Images/gall4.jpeg"
import Gall5 from "../Images/gall5.jpeg"


function Gallery() {
  return (
    <section className="gallery">
      <h2>Explore Our <span className="highlight">Gallery</span></h2>
      <div className="gallery-container">
        <img 
          className="gallery-large" 
          src={grp}
          alt="Group Photo" 
        />
        
        <div className="gallery-small">
          <img src={Gall1} alt="Gallery Image 1" />
          <img src={Gall2} alt="Gallery Image 2" />
          <img src={Gall3} alt="Gallery Image 3" />
          <img src={Gall4} alt="Gallery Image 4" />
          <img src={Gall5} alt="Gallery Image 4" />

        </div>
      </div>
    </section>
  );
}

export default Gallery;
