import React from "react";
import $ from "jquery";

import Services from "./Services";
import Products from "./Products";
import Testimonials from "./Testimonials";
import Newsletter from "./Newsletter";

import i from "../../assets/images/logo-1.png";
import i1 from "../../assets/images/parallax-1.jpg";

class Content extends React.Component {
  componentDidMount() {
    $(".parallax").parallax({});
  }
  render() {
    return (
      <main>
        {}
        <section></section>
        {}
        {}
        <section className="well-sm">
          <div className="container">
            {}
            <div
              className="parallax well-sm inset-1 inset-2"
              data-image-src={i1}
              data-url={i1}
              data-speed="0.7"
            >
              <div className="big">Welcome</div>
              <p>
                Ve velit esse molestie consequat, vel illum dolore eu
                feufacilisis at vero eros et accumsiusto
              </p>
              <img src={i} alt />
            </div>
            {}
            <div className="row text-left offset-5 flow-offset-1">
              <div className="col-sm-4">
                <div className="line-after line-after--left">
                  <h2 className="uppercase">
                    <a href="#">um soluta nobis eleifend opt</a>
                  </h2>
                  <p className="contrast-color-variant-1 offset-0">
                    Claritas est etiam processu
                  </p>
                </div>
                <p className="offset-1">
                  Deis autem vel eum iriure dolor in hendrerit in vulputate
                  velit esse molestie consequat, vel illum dolore eu feugiat
                  nulla facilisis at vero eros et accumsan et iusto odio
                  dignissim qui blandit praesent luptaril delenit augue duis
                  dolore te feugait nulla fau feugiat nulla facilisis at veru fe
                  ugiat nulla facilisis.
                </p>
              </div>
              <div className="col-sm-4">
                <div className="line-after line-after--left">
                  <h2 className="uppercase">
                    <a href="#">Claritas est etiam process</a>
                  </h2>
                  <p className="contrast-color-variant-1 offset-0">
                    Deis autem vel
                  </p>
                </div>
                <p className="offset-1">
                  Veem vel eum iriure dolor in hendrerit in vulputate velit esse
                  molestie consequat, vel illum dolore eu feugiat nulla
                  facilisis at vero eros et accumsan et iusto odio dignissim qui
                  blandit praesent luptaril delenit augue duis dolore te feugait
                  nulla fau feugiat nulla facilisis at veru fe ugiat nulla
                  facilisis.
                </p>
              </div>
              <div className="col-sm-4">
                <div className="line-after line-after--left">
                  <h2 className="uppercase">
                    <a href="#">Lorem ipsum dolor sit am</a>
                  </h2>
                  <p className="contrast-color-variant-1 offset-0">
                    Desum dolor sit aher
                  </p>
                </div>
                <p className="offset-1">
                  Be opl eum iriure dolor in hendrerit in vulputate velit esse
                  molestie consequat, vel illum dolore eu feugiat nulla
                  facilisis at vero eros et accumsan et iusto odio dignissim qui
                  blandit praesent luptaril delenit augue duis dolore te feugait
                  nulla fau feugiat nulla facilisis at veru fe.
                </p>
              </div>
            </div>
          </div>
        </section>
        {}
        {}
        <Services></Services>
        {}
        {}
        <Products></Products>
        {}
        {}
        <Testimonials></Testimonials>
        {}
        {}
        <Newsletter></Newsletter>
        {}
      </main>
    );
  }
}

export default Content;
