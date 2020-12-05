import React from "react";

import i from "../../assets/images/logo.png";

class Header extends React.Component {
  render() {
    return (
      <header className="header--mod-1">
        {}
        <div id="stuck_container" className="stuck_container">
          <div className="container">
            <div className="row">
              <div className="col-sm-2">
                {}
                <div className="brand">
                  <a href="./">
                    <img src={i} alt />
                  </a>
                </div>
                {}
              </div>
              <div className="col-sm-10 col-lg-7 col-lg-offset-3">
                {}
                <nav className="nav">
                  <ul className="sf-menu" data-type="navbar">
                    <li>
                      <a href="./">Home</a>
                    </li>
                    <li>
                      <a href="index-1.html">About</a>
                      <ul>
                        <li>
                          <a href="#">Schedule</a>
                          <ul>
                            <li>
                              <a href="#">Lorem</a>
                            </li>
                            <li>
                              <a href="#">Dolorsit</a>
                            </li>
                            <li>
                              <a href="#">Ametrew</a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a href="#">Services</a>
                        </li>
                        <li>
                          <a href="#">Clients</a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="index-2.html">Products</a>
                    </li>
                    <li>
                      <a href="index-3.html">News & Events</a>
                    </li>
                    <li className="active">
                      <a href="#">Contacts</a>
                    </li>
                  </ul>
                </nav>
                {}
              </div>
            </div>
          </div>
        </div>
        {}
      </header>
    );
  }
}

export default Header;
