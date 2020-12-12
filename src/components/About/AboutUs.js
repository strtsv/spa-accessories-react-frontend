import React from "react";

import i from "../../assets/images/page-2_img01.jpg";

class AboutUs extends React.Component {
  render() {
    return (
      <section className="well-md well-md--inset-3">
        <div className="container">
          <div className="row flow-offset-1 text-md-left">
            <div className="col-md-4">
              <h1>About us</h1>
              <p>Praesent faucibus rutrum odio at rhoncus</p>
              {}
              <article className="blog-post">
                <img
                  src={i}
                  alt
                  className="bottom-line-primary"
                />
                <h2>
                  <a href="#">
                    Aliquam a odio arcu morbi a dignissim nisl aenean aliquet
                  </a>
                </h2>
                <p>
                  Quisque placerat metus at neque aliquam sit amet iaculis lacus
                  iaculis. Etiam ultrices condimentum justo eu viverra.
                </p>
              </article>
              {}
              <p>
                Donec lectus leo, consequat sit amet viverra et, lacinia eu
                lectus! Nullam convallis; justo a vestibulum interdum, ipsum
                mauris lobortis.
              </p>
            </div>
            <div className="col-md-4">
              <h1>Our history</h1>
              <p>Rhoncus pellentesque vitae tortor id neque</p>
              {}
              <article className="event-post">
                <div className="box-md">
                  <div className="box_left">
                    <time dateTime="2015-08-14" className="heading-2">
                      1982 -
                    </time>
                  </div>
                  <div className="box_cnt">
                    <p>
                      Nunc eu sem vitae lacus laoreet elementum. Nulla facilisi.
                      Phasellus ullamcorper elementum est.
                    </p>
                  </div>
                </div>
              </article>
              <article className="event-post offset-8">
                <div className="box-md">
                  <div className="box_left">
                    <time dateTime="2015-08-14" className="heading-2">
                      1990 -
                    </time>
                  </div>
                  <div className="box_cnt">
                    <p>
                      Nunc eu sem vitae lacus laoreet elementum. Nulla facilisi.
                      Phasellus ullamcorper elementum est.
                    </p>
                  </div>
                </div>
              </article>
              <article className="event-post offset-8">
                <div className="box-md">
                  <div className="box_left">
                    <time dateTime="2015-08-14" className="heading-2">
                      2004 -
                    </time>
                  </div>
                  <div className="box_cnt">
                    <p>
                      Nunc eu sem vitae lacus laoreet elementum. Nulla facilisi.
                      Phasellus ullamcorper elementum est.
                    </p>
                  </div>
                </div>
              </article>
              <article className="event-post offset-8">
                <div className="box-md">
                  <div className="box_left">
                    <time dateTime="2015-08-14" className="heading-2">
                      2011 -
                    </time>
                  </div>
                  <div className="box_cnt">
                    <p>
                      Nunc eu sem vitae lacus laoreet elementum. Nulla facilisi.
                      Phasellus ullamcorper elementum est.
                    </p>
                  </div>
                </div>
              </article>
              <article className="event-post offset-8">
                <div className="box-md">
                  <div className="box_left">
                    <time dateTime="2015-08-14" className="heading-2">
                      Today -
                    </time>
                  </div>
                  <div className="box_cnt">
                    <p>
                      Nunc eu sem vitae lacus laoreet elementum. Nulla facilisi.
                      Phasellus ullamcorper elementum est.
                    </p>
                  </div>
                </div>
              </article>
              {}
            </div>
            <div className="col-md-4">
              <h1>Advantages</h1>
              <p>Vitae tortor id neque fermentum pretium</p>
              <h2>
                Curabitur pellentesque turpis sit amet iaculis condimentum urna
                mi
              </h2>
              <p>
                Pellentesque vitae tortor id neque fermentum pretium. Maecenas
                ac lacus ut neque rhoncus laoreet sed id tellus. Donec justo
                tellus, tincidunt
              </p>
              {}
              <ul className="marked-list">
                <li>
                  <a href="#">Vestibulum iaculis</a>
                </li>
                <li>
                  <a href="#">Lacinia est proin dictum</a>
                </li>
                <li>
                  <a href="#">Elementum velit</a>
                </li>
                <li>
                  <a href="#">Consequat ante</a>
                </li>
                <li>
                  <a href="#">Lorem ipsum dolor</a>
                </li>
              </ul>
              {}
              <p>
                Praesent nunc egestas eget elementum sed; rutrum eget metus!
                Vestibulum congue dui ut porta. Aenean laoreet viverra turpis a
                commodo.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default AboutUs;
