import React from "react";

const OurBlog = () => {
  return (
    <section class="sectoion-100px our-blog">
      <div class="container">
        {/* Tittle */}
        <div class="tittle">
          <h4>latest from our blog</h4>
          <p>
            He's a demon on wheels. The mate was a mighty sailin' man the
            Skipper brave and sure. Five passengers set sail that day for a
            three hour tour a three hour tour the ship set ground on the shore
            of this uncharted
          </p>
        </div>
        {/* Blog Post */}
        <div class="row">
          {/* Post */}
          <div class="col-md-6">
            <div class="blog-in">
              {/* Post Image */}
              <div class="blog-up-sec">
                {" "}
                <img
                  class="img-responsive"
                  src="/static/images/blog-1.jpg"
                  alt=""
                />
                {/* Post Date */}
                <div class="date-post">
                  {" "}
                  29 <span> AUG</span>{" "}
                  <img src="/static/images/icon-date-post.png" alt="" />{" "}
                </div>
              </div>
              {/* Post Detail */}
              <span>By admin / Agency</span>{" "}
              <a href="#." class="heading">
                {" "}
                Then one day he was shootin' at some food and up through the
                ground{" "}
              </a>
              <p>
                And we'll do it our way yes our way. Make all our dreams come
                true for me and you. Boy the way Glen Miller played. Songs that
                made the hit parade.{" "}
              </p>
            </div>
          </div>
          {/* Post */}
          <div class="col-md-6">
            <div class="blog-in">
              {/* Post Image */}
              <div class="blog-up-sec">
                {" "}
                <img
                  class="img-responsive"
                  src="/static/images/blog-2.jpg"
                  alt=""
                />
                {/* Post Date */}
                <div class="date-post">
                  {" "}
                  29 <span> AUG</span>{" "}
                  <img src="/static/images/icon-date-post.png" alt="" />{" "}
                </div>
              </div>
              {/* Post Detail */}
              <span>By admin / Agency</span>{" "}
              <a href="#." class="heading">
                {" "}
                Then one day he was shootin' at some food and up through the
                ground{" "}
              </a>
              <p>
                And we'll do it our way yes our way. Make all our dreams come
                true for me and you. Boy the way Glen Miller played. Songs that
                made the hit parade.{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurBlog;
