import React from "react";

import $ from "jquery";
import "../../assets/js/jquery.rd-parallax.js";

import i from "../../assets/images/parallax-6.jpg";

import i1 from "../../assets/images/page-4_img10.jpg";
import i2 from "../../assets/images/page-4_img11.jpg";
import i3 from "../../assets/images/page-4_img12.jpg";

class Videos extends React.Component {
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
        data-speed="0.4"
      >
        <div className="container">
          <h1>Popular Videos</h1>
          <p>Cum sociis natoque penatibus et magnis dis parturient</p>
          <div className="row offset-4 text-md-left flow-offset-1">
            <div className="col-md-4">
              <a href="//www.youtube.com/embed/S2jEaTVAbhk" className="thumb">
                <img src={i1} alt className="bottom-line-primary" />
              </a>
              <h2>
                <a href="#">Aliquam malesuada urna eu dolor</a>
              </h2>
              <p>
                Etiam ultrices condimentum justo eu viverra. Curabitur lacinia
                tristique imperdiet.
              </p>
            </div>
            <div className="col-md-4">
              <a href="//www.youtube.com/embed/S2jEaTVAbhk" className="thumb">
                <img src={i2} alt className="bottom-line-primary" />
              </a>
              <h2>
                <a href="#">Aliquam malesuada urna eu dolor</a>
              </h2>
              <p>
                Etiam ultrices condimentum justo eu viverra. Curabitur lacinia
                tristique imperdiet.
              </p>
            </div>
            <div className="col-md-4">
              <a href="//www.youtube.com/embed/S2jEaTVAbhk" className="thumb">
                <img src={i3} alt className="bottom-line-primary" />
              </a>
              <h2>
                <a href="#">Aliquam malesuada urna eu dolor</a>
              </h2>
              <p>
                Etiam ultrices condimentum justo eu viverra. Curabitur lacinia
                tristique imperdiet.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Videos;
