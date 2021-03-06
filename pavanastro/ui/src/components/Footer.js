import React from "react";

const Footer = () => {
  return (
    <section class="footer-up">
      <div class="col-sm-6">
        <div class="work">
          {" "}
          <i class="ion-map"></i>
          <p>
            09 Design Street, Downtown <br />
            victoria, Australia
          </p>
        </div>
      </div>
      <div class="col-sm-6">
        <div class="contact">
          {/*======= Social Icon =========*/}
          <ul class="social_icons">
            <li class="facebook">
              <a class="facebook" href="#.">
                <i class="fa fa-facebook"></i>
              </a>
            </li>
            <li class="twitter">
              <a class="twitter" href="#.">
                <i class="fa fa-twitter"></i>
              </a>
            </li>
            <li class="linkedin">
              <a class="linkedin" href="#.">
                <i class="fa fa-linkedin"></i>
              </a>
            </li>
          </ul>
          <p>Copyright © 2015 - All Rights Reserved</p>
        </div>
      </div>
    </section>
  );
};

export default Footer;
