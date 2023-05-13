import React from "react";
import "./Gallery.css";
import img2 from "../Images/2.png"
import img1 from "../Images/1.png"
import img3 from "../Images/3.png"
import img4 from "../Images/4.png"
import img5 from "../Images/5.png"
import img6 from "../Images/6.png"
import img7 from "../Images/7.jpg"
import img8 from "../Images/8..jpg"
import img9 from "../Images/9.png"
import img10 from "../Images/10.png"
import img11 from "../Images/11.png"
import img12 from "../Images/12.png"




class Gallery extends React.Component {
  render() {
    return (
      <>
        <div className="container" style={{ marginTop: "50px" }}>
          <h1>Our Gallery</h1>
          <div class="row">
            <div class="column">
              <img src={img1} />
              <img src={img2} />
              <img src={img3} />
              <img src={img4} />

            </div>
            <div class="column">
              <img src={img5} />
              <img src={img6} />
              <img src={img7} />
              <img src={img8} />

            </div>
            <div class="column">
              <img src={img9} />
              <img src={img10} />
              <img src={img11} />
              <img src={img12} />
            </div>

          </div>
        </div>
      </>

    )
  }
}




export default Gallery