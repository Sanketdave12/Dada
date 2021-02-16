import React from "react";
import Header from "./Header";

const BlogDetail = () => {
  return (
    <div id="wrap">
      <div id="main-wrapper">
        <Header />
        {/*======= SUB BANNER =========*/}
        <section class="sub-banner">
          <div class="container">
            <div class="position-center-center">
              <h2>OUR BLOG</h2>
            </div>
          </div>
        </section>

        {/*======= BLOG =========*/}
        <div class="container">
          {/*======= BLOG =========*/}
          <div class="row blog our-blog blog-page single-post sectoion-100px">
            <div class="col-sm-9">
              {/*======= POST 1 =========*/}
              <article>
                {/* Post */}
                <div class="blog-in">
                  {/* Post Image */}
                  <div class="blog-up-sec">
                    {" "}
                    <img
                      class="img-responsive"
                      src="images/blog-3.jpg"
                      alt=""
                    />
                    {/* Post Date */}
                    <div class="date-post">
                      {" "}
                      29 <span> AUG</span>{" "}
                      <img src="images/icon-date-post.png" alt="" />{" "}
                    </div>
                  </div>
                  {/* Post Detail */}
                  <span>By admin / Agency</span>{" "}
                  <a href="#." class="heading">
                    {" "}
                    We're gonna make our dreams come true They were four men all
                    together yet they were all alone.
                  </a>
                  <div class="post-details">
                    <p>
                      {" "}
                      Come and knock on our door. We've been waiting for you.
                      Where this kisses are hers and ers and his. Three's pan
                      will too Texas tea. The Love Boat soon will be making
                      another run. The Love Boat promises something o everyone
                      come Blanditiis the montes architecto doloribus dolor.{" "}
                    </p>
                    <blockquote>
                      {" "}
                      That this group would somehow form a family that's the way
                      we all became the Brady Bunch. In a freak the a mishap
                      Ranger 3 and its pilot the Captain William.{" "}
                    </blockquote>
                    <p>
                      {" "}
                      Come and knock on our door. We've been waiting for you.
                      Where this kisses are hers and ers and his. Three's pan
                      will too Texas tea. The Love Boat soon will be making
                      another run. The Love Boat promises something o everyone
                      come Blanditiis the montes architecto doloribus dolor.{" "}
                    </p>

                    {/*======= SOCIAL ICONS =========*/}
                    <ul class="social_icons pull-right">
                      <li class="facebook">
                        <a href="#.">
                          <i class="fa fa-facebook"></i>{" "}
                        </a>
                      </li>
                      <li class="twitter">
                        <a href="#.">
                          <i class="fa fa-twitter"></i>{" "}
                        </a>
                      </li>
                      <li class="dribbble">
                        <a href="#.">
                          <i class="fa fa-dribbble"></i>{" "}
                        </a>
                      </li>
                      <li class="instagram">
                        <a href="#.">
                          <i class="fa fa-instagram"></i>{" "}
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </article>

              {/*=======  COMMENTS =========*/}
              <div class="comments">
                <h4 class="text-uppercase">3 comments </h4>
                <ul class="media-list">
                  {/*=======  COMMENTS =========*/}
                  <li class="media">
                    <div class="media-left">
                      {" "}
                      <a href="#">
                        {" "}
                        <img
                          class="media-object"
                          src="images/avatar-1.jpg"
                          alt=""
                        />{" "}
                      </a>{" "}
                    </div>
                    <div class="media-body">
                      <h6 class="media-heading">
                        Steave Hans<span>Aug 22, 2015 at 11:00 pm</span>
                      </h6>
                      <p>
                        Taque ipsa quae abe illo inventore veritatis et quasi
                        architecto beatae vitae dicta sunt explicabo nemosala
                        enim ipsam volupitatem quia voluptas sit aspernatur aut
                        odit aut fugite.
                      </p>
                    </div>
                  </li>

                  {/*=======  COMMENTS =========*/}
                  <li class="media margin-l-80">
                    <div class="media-left">
                      {" "}
                      <a href="#">
                        {" "}
                        <img
                          class="media-object"
                          src="images/avatar-2.jpg"
                          alt=""
                        />{" "}
                      </a>{" "}
                    </div>
                    <div class="media-body">
                      <h6 class="media-heading">
                        Jhon Kennadi <span>Aug 22, 2015 at 11:00 pm</span>
                      </h6>
                      <p>
                        Taque ipsa quae abe illo inventore veritatis et quasi
                        architecto beatae vitae dicta sunt explicabo nemosala
                        enim ipsam volupitatem quia voluptas sit aspernatur aut
                        odit aut fugite.
                      </p>
                    </div>
                  </li>

                  {/*=======  COMMENTS =========*/}
                  <li class="media">
                    <div class="media-left">
                      {" "}
                      <a href="#">
                        {" "}
                        <img
                          class="media-object"
                          src="images/avatar-3.jpg"
                          alt=""
                        />{" "}
                      </a>{" "}
                    </div>
                    <div class="media-body">
                      <h6 class="media-heading">
                        Rock Lancer <span>Aug 22, 2015 at 11:00 pm</span>
                      </h6>
                      <p>
                        Taque ipsa quae abe illo inventore veritatis et quasi
                        architecto beatae vitae dicta sunt explicabo nemosala
                        enim ipsam volupitatem quia voluptas sit aspernatur aut
                        odit aut fugite.
                      </p>
                    </div>
                  </li>
                </ul>

                {/*=======  LEAVE COMMENTS =========*/}
                <h4 class="text-uppercase">leave a comment</h4>
                <form>
                  <div class="row">
                    <div class="col-md-12">
                      <ul class="row">
                        <li class="col-sm-6">
                          <label>
                            <input
                              type="text"
                              class="form-control"
                              name="name"
                              placeholder="Name"
                            />
                          </label>
                        </li>
                        <li class="col-sm-6">
                          <label>
                            <input
                              type="text"
                              class="form-control"
                              name="name"
                              placeholder="Email"
                            />
                          </label>
                        </li>
                        <li class="col-sm-6">
                          <label>
                            <input
                              type="text"
                              class="form-control"
                              name="name"
                              placeholder=" phone number"
                            />
                          </label>
                        </li>
                        <li class="col-sm-6">
                          <label>
                            <input
                              type="text"
                              class="form-control"
                              name="name"
                              placeholder="Subject"
                            />
                          </label>
                        </li>
                      </ul>
                    </div>

                    <div class="col-md-12">
                      <ul class="row">
                        <li class="col-sm-12">
                          <label>
                            <textarea
                              class="form-control"
                              placeholder="COMMENTS"
                            ></textarea>
                          </label>
                        </li>
                        <li class="col-sm-12">
                          <button type="submit" class="btn">
                            post comment{" "}
                          </button>
                        </li>
                      </ul>
                    </div>
                  </div>
                </form>
              </div>
            </div>

            {/*======= SIDE BAR =========*/}
            {/*======= SIDE BAR =========*/}
            <div class="col-sm-3">
              <div class="side-bar">
                {/*======= CATEGORIES =========*/}
                <div class="cate">
                  <h5>Categories</h5>
                  <hr />
                  <ul>
                    <li>
                      <a href="#.">
                        Photography <span>(25)</span>
                      </a>
                    </li>
                    <li>
                      <a href="#.">
                        Design <span>(12)</span>
                      </a>
                    </li>
                    <li>
                      <a href="#.">
                        Music <span>(18)</span>
                      </a>
                    </li>
                    <li>
                      <a href="#.">
                        Fashion <span>(35)</span>
                      </a>
                    </li>
                    <li>
                      <a href="#.">
                        Photoshop <span>(24)</span>
                      </a>
                    </li>
                    <li>
                      <a href="#.">
                        Articles <span>(15)</span>
                      </a>
                    </li>
                    <li>
                      <a href="#.">
                        Video <span>(05)</span>
                      </a>
                    </li>
                  </ul>
                </div>

                {/*======= PAPULAR POST =========*/}
                <div class="papu-post margin-t-40">
                  <h5>Popular Post</h5>
                  <hr />
                  <ul>
                    <li class="media">
                      <div class="media-left">
                        {" "}
                        <a href="#">
                          {" "}
                          <img
                            class="media-object"
                            src="images/about-img-1.jpg"
                            alt=""
                          />
                        </a>{" "}
                      </div>
                      <div class="media-body">
                        {" "}
                        <a class="media-heading" href="#.">
                          Were gonna pay a call a boldly go where no{" "}
                        </a>{" "}
                        <span>Aug 19, 2015</span>{" "}
                      </div>
                    </li>
                    <li class="media">
                      <div class="media-left">
                        {" "}
                        <a href="#">
                          {" "}
                          <img
                            class="media-object"
                            src="images/about-img-2.jpg"
                            alt=""
                          />
                        </a>{" "}
                      </div>
                      <div class="media-body">
                        {" "}
                        <a class="media-heading" href="#.">
                          So lets make the most is beautiful day{" "}
                        </a>{" "}
                        <span>Aug 19, 2015</span>{" "}
                      </div>
                    </li>
                    <li class="media">
                      <div class="media-left">
                        {" "}
                        <a href="#">
                          {" "}
                          <img
                            class="media-object"
                            src="images/about-img-3.jpg"
                            alt=""
                          />
                        </a>{" "}
                      </div>
                      <div class="media-body">
                        {" "}
                        <a class="media-heading" href="#.">
                          We're gona make dreams comes true{" "}
                        </a>{" "}
                        <span>Aug 19, 2015</span>{" "}
                      </div>
                    </li>
                  </ul>
                </div>

                {/*======= ARCHIVES =========*/}
                <div class="cate margin-t-40">
                  <h5>Archives</h5>
                  <hr />
                  <ul>
                    <li>
                      <a href="#.">
                        FEBRUARY 2015 <span>(10)</span>
                      </a>
                    </li>
                    <li>
                      <a href="#.">
                        March 2015 <span>(13)</span>
                      </a>
                    </li>
                    <li>
                      <a href="#.">
                        APRIL 2015 <span>(12)</span>
                      </a>
                    </li>
                    <li>
                      <a href="#.">
                        MAY 2015 <span>(05)</span>
                      </a>
                    </li>
                  </ul>
                </div>

                {/*======= TAGS =========*/}
                <div class="tags margin-t-40">
                  <h5>TAGS</h5>
                  <hr />
                  <ul>
                    <li>
                      <a href="#.">Amazing </a>
                    </li>
                    <li>
                      <a href="#.">Envato </a>
                    </li>
                    <li>
                      <a href="#.">Themes </a>
                    </li>
                    <li>
                      <a href="#.">Clean </a>
                    </li>
                    <li>
                      <a href="#.">Responsiveness </a>
                    </li>
                    <li>
                      <a href="#.">SEO </a>
                    </li>
                    <li>
                      <a href="#.">Mobile </a>
                    </li>
                    <li>
                      <a href="#.">IOS </a>
                    </li>
                    <li>
                      <a href="#.">Flat </a>
                    </li>
                    <li>
                      <a href="#.">Design </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/*======= clients-logo =========*/}
        <section class="sectoion-100px promo">
          <div class="container">
            <div class="position-center-center">
              <h5>Do you want to discuss with us?</h5>
              <a href="#." class="btn">
                CONTACT US
              </a>{" "}
            </div>
          </div>
        </section>

        {/*======= FOOTER UP =========*/}
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
      </div>
    </div>
  );
};

export default BlogDetail;
