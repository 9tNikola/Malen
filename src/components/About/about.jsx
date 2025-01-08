import React from "react";
import "./about.css";

export default function About() {
  return (
    <div className="section-3">
      <div className="part1">
        <div className="section3-top">
          <div className="subtitle">
            <div className="red-lines start">
              <div className="upper-line"></div>
              <div className="lower-line"></div>
            </div>
            ABOUT COMPANY
            <div className="red-lines end">
              <div className="upper-line"></div>
              <div className="lower-line"></div>
            </div>
          </div>
          <div className="heading">
            We Are Qualified In Every Car Departments
          </div>
        </div>
        <div className="section3-lower">
          <div className="buttons">
            <button className="button">About Us</button>
            <button className="button">Our Mission</button>
            <button className="button">Our Vision</button>
          </div>
          <span>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga, in atque! Quod alias, iusto, earum aliquam quisquam hic quo in aspernatur et esse placeat optio soluta natus cum sapiente nisi, dicta ipsam. Facere animi sunt dignissimos dolor sit.
          </span>
          <div className="content"></div>
          <div className="ribbons">
            <div className="ribbon1">
              <div className="ribbon-content">
                <div className="title">Engine Solution</div>
                <div className="percent">90%</div>
              </div>
              <div className="ribbon"></div>
            </div>
            <div className="ribbon2">
              <div className="ribbon-content">
                <div className="title">Engine Diagnostics</div>
                <div className="percent">85%</div>
              </div>
              <div className="ribbon"></div>
            </div>
          </div>
          <button className="main">Get a Quote</button>
        </div>
      </div>
      <div className="part2">
        <div className="upper-image"></div>
        <div className="img2">
          <div className="head">
            <div className="heading2">
              <h3>20+</h3>
              <span>Years of Experience</span>
            </div>
          </div>
          <div className="lower-image"></div>
        </div>
      </div>
    </div>
  );
}
