import React from "react";
import $ from "jquery";

import "../../assets/js/jquery.rd-parallax.js";

import i from "../../assets/images/parallax-4.jpg";

import i1 from "../../assets/images/page-2_img02.jpg";
import i2 from "../../assets/images/page-2_img03.jpg";
import i3 from "../../assets/images/page-2_img04.jpg";
import i4 from "../../assets/images/page-2_img05.jpg";

class OurStaff extends React.Component {
  componentDidMount() {
    $(document).ready(function() {
      window.RDParallax_autoinit(".parallax");
    });
  }
  render() {
    return (
      <section
        className="well-md well-md--inset-2 parallax"
        data-url={i}
        data-speed="0.8"
      >
        <div className="container">
          <h1>Our Staff</h1>
          <p>Proin cursus pulvinar felis at fringilla</p>
          <div className="row flow-offset-1 offset-6 text-md-left">
            <div className="col-md-3">
              <img src={i1} alt className="bottom-line-primary" />
              <div className="heading-2">Lauren Armstrong</div>
              <p>
                Nullam convallis justo a vestibulum interdum ipsum mauris
                lobortis.
              </p>
              {}
              <ul className="list">
                <li>
                  <span className="icon icon-xs contrast-color fa-phone-square" />
                  <a href="callto:#" className="contrast-color">
                    +1 800 603 6035
                  </a>
                </li>
                <li>
                  <span className="icon icon-xs contrast-color fa-envelope" />
                  <a href="mailto:#">mail@demolink.org</a>
                </li>
                <li>
                  <span className="icon icon-xs contrast-color fa-skype" />
                  <a href="callto:#">@skypename</a>
                </li>
              </ul>
              {}
            </div>
            <div className="col-md-3">
              <img src={i2} alt className="bottom-line-primary" />
              <div className="heading-2">Linda Lawrence</div>
              <p>
                Erat risus volutpat quis porttitor eget, egestas aliquam erat
                volutpat.
              </p>
              {}
              <ul className="list">
                <li>
                  <span className="icon icon-xs contrast-color fa-phone-square" />
                  <a href="callto:#" className="contrast-color">
                    +1 800 603 6035
                  </a>
                </li>
                <li>
                  <span className="icon icon-xs contrast-color fa-envelope" />
                  <a href="mailto:#">mail@demolink.org</a>
                </li>
                <li>
                  <span className="icon icon-xs contrast-color fa-skype" />
                  <a href="callto:#">@skypename</a>
                </li>
              </ul>
              {}
            </div>
            <div className="col-md-3">
              <img src={i3} alt className="bottom-line-primary" />
              <div className="heading-2">Amanda Wright</div>
              <p>
                Fringilla elit erat at est purus sapien eu accumsan dolor nunc
                iaculis{" "}
              </p>
              {}
              <ul className="list">
                <li>
                  <span className="icon icon-xs contrast-color fa-phone-square" />
                  <a href="callto:#" className="contrast-color">
                    +1 800 603 6035
                  </a>
                </li>
                <li>
                  <span className="icon icon-xs contrast-color fa-envelope" />
                  <a href="mailto:#">mail@demolink.org</a>
                </li>
                <li>
                  <span className="icon icon-xs contrast-color fa-skype" />
                  <a href="callto:#">@skypename</a>
                </li>
              </ul>
              {}
            </div>
            <div className="col-md-3">
              <img src={i4} alt className="bottom-line-primary" />
              <div className="heading-2">Stephanie May</div>
              <p>
                Ligula eget massa dictum quis interdum ipsum mauris lobortis.
              </p>
              {}
              <ul className="list">
                <li>
                  <span className="icon icon-xs contrast-color fa-phone-square" />
                  <a href="callto:#" className="contrast-color">
                    +1 800 603 6035
                  </a>
                </li>
                <li>
                  <span className="icon icon-xs contrast-color fa-envelope" />
                  <a href="mailto:#">mail@demolink.org</a>
                </li>
                <li>
                  <span className="icon icon-xs contrast-color fa-skype" />
                  <a href="callto:#">@skypename</a>
                </li>
              </ul>
              {}
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default OurStaff;
