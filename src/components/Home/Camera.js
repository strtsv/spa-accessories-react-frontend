import React from "react";
// import "../../assets/js/camera.js";
import $ from "jquery";

import i1 from "../../assets/images/page-1_slide01.jpg";
import i2 from "../../assets/images/page-1_slide02.jpg";
import i3 from "../../assets/images/page-1_slide03.jpg";

class Camera extends React.Component {
  componentDidMount() {
    $(document).ready(function() {
      $("#camera").camera({
        autoAdvance: true,
        height: "34.439024390243902439024390243902%",
        minHeight: "300px",
        pagination: true,
        thumbnails: false,
        playPause: false,
        hover: false,
        loader: "none",
        navigation: true,
        navigationHover: false,
        mobileNavHover: false,
        fx: "simpleFade",
      });
    });
  }

  render() {
    return (
      <div id="camera" className="camera_wrap">
        <div data-src={i1}>
          <div className="camera_caption fadeIn">
            <div className="big">professional courses!</div>
            <p>
              Vel eum iriure dolor in hendrerit in vulputate velit esse molestie
              consequat, vel illum dolore eu
            </p>
          </div>
        </div>
        <div data-src={i2}>
          <div className="camera_caption fadeIn">
            <div className="big">health & beauty</div>
            <p>
              Fre dolor in hendrerit in vulputate velit esse molestie consequat,
              vel illum dolore eu feufacilisis
            </p>
          </div>
        </div>
        <div data-src={i3}>
          <div className="camera_caption fadeIn">
            <div className="big">new spa salons</div>
            <p>
              Ve velit esse molestie consequat, vel illum dolore eu feufacilisis
              at vero eros et accumsiusto
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Camera;
