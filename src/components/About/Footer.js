import React from "react";

import i from "../../assets/images/logo-footer.png";

class Footer extends React.Component {
  render() {
    return (
      <footer>
        <div className="container well-md top-line">
          <a href="./">
            <img src={i} alt />
          </a>
          <p className="copyright">
            Copyright © <span id="copyright-year" /> |
            <a href="index-5.html">Privacy Policy</a>
          </p>
        </div>
      </footer>
    );
  }
}

export default Footer;
