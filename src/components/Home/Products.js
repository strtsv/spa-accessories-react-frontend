import React from "react";
import $ from "jquery";

import i1 from "../../assets/images/page-1_img05.png";
import i2 from "../../assets/images/page-1_img06.png";
import i3 from "../../assets/images/page-1_img07.png";
import i4 from "../../assets/images/page-1_img08.png";
import i5 from "../../assets/images/page-1_img09.jpg";
import i6 from "../../assets/images/page-1_img10.jpg";
import i7 from "../../assets/images/page-1_img11.jpg";
import i8 from "../../assets/images/page-1_img12.jpg";

class Products extends React.Component {
  componentDidMount() {
    $('.resp-tabs').easyResponsiveTabs();
  }
  render() {
    return (
      <section className="well-md well-md--inset-1">
        <div className="container">
          <h1>Products</h1>
          <p>
            Mlestie consequat, vel illum dolore eu feufacilisis at vero eros et
            accumsiusto odio dignissim qui{" "}
          </p>
          {}
          <div className="resp-tabs text-sm-left offset-3">
            <ul className="resp-tabs-list">
              <li>
                <img src={i1} alt />
                Tea
              </li>
              <li>
                <img src={i2} alt />
                Massage products
              </li>
              <li>
                <img src={i3} alt />
                Aromatic oils
              </li>
              <li>
                <img src={i4} alt />
                Candles
              </li>
            </ul>
            <div className="resp-tabs-container text-sm-left">
              <div>
                <div className="row flow-offset-1">
                  <div className="col-sm-4">
                    <div className="product">
                      <a href="#">
                        <img src={i5} alt />
                        <p className="price">$3</p>
                      </a>
                      <h2>
                        <a href="#">Duis autem vel eum iriure</a>
                      </h2>
                      <p>
                        Mlestie consequat, vel illum dolore eu feufacilisis at
                        vero eros et accumsiusto odio dignissim qui
                      </p>
                    </div>
                  </div>
                  <div className="col-sm-4">
                    <div className="product">
                      <a href="#">
                        <img src={i6} alt />
                        <p className="price">$9</p>
                      </a>
                      <h2>
                        <a href="#">Claritas est etiam process</a>
                      </h2>
                      <p>
                        Vol illum dolore eu feufacilisis at vero eros et
                        accumsiusto odio dignissim qui blandit praesent{" "}
                      </p>
                    </div>
                  </div>
                  <div className="col-sm-4">
                    <div className="product">
                      <a href="#">
                        <img src={i7} alt />
                        <p className="price">$12</p>
                      </a>
                      <h2>
                        <a href="#">Autem vel eum iriu</a>
                      </h2>
                      <p>
                        Seonsequat, vel illum dolore eu feufacilisis at vero
                        eros et accumsiusto odio dignissim blan
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="row flow-offset-1">
                  <div className="col-sm-4">
                    <div className="product">
                      <a href="#">
                        <img src={i8} alt />
                        <p className="price">$12</p>
                      </a>
                      <h2>
                        <a href="#">Autem vel eum iriu</a>
                      </h2>
                      <p>
                        Seonsequat, vel illum dolore eu feufacilisis at vero
                        eros et accumsiusto odio dignissim blan
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="row flow-offset-1">
                  <div className="col-sm-4">
                    <div className="product">
                      <a href="#">
                        <img src={i6} alt />
                        <p className="price">$9</p>
                      </a>
                      <h2>
                        <a href="#">Claritas est etiam process</a>
                      </h2>
                      <p>
                        Vol illum dolore eu feufacilisis at vero eros et
                        accumsiusto odio dignissim qui blandit praesent{" "}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="row flow-offset-1">
                  <div className="col-sm-4">
                    <div className="product">
                      <a href="#">
                        <img src={i5} alt />
                        <p className="price">$3</p>
                      </a>
                      <h2>
                        <a href="#">Duis autem vel eum iriure</a>
                      </h2>
                      <p>
                        Mlestie consequat, vel illum dolore eu feufacilisis at
                        vero eros et accumsiusto odio dignissim qui
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {}
          </div>
        </div>
      </section>
    );
  }
}

export default Products;
