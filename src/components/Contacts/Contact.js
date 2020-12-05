import React from "react";

class Contact extends React.Component {
  render() {
    return (
      <section className="well-md well-md--inset-3">
        <div className="container">
          <h1>Contact us</h1>
          <p>
            Praesent faucibus rutrum odio at rhoncus pellentesque vitae tortor
            id neque
          </p>
          <div className="map offset-4">
            <div id="google-map" className="map_model" />
            <ul className="map_locations">
              <li data-x="-73.9874068" data-y="40.643180">
                <p>
                  {" "}
                  9870 St Vincent Place, Glasgow <span>800 2345-6789</span>
                </p>
              </li>
            </ul>
          </div>
        </div>
      </section>
    );
  }
}

export default Contact;
