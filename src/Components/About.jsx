import React from "react";
import "./About.css";
import img1 from "../Images/bilal-removebg-preview.png"


class About extends React.Component {
  render() {
    return (
      <>
        <section class="about-us">
          <div class="about">
            <img src={img1} class="pic" />
            <div class="text">
              <h2>About Us</h2>
              <h5>All Types of Printing & <span>Design</span></h5>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita natus ad sed harum itaque ullam enim quas, veniam accusantium, quia animi id eos adipisci iusto molestias asperiores explicabo cum vero atque amet corporis! Soluta illum facere consequuntur magni. Ullam dolorem repudiandae cumque voluptate consequatur consectetur, eos provident necessitatibus reiciendis corrupti!</p>
              <div class="data">
                <a href="#" class="hire">Hire Me</a>
              </div>
            </div>
          </div>
        </section>
      </>
    )
  }
}

export default About