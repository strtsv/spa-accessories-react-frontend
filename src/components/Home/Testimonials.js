import React from "react";
import $ from "jquery";

import i from "../../assets/images/page-1_img12.jpg";
import i1 from "../../assets/images/parallax-3.jpg";

class Testimonials extends React.Component {
  componentDidMount() {
    $(".parallax").parallax({});
  }
  render() {
    return (
      <section
        className="well-md well-md--inset-2 parallax"
        data-image-src={i1}
        data-url={i1}
        data-speed="0.6"
      >
        <div className="container">
          <h1>Testimonials</h1>
          <p>
            Monsequat, vel illum dolore eu feufacilisis at vero eros et
            accumsiusto odio{" "}
          </p>
          <div className="row offset-4">
            <blockquote className="quote col-md-10 col-md-offset-1">
              <p className="quote__content">
                <q>
                  “Fendrerit in vulputate velit esse molestie consequat, vel
                  illum dolore eu feugiat nulla facilisis at vero eros et
                  accumsan et iusto odio dignissim qui blandit praesent luptatum
                  zzril delenit augue duis dolore te feugait nulla facilisi. Nam
                  liber tempor cum soluta nobis eleifend option congue nihil”
                </q>
              </p>
              <img src={i} alt />
              <p className="heading-2 contrast-color">
                <cite>Kate</cite>
              </p>
            </blockquote>
          </div>
        </div>
      </section>
    );
  }
}

export default Testimonials;
