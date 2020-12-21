import React from "react";

class Newsletter extends React.Component {
  render() {
    return (
      <section className="well-xs well-xs--inset-3 bg-primary">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 text-left">
              <h2 className="envelope inset-3 uppercase">
                Newsletter sign up:
              </h2>
            </div>
            {}
            <form
              className="mailform col-lg-9"
              method="post"
              action="bat/rd-mailform.php"
            >
              <input type="hidden" name="form-type" defaultValue="contact" />
              <fieldset>
                <label data-add-placeholder>
                  <input
                    type="text"
                    name="email"
                    data-constraints="@Email @NotEmpty"
                  />
                </label>
                <div className="mfControls">
                  <button
                    className="btn btn-primary btn-primary--mod-1 btn-md"
                    type="submit"
                  >
                    sign up
                  </button>
                </div>
              </fieldset>
            </form>
            {}
          </div>
        </div>
      </section>
    );
  }
}

export default Newsletter;
