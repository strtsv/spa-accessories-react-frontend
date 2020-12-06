import React from "react";
import Parallax from "../../components/Parallax/Parallax.js";

import i from "../../assets/images/parallax-7.jpg";

class Addresses extends React.Component {
  render() {
    return (
      <section
        className="well-md well-md--inset-2 parallax"
        data-url={i}
        data-speed="0.4"
      >
        <Parallax className="parallax-container" filter image={i}>
          <div className="container">
            <div className="row text-md-left flow-offset-1">
              <div className="col-md-4">
                <h1>Addresses</h1>
                <p>Vestibulum iaculis lacinia est</p>
                <address className="contact-info">
                  <dl>
                    <dt className="heading-2">Address 1:</dt>
                    <dd>9870 St Vincent Place, Glasgow, DC 45 Fr 45.</dd>
                    <dt className="heading-2">Phones:</dt>
                    <dd>
                      <p>
                        <a href="callto:#" className="contrast-color">
                          +1 800 559 6580
                        </a>
                      </p>
                      <p>
                        <a href="callto:#" className="contrast-color">
                          +1 800 603 6035
                        </a>
                      </p>
                    </dd>
                    <dt className="heading-2">Address 2:</dt>
                    <dd>9863 - 9867 Mill Road, Cambridge, MG09 99HT.</dd>
                  </dl>
                </address>
              </div>
              <div className="col-md-8">
                <h1>Contact form</h1>
                <p>
                  Suspendisse sollicitudin velit sed leo pharetra augue nec
                  augue
                </p>
                {}
                <form
                  className="mailform"
                  method="post"
                  action="bat/rd-mailform.php"
                >
                  <input
                    type="hidden"
                    name="form-type"
                    defaultValue="contact"
                  />
                  <fieldset>
                    <label data-add-placeholder>
                      <input
                        type="text"
                        name="name"
                        placeholder="* Your full name here:"
                        data-constraints="@LettersOnly @NotEmpty"
                      />
                    </label>
                    <label data-add-placeholder>
                      <input
                        type="text"
                        name="email"
                        placeholder="* Enter your e-mail"
                        data-constraints="@Email @NotEmpty"
                      />
                    </label>
                    <label data-add-placeholder>
                      <input
                        type="text"
                        name="phone"
                        placeholder="Your telephone here:"
                        data-constraints="@NumbersOnly"
                      />
                    </label>
                    <label className="textarea" data-add-placeholder>
                      <textarea
                        name="message "
                        placeholder="* Your comments & questions:"
                        data-constraints="@NotEmpty"
                        defaultValue={""}
                      />
                    </label>
                    <div className="mfControls text-center text-md-left">
                      <button className="btn btn-primary btn-md" type="submit">
                        submit
                      </button>
                      <p>* Required Fields</p>
                    </div>
                  </fieldset>
                </form>
                {}
              </div>
            </div>
          </div>
        </Parallax>
      </section>
    );
  }
}

export default Addresses;
