import React from "react";

import i from "../../assets/images/page-2_img06.jpg";

class OurStandards extends React.Component {
  render() {
    return (
      <section className="well-md well-md--inset-3 well-md--inset-4">
        <div className="container">
          <div className="row flow-offset-1 text-md-left">
            <div className="col-md-4">
              <h1>Our standards</h1>
              <p>Hendrerit dapibus libero non malesuada</p>
              <div className="box-md box-md--mod-1 offset-7">
                <div className="box_left">
                  <span className="icon icon-lg primary-color fa-bullseye" />
                </div>
                <div className="box_cnt">
                  <h2>Amet iaculis condi mentum urna mi aliquet</h2>
                  <p>
                    Maecenas ac lacus ut neque rhoncus laoreet sed id tellus.
                  </p>
                </div>
              </div>
              <div className="box-md box-md--mod-1">
                <div className="box_left">
                  <span className="icon icon-lg primary-color fa-group" />
                </div>
                <div className="box_cnt">
                  <h2>Urna mi aliquet turpis itae pharetra mauris eros </h2>
                  <p>
                    Donec justo tellus, tincidunt vitae pellentesque nec,
                    pharetra a orci.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <h1>Our Principles</h1>
              <p>Duis eu erat et lorem auctor</p>
              <p className="offset-7">
                Nunc eu sem vitae lacus laoreet elementum. Nulla facilisi.
                Phasellus ullamcorper elementum est, id pretium turpis bibendum
                vel.
              </p>
              <ul className="marked-list">
                <li>
                  <a href="#">Lorem ipsum dolor</a>
                </li>
                <li>
                  <a href="#">Sit amet consectetuer</a>
                </li>
                <li>
                  <a href="#">Adipiscing elit</a>
                </li>
              </ul>
            </div>
            <div className="col-md-5">
              <h1>our philosophy</h1>
              <p>Vestibulum elementum tempus eleifend</p>
              <div className="box-md box-md--mod-1 box-md--mod-2 offset-7">
                <div className="box_left">
                  <img
                    src={i}
                    alt
                    className="bottom-line-primary"
                  />
                </div>
                <div className="box_cnt">
                  <p>
                    Phasellus ullamcorper elementum est id pretium turpis
                    bibendum vel. Aliquam a odio arcu. Morbi a dignissim nisl
                    aenean aliquet magna in nulla congue vehicula.
                  </p>
                  <h2>Melissa Silva</h2>
                  <a href="#">www.demolink.org</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default OurStandards;
