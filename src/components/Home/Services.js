import React from "react";
import $ from "jquery";

import i from "../../assets/images/parallax-2.jpg";

import i1 from "../../assets/images/page-1_img01.png";
import i2 from "../../assets/images/page-1_img02.png";
import i3 from "../../assets/images/page-1_img03.png";
import i4 from "../../assets/images/page-1_img04.png";

class Services extends React.Component {
  componentDidMount() {
    $(".parallax").parallax({});
  }
  render() {
    return (
      <section
        className="well-md parallax"
        data-image-src={i}
        data-url={i}
        data-speed="0.4"
      >
        <div className="container">
          <h1>Services</h1>
          <p>
            Ese molestie consequat, vel illum dolore eu feufacilisis at vero
            eros et accumsiusto odio
          </p>
          <div className="row offset-2 flow-offset-1">
            <div className="col-md-3">
              <div className="icon icon-default icon-md">
                <img src={i1} alt />
              </div>
              <h2 className="uppercase">
                <a href="#">Massage</a>
              </h2>
            </div>
            <div className="col-md-3">
              <div className="icon icon-default icon-md">
                <img src={i2} alt />
              </div>
              <h2 className="uppercase">
                <a href="#">Sauna</a>
              </h2>
            </div>
            <div className="col-md-3">
              <div className="icon icon-default icon-md">
                <img src={i3} alt />
              </div>
              <h2 className="uppercase">
                <a href="#">Baths</a>
              </h2>
            </div>
            <div className="col-md-3">
              <div className="icon icon-default icon-md">
                <img src={i4} alt />
              </div>
              <h2 className="uppercase">
                <a href="#">Body care</a>
              </h2>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Services;
