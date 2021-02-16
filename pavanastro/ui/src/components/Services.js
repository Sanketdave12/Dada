import React from "react";
import Footer from "./Footer";
import Header from "./Header";

const Services = () => {
  return (
    <div id="wrap">
      <div id="main-wrapper">
        <Header />
        <section class="sub-banner">
          <div class="container">
            <div class="position-center-center">
              <h2>our services</h2>
            </div>
          </div>
        </section>

        {/*======= SERVICE SECTION =========*/}
        <section class="sectoion-100px services">
          <div class="container">
            {/* Tittle */}
            <div class="tittle">
              <h4>services what we provide</h4>
              <p>
                He's a demon on wheels. The mate was a mighty sailin' man the
                Skipper brave and sure. Five passengers set sail that day for a
                three hour tour a three hour tour the ship set ground on the
                shore of this uncharted
              </p>
            </div>

            {/* Service Row */}
            <ul class="row">
              {/* Service */}
              <li class="col-md-4">
                <div class="ser-in margin-bottom-30">
                  <div class="icon">
                    {" "}
                    <img src="/static/images/icon-1.png" alt="" />{" "}
                  </div>
                  <h5>Web designing</h5>
                  <hr />
                  <p>
                    {" "}
                    These are the voyages of the Starship Enterpr movin' on up
                    to the east side. We finally got a piece of thepie.{" "}
                  </p>
                </div>
              </li>

              {/* Service */}
              <li class="col-md-4">
                <div class="ser-in margin-bottom-30">
                  <div class="icon">
                    {" "}
                    <img src="/static/images/icon-2.png" alt="" />{" "}
                  </div>
                  <h5>Web development</h5>
                  <hr />
                  <p>
                    {" "}
                    These are the voyages of the Starship Enterpr movin' on up
                    to the east side. We finally got a piece of thepie.{" "}
                  </p>
                </div>
              </li>

              {/* Service */}
              <li class="col-md-4 margin-bottom-30">
                <div class="ser-in">
                  <div class="icon">
                    {" "}
                    <img src="/static/images/icon-3.png" alt="" />{" "}
                  </div>
                  <h5>branding</h5>
                  <hr />
                  <p>
                    {" "}
                    These are the voyages of the Starship Enterpr movin' on up
                    to the east side. We finally got a piece of thepie.{" "}
                  </p>
                </div>
              </li>

              {/* Service */}
              <li class="col-md-4">
                <div class="ser-in margin-bottom-30">
                  <div class="icon">
                    {" "}
                    <img src="/static/images/icon-4.png" alt="" />{" "}
                  </div>
                  <h5>photography</h5>
                  <hr />
                  <p>
                    {" "}
                    These are the voyages of the Starship Enterpr movin' on up
                    to the east side. We finally got a piece of thepie.{" "}
                  </p>
                </div>
              </li>

              {/* Service */}
              <li class="col-md-4">
                <div class="ser-in margin-bottom-30">
                  <div class="icon">
                    {" "}
                    <img src="/static/images/icon-5.png" alt="" />{" "}
                  </div>
                  <h5>digital marketing</h5>
                  <hr />
                  <p>
                    {" "}
                    These are the voyages of the Starship Enterpr movin' on up
                    to the east side. We finally got a piece of thepie.{" "}
                  </p>
                </div>
              </li>

              {/* Service */}
              <li class="col-md-4 margin-bottom-30">
                <div class="ser-in">
                  <div class="icon">
                    {" "}
                    <img src="/static/images/icon-6.png" alt="" />{" "}
                  </div>
                  <h5>web analytics</h5>
                  <hr />
                  <p>
                    {" "}
                    These are the voyages of the Starship Enterpr movin' on up
                    to the east side. We finally got a piece of thepie.{" "}
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </section>

        {/*======= PORTFOLIO =========*/}
        <section class="sectoion-100px portfolio light-gray-bg">
          <div class="container">
            {/* Tittle */}
            <div class="tittle">
              <h4>our latest works</h4>
              <p>
                He's a demon on wheels. The mate was a mighty sailin' man the
                Skipper brave and sure. Five passengers set sail that day for a
                three hour tour a three hour tour the ship set ground on the
                shore of this uncharted
              </p>
            </div>
          </div>
          <div class="container">
            <ul class="port-folio-row no-margin-t folio-simple row col-3">
              {/* Project 1 */}
              <li class="item padding-15">
                <article>
                  {" "}
                  <img src="/static/images/port-img-1.jpg" alt="" />
                  {/* Hover Info */}
                  <div class="hover-port">
                    <div class="position-center-center">
                      {" "}
                      <a href="#.">
                        <i class="fa fa-link"></i>
                      </a>
                      <h6>Awesome Projects</h6>
                    </div>
                  </div>
                </article>
              </li>

              {/* Project 1 */}
              <li class="item padding-15">
                <article>
                  {" "}
                  <img src="/static/images/port-img-2.jpg" alt="" />
                  {/* Hover Info */}
                  <div class="hover-port">
                    <div class="position-center-center">
                      {" "}
                      <a href="#.">
                        <i class="fa fa-link"></i>
                      </a>
                      <h6>Awesome Projects</h6>
                    </div>
                  </div>
                </article>
              </li>

              {/* Project 1 */}
              <li class="item padding-15">
                <article>
                  {" "}
                  <img src="/static/images/port-img-3.jpg" alt="" />
                  {/* Hover Info */}
                  <div class="hover-port">
                    <div class="position-center-center">
                      {" "}
                      <a href="#.">
                        <i class="fa fa-link"></i>
                      </a>
                      <h6>Awesome Projects</h6>
                    </div>
                  </div>
                </article>
              </li>

              {/* Project 1 */}
              <li class="item padding-15">
                <article>
                  {" "}
                  <img src="/static/images/port-img-4.jpg" alt="" />
                  {/* Hover Info */}
                  <div class="hover-port">
                    <div class="position-center-center">
                      {" "}
                      <a href="#.">
                        <i class="fa fa-link"></i>
                      </a>
                      <h6>The mate was a mighty</h6>
                    </div>
                  </div>
                </article>
              </li>

              {/* Project 1 */}
              <li class="item padding-15">
                <article>
                  {" "}
                  <img src="/static/images/port-img-5.jpg" alt="" />
                  {/* Hover Info */}
                  <div class="hover-port">
                    <div class="position-center-center">
                      {" "}
                      <a href="#.">
                        <i class="fa fa-link"></i>
                      </a>
                      <h6>The mate was a mighty</h6>
                    </div>
                  </div>
                </article>
              </li>

              {/* Project 1 */}
              <li class="item padding-15">
                <article>
                  {" "}
                  <img src="/static/images/port-img-6.jpg" alt="" />
                  {/* Hover Info */}
                  <div class="hover-port">
                    <div class="position-center-center">
                      {" "}
                      <a href="#.">
                        <i class="fa fa-link"></i>
                      </a>
                      <h6>The mate was a mighty</h6>
                    </div>
                  </div>
                </article>
              </li>

              {/* Project 1 */}
              <li class="item padding-15">
                <article>
                  {" "}
                  <img src="/static/images/port-img-7.jpg" alt="" />
                  {/* Hover Info */}
                  <div class="hover-port">
                    <div class="position-center-center">
                      {" "}
                      <a href="#.">
                        <i class="fa fa-link"></i>
                      </a>
                      <h6>Awesome Projects</h6>
                    </div>
                  </div>
                </article>
              </li>

              {/* Project 1 */}
              <li class="item padding-15">
                <article>
                  {" "}
                  <img src="/static/images/port-img-8.jpg" alt="" />
                  {/* Hover Info */}
                  <div class="hover-port">
                    <div class="position-center-center">
                      {" "}
                      <a href="#.">
                        <i class="fa fa-link"></i>
                      </a>
                      <h6>Awesome Projects</h6>
                    </div>
                  </div>
                </article>
              </li>

              {/* Project 1 */}
              <li class="item padding-15">
                <article>
                  {" "}
                  <img src="/static/images/port-img-2.jpg" alt="" />
                  {/* Hover Info */}
                  <div class="hover-port">
                    <div class="position-center-center">
                      {" "}
                      <a href="#.">
                        <i class="fa fa-link"></i>
                      </a>
                      <h6>Awesome Projects</h6>
                    </div>
                  </div>
                </article>
              </li>
            </ul>
          </div>
        </section>

        {/*======= Pricing =========*/}
        <section class="pricing sectoion-100px">
          <div class="container">
            {/* Tittle */}
            <div class="tittle">
              <h4>our basic pricing plans</h4>
              <p>
                He's a demon on wheels. The mate was a mighty sailin' man the
                Skipper brave and sure. Five passengers set sail that day for a
                three hour tour a three hour tour the ship set ground on the
                shore of this uncharted
              </p>
            </div>

            {/* Row */}
            <div class="row">
              {/* Plan  */}
              <div class="col-md-4">
                <div class="plan-in">
                  <h5>
                    <i class="icon">
                      <img src="/static/images/icon-7.png" />
                    </i>{" "}
                    Standard
                  </h5>
                  <div class="price">
                    {" "}
                    <span class="huge-text">$50</span>{" "}
                    <span class="month">PER MONTH</span>{" "}
                  </div>
                  <ul>
                    <li>Psd To WordPress</li>
                    <li> Free Hosting</li>
                    <li> 24/7 Support</li>
                    <li> Unique Design</li>
                    <li> Different Elements</li>
                    <li> Elegant Layout</li>
                  </ul>
                  <a href="#." class="btn">
                    SIGN IN
                  </a>{" "}
                </div>
              </div>

              {/* Plan  */}
              <div class="col-md-4">
                <div class="plan-in">
                  <h5>
                    {" "}
                    <i class="icon">
                      <img src="/static/images/icon-8.png" />
                    </i>{" "}
                    business
                  </h5>
                  <div class="price">
                    {" "}
                    <span class="huge-text">$100</span>{" "}
                    <span class="month">PER MONTH</span>{" "}
                  </div>
                  <ul>
                    <li>Psd To WordPress</li>
                    <li> Free Hosting</li>
                    <li> 24/7 Support</li>
                    <li> Unique Design</li>
                    <li> Different Elements</li>
                    <li> Elegant Layout</li>
                  </ul>
                  <a href="#." class="btn">
                    SIGN IN
                  </a>{" "}
                </div>
              </div>

              {/* Plan  */}
              <div class="col-md-4">
                <div class="plan-in">
                  <h5>
                    {" "}
                    <i class="icon">
                      <img src="/static/images/icon-9.png" />
                    </i>{" "}
                    unlimited
                  </h5>
                  <div class="price">
                    {" "}
                    <span class="huge-text">$150</span>{" "}
                    <span class="month">PER MONTH</span>{" "}
                  </div>
                  <ul>
                    <li>Psd To WordPress</li>
                    <li> Free Hosting</li>
                    <li> 24/7 Support</li>
                    <li> Unique Design</li>
                    <li> Different Elements</li>
                    <li> Elegant Layout</li>
                  </ul>
                  <a href="#." class="btn">
                    SIGN IN
                  </a>{" "}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Tastimonial */}
        <section class="tastimonial tastimonial-bg padding-bottom-100">
          <div class="container">
            {/*======= SLIDER =========*/}
            <div class="testi-slides">
              {/*======= SLIDE 1 =========*/}
              <div class="testi">
                <div class="avatar">
                  {" "}
                  <img src="/static/images/avatar-1.png" />
                </div>
                <h6>grerry cristal </h6>
                <span>Sydney, Australia </span>
                <p>
                  So this is the tale of our castaways they're here for a the
                  curves.Well the first thing you know long long time. They'll
                  have to make the best of things uphill climb. Straightnin'
                  Jeds a millionaire. Kinfolk said Jed move away from there.
                </p>
              </div>

              {/*======= SLIDE 2 =========*/}
              <div class="testi">
                <div class="avatar">
                  {" "}
                  <img src="/static/images/avatar-1.png" />
                </div>
                <h6>M_ADNAN </h6>
                <span>Sydney, Australia </span>
                <p>
                  So this is the tale of our castaways they're here for a make
                  the best long long time. They'll have to of things uphill
                  climb. Straightnin' the curves.Well the first thing you know
                  Jeds a millionaire. Kinfolk said Jed move away from there.
                </p>
              </div>

              {/*======= SLIDE 3 =========*/}
              <div class="testi">
                <div class="avatar">
                  {" "}
                  <img src="/static/images/avatar-1.png" />
                </div>
                <h6>FATON DESIGN </h6>
                <span>Sydney, Australia </span>
                <p>
                  So this is the tale . They'll have to make the best of things
                  of our castaways they're here for a long long time uphill
                  climb. Straightnin' the curves.Well the first thing you know
                  Jeds a millionaire. Kinfolk said Jed move away from there.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/*======= clients-logo =========*/}
        <section class="sectoion-100px clients">
          <div class="container">
            <ul class="row">
              <li class="col-sm-2">
                {" "}
                <img
                  class="img-responsive"
                  src="/static/images/c-logo-1.png"
                  alt=""
                />{" "}
              </li>
              <li class="col-sm-2">
                {" "}
                <img
                  class="img-responsive"
                  src="/static/images/c-logo-2.png"
                  alt=""
                />{" "}
              </li>
              <li class="col-sm-2">
                {" "}
                <img
                  class="img-responsive"
                  src="/static/images/c-logo-3.png"
                  alt=""
                />{" "}
              </li>
              <li class="col-sm-2">
                {" "}
                <img
                  class="img-responsive"
                  src="/static/images/c-logo-4.png"
                  alt=""
                />{" "}
              </li>
              <li class="col-sm-2">
                {" "}
                <img
                  class="img-responsive"
                  src="/static/images/c-logo-5.png"
                  alt=""
                />{" "}
              </li>
              <li class="col-sm-2">
                {" "}
                <img
                  class="img-responsive"
                  src="/static/images/c-logo-6.png"
                  alt=""
                />{" "}
              </li>
            </ul>
          </div>
        </section>
        {/*======= FOOTER UP =========*/}
        <Footer />
      </div>
    </div>
  );
};

export default Services;
