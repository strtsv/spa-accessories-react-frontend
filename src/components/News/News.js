import React from "react";

import i1 from "../../assets/images/page-4_img01.jpg";
import i2 from "../../assets/images/page-4_img02.jpg";
import i3 from "../../assets/images/page-4_img03.jpg";
import i4 from "../../assets/images/page-4_img04.jpg";
import i5 from "../../assets/images/page-4_img05.jpg";
import i6 from "../../assets/images/page-4_img06.jpg";
import i7 from "../../assets/images/page-4_img07.jpg";
import i8 from "../../assets/images/page-4_img08.jpg";
import i9 from "../../assets/images/page-4_img09.jpg";

class News extends React.Component {
  render() {
    return (
      <section className="well-md--inset-3 well-md--inset-4">
        <div className="container">
          <h1>news & events</h1>
          <p>Aliquam congue fermentum nisl mauris accumsan nulla ve</p>
          <div className="row flow-offset-1 text-md-left offset-3">
            {}
            <div className="col-md-4">
              <article className="event-post">
                <img src={i1} alt className="inset-11" />
                <div className="line-after line-after--left">
                  <h2>
                    <a href="#">Praesent vestibulum molestie</a>
                  </h2>
                  <p className="post-meta">
                    <time dateTime="2015-08-14">November 15, 2015</time>
                    <a href="#">Admin</a>
                  </p>
                </div>
                <p>
                  Nam aliquam pretium feugiat. Duis sem est, viverra eu interdum
                  ac, suscipit nec mauris. Suspendisse commodo tempor sagittis!
                </p>
              </article>
              <article className="event-post">
                <img src={i2} alt />
                <div className="line-after line-after--left">
                  <h2>
                    <a href="#">Nulla Facilisi Aenean Nec Eros</a>
                  </h2>
                  <p className="post-meta">
                    <time dateTime="2015-08-14">November 15, 2015</time>
                    <a href="#">Admin</a>
                  </p>
                </div>
                <p>
                  Praesent faucibus rutrum odio at rhoncus. Pellentesque vitae
                  tortor id neque fermentum pretium. Maecenas ac lacus ut neque.
                </p>
              </article>
              <article className="event-post">
                <div className="line-after line-after--left">
                  <h2>
                    <a href="#">In Faucibus Orci Luctus Et</a>
                  </h2>
                  <p className="post-meta">
                    <time dateTime="2015-08-14">November 15, 2015</time>
                    <a href="#">Admin</a>
                  </p>
                </div>
                <p>
                  Pellentesque vitae tortor id neque fermentum pretium. Maecenas
                  ac lacus ut neque rhoncus laoreet sed id tellus. Donec justo
                  tellus.
                </p>
              </article>
              <article className="event-post">
                <img src={i3} alt />
                <div className="line-after line-after--left">
                  <h2>
                    <a href="#">Ut Pharetra Augue Nec Augue</a>
                  </h2>
                  <p className="post-meta">
                    <time dateTime="2015-08-14">November 15, 2015</time>
                    <a href="#">Admin</a>
                  </p>
                </div>
                <p>
                  Aenean laoreet viverra turpis, a commodo purus eleifend a. Nam
                  lacus dui; egestas ut aliquam nec, eleifend sit amet est. Nam
                  justo elit, dictum.
                </p>
              </article>
              <article className="event-post">
                <div className="line-after line-after--left">
                  <h2>
                    <a href="#">Elit Agna Endrerit Sit Amet</a>
                  </h2>
                  <p className="post-meta">
                    <time dateTime="2015-08-14">November 15, 2015</time>
                    <a href="#">Admin</a>
                  </p>
                </div>
                <p>
                  Nam justo elit, dictum id tempus a, ultricies tempus lacus.
                  Nunc purus nibh; eleifend eget facilisis ac, sagittis non
                  tortor.
                </p>
              </article>
            </div>
            <div className="col-md-4">
              <article className="event-post">
                <div className="line-after line-after--left">
                  <h2>
                    <a href="#">Aenean Nonummy Hendrerit</a>
                  </h2>
                  <p className="post-meta">
                    <time dateTime="2015-08-14">November 15, 2015</time>
                    <a href="#">Admin</a>
                  </p>
                </div>
                <p>
                  Duis sem est, viverra eu interdum ac, suscipit nec mauris.
                  Suspendisse commodo tempor sagittis! In justo est,
                  sollicitudin eu scelerisque pretium.
                </p>
              </article>
              <article className="event-post">
                <img src={i4} alt />
                <div className="line-after line-after--left">
                  <h2>
                    <a href="#">Etiam Cursus Leo Vel Metus</a>
                  </h2>
                  <p className="post-meta">
                    <time dateTime="2015-08-14">November 15, 2015</time>
                    <a href="#">Admin</a>
                  </p>
                </div>
                <p>
                  In justo est, sollicitudin eu scelerisque pretium, placerat
                  eget elit. Praesent faucibus rutrum odio at rhoncus.
                  Pellentesque vitae tortor id neque.{" "}
                </p>
              </article>
              <article className="event-post">
                <img src={i5} alt />
                <div className="line-after line-after--left">
                  <h2>
                    <a href="#">Ultrices Posuere Cubilia</a>
                  </h2>
                  <p className="post-meta">
                    <time dateTime="2015-08-14">November 15, 2015</time>
                    <a href="#">Admin</a>
                  </p>
                </div>
                <p>
                  Maecenas ac lacus ut neque rhoncus laoreet sed id tellus.
                  Donec justo tellus, tincidunt vitae pellentesque nec, pharetra
                  a orci.
                </p>
              </article>
              <article className="event-post">
                <div className="line-after line-after--left">
                  <h2>
                    <a href="#">Sollicitudin Velit Sed Leo</a>
                  </h2>
                  <p className="post-meta">
                    <time dateTime="2015-08-14">November 15, 2015</time>
                    <a href="#">Admin</a>
                  </p>
                </div>
                <p>
                  Vestibulum congue dui ut porta. Aenean laoreet viverra turpis,
                  a commodo purus eleifend a. Nam lacus dui; egestas ut aliquam
                  nec.
                </p>
              </article>
              <article className="event-post">
                <img src={i6} alt />
                <div className="line-after line-after--left">
                  <h2>
                    <a href="#">Tincidunt Ac Viverra Sed</a>
                  </h2>
                  <p className="post-meta">
                    <time dateTime="2015-08-14">November 15, 2015</time>
                    <a href="#">Admin</a>
                  </p>
                </div>
                <p>
                  Nunc purus nibh; eleifend eget facilisis ac, sagittis non
                  tortor. Vivamus eu enim a orci accumsan tincidunt ut ut elit.
                  Vestibulum nisi orci.
                </p>
              </article>
            </div>
            <div className="col-md-4">
              <article className="event-post">
                <img src={i7} alt className="inset-11" />
                <div className="line-after line-after--left">
                  <h2>
                    <a href="#">Vivamus Eget Nibh</a>
                  </h2>
                  <p className="post-meta">
                    <time dateTime="2015-08-14">November 15, 2015</time>
                    <a href="#">Admin</a>
                  </p>
                </div>
                <p>
                  Suspendisse commodo tempor sagittis! In justo est,
                  sollicitudin eu scelerisque pretium, placerat eget elit.
                  Praesent faucibus rutrum odio.
                </p>
              </article>
              <article className="event-post">
                <img src={i8} alt />
                <div className="line-after line-after--left">
                  <h2>
                    <a href="#">Vestibulum Ante Ipsum Primis</a>
                  </h2>
                  <p className="post-meta">
                    <time dateTime="2015-08-14">November 15, 2015</time>
                    <a href="#">Admin</a>
                  </p>
                </div>
                <p>
                  Nam aliquam pretium feugiat. Duis sem est, viverra eu interdum
                  ac, suscipit nec mauris. Suspendisse commodo tempor sagittis!
                </p>
              </article>
              <article className="event-post">
                <div className="line-after line-after--left">
                  <h2>
                    <a href="#">Posuere Cubilia Curae</a>
                  </h2>
                  <p className="post-meta">
                    <time dateTime="2015-08-14">November 15, 2015</time>
                    <a href="#">Admin</a>
                  </p>
                </div>
                <p>
                  Donec justo tellus, tincidunt vitae pellentesque nec, pharetra
                  a orci. Praesent nunc nunc, egestas eget elementum sed; rutrum
                  eget metus!{" "}
                </p>
              </article>
              <article className="event-post">
                <img src={i9} alt />
                <div className="line-after line-after--left">
                  <h2>
                    <a href="#">Donec Porta Diam Eu Massa</a>
                  </h2>
                  <p className="post-meta">
                    <time dateTime="2015-08-14">November 15, 2015</time>
                    <a href="#">Admin</a>
                  </p>
                </div>
                <p>
                  Praesent nunc nunc, egestas eget elementum sed; rutrum eget
                  metus! Vestibulum congue dui ut porta. Aenean laoreet viverra
                  turpis.
                </p>
              </article>
              <article className="event-post">
                <div className="line-after line-after--left">
                  <h2>
                    <a href="#">Quisque Diam Lorem</a>
                  </h2>
                  <p className="post-meta">
                    <time dateTime="2015-08-14">November 15, 2015</time>
                    <a href="#">Admin</a>
                  </p>
                </div>
                <p>
                  Vivamus eu enim a orci accumsan tincidunt ut ut elit.
                  Vestibulum nisi orci rutrum ac auctor non, viverra et magna?
                  Sed vehicula sem et arcu.
                </p>
              </article>
            </div>
            {}
          </div>
        </div>
      </section>
    );
  }
}

export default News;
