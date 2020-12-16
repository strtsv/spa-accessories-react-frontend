import React from "react";

import i1 from "../../assets/images/page-3_img01.jpg";
import i2 from "../../assets/images/page-3_img02.jpg";
import i3 from "../../assets/images/page-3_img03.jpg";
import i4 from "../../assets/images/page-3_img04.jpg";
import i5 from "../../assets/images/page-3_img05.jpg";
import i6 from "../../assets/images/page-3_img06.jpg";
import i7 from "../../assets/images/page-3_img07.jpg";
import i8 from "../../assets/images/page-3_img08.jpg";
import i9 from "../../assets/images/page-3_img09.jpg";

import FeaturedItem from "./FeaturedItem";

class FeaturedArea extends React.Component {
  render() {
    return (
      <section className="well-xs--inset-2">
        <div className="container">
          <h1>featured Products</h1>
          <p>Proin dictum elementum velit fusce euismod consequat ante</p>
          {}
          <div className="row offset-6 flow-offset-1 text-md-left">
            <div className="col-md-4">
              <FeaturedItem image={i1}></FeaturedItem>
            </div>
            <div className="col-md-4">
              <FeaturedItem image={i2}></FeaturedItem>
            </div>
            <div className="col-md-4">
              <FeaturedItem image={i3}></FeaturedItem>
            </div>
            <div className="col-md-4 col-md-clear">
              <FeaturedItem image={i4}></FeaturedItem>
            </div>
            <div className="col-md-4">
              <FeaturedItem image={i5}></FeaturedItem>
            </div>
            <div className="col-md-4">
              <FeaturedItem image={i6}></FeaturedItem>
            </div>
            <div className="col-md-4 col-md-clear">
              <FeaturedItem image={i7}></FeaturedItem>
            </div>
            <div className="col-md-4">
              <FeaturedItem image={i8}></FeaturedItem>
            </div>
            <div className="col-md-4">
              <FeaturedItem image={i9}></FeaturedItem>
            </div>
          </div>
          {}
        </div>
      </section>
    );
  }
}

export default FeaturedArea;
