import React from "react";

import $ from "jquery";
import "../../assets/js/jquery.rd-parallax.js";

import i from "../../assets/images/parallax-5.jpg";

class Parallax extends React.Component {
  componentDidMount() {
    $(document).ready(function() {
      window.RDParallax_autoinit(".parallax");
    });
  }
  render() {
    return (
      <section className="well-md parallax" data-url={i} data-speed="0.4">
        <div className="container">
          <h1>Discount Hot Tub Filters</h1>
          <p>Vestibulum iaculis lacinia est</p>
          <p className="big">
            Curabitur pellentesque turpis sit amet iaculis condimentum urna mi
            aliquet turpis itae pharetra mauris eros non arcu aenean felis augue
            dignissim in tempus eget cursus sit amet sem
          </p>
          <p>
            Pellentesque vitae tortor id neque fermentum pretium. Maecenas ac
            lacus ut neque rhoncus laoreet sed id tellus. Donec justo tellus,
            tincidunt vitae pellentesque nec, pharetra a orci. Praesent nunc
            nunc, egestas eget elementum sed; rutrum eget metus! Vestibulum
            congue congue dui ut porta. Aenean laoreet viverra turpis, a commodo
            purus eleifend a. Nam lacus dui; egestas ut aliquam nec, eleifend
            sit amet est.{" "}
          </p>
          <a href="#" className="btn btn-primary btn-lg">
            shop online
          </a>
        </div>
      </section>
    );
  }
}

export default Parallax;
