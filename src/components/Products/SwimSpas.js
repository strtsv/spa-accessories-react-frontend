import React from "react";

import i from "../../assets/images/logo-1.png";

class SwimSpas extends React.Component {
  render() {
    return (
      <section className="well-xs well-xs--inset-1">
        <div className="container">
          <div className="row flow-offset-1">
            <div className="col-md-8">
              <div className="bg-img-1 contrast-color inset-4 inset-5 inset-9 inset-10 ">
                <div className="big">Swim Spas</div>
                <p>
                  Phasellus hendrerit dapibus libero non malesuada nunc
                  consectetur sed
                </p>
                <a href="#" className="btn btn-default btn-lg">
                  See products
                </a>
              </div>
              <div className="bg-img-3 contrast-color inset-6 inset-4 inset-9 inset-10 offset-8">
                <div className="big">Accessories</div>
                <p>
                  Vestibulum volutpat suscipit sem nec bibendum massa malesuada
                  eget
                </p>
                <a href="#" className="btn btn-default btn-lg">
                  See products
                </a>
              </div>
            </div>
            <div className="col-md-4">
              <div className="bg-img-2 max-width-1 inset-7 inset-8 inset-9 inset-10 contrast-color">
                <div className="big">Hot Tubs</div>
                <p>
                  Suspendisse commodo tempor sagittis! In justo est,
                  sollicitudin eu scelerisque pretium, placerat eget elit.
                  Praesent faucibus rutrum odio at rhoncus.
                </p>
                <a href="#" className="btn btn-default btn-lg">
                  See products
                </a>
                <p className="offset-2">
                  <img src={i} alt />
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default SwimSpas;
