import Image from "next/image";
import React from "react";

import BlogSidebar from "./BlogSidebar";
import Comments from "./Comments";
import CommentForm from "./CommentForm";
export default function BlogDetails() {
  return (
    <div className="blog-details-page section-padding">
      <div className="container">
        <div className="row">
          <div className="col-xl-8 col-lg-8 col-12">
            <div className="blog-content-wrap">
              <p>
                <span className="dropcap_style">T</span>here are many variations
                of passages of Lorem Ipsum available, but the majority have
                suffered humour, randomised words which don't look even slightly
                believable. If you are going to passage of Lorem Ipsum, you need
                embarrassing hidden in the middle of text. All the Lorem Ipsum
                Internet tend to repeat predefined chunks as necessary, making
                this the first generator on the Internet. <br />
                <br />
                Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
                aut fugit, sed quia consequuntur magni dolores eos qui ratione
                voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem
                ipsum quia amet, consectetur, adipisci velit, sed quia non
                numquam eius modi tempora incidunt ut labore et dolore magnam
                aliquam voluptatem. Ut enim ad minima veniam,
              </p>
              <div className="blog-quote-wrap">
                <div className="quote-icon">
                  <Image
                    alt=""
                    src="/assets/img/straight-quotes.png"
                    width={32}
                    height={32}
                  />
                </div>
                <div className="blog-quote-text">
                  <p>
                    Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
                    odit aut fugit, sed quia consequuntur doloresvoluptatem
                    sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum
                    quia dolor sit amet,
                  </p>
                  <h6 className="blog-author">
                    Jhone Marko / <span>CEO, Phoenix</span>
                  </h6>
                </div>
              </div>
              <h3 className="mt-20 mb-30">
                Design Solutions For Small &amp; Large Project
              </h3>
              <p>
                Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
                aut fugit, sed quia consequuntur magni dolores eos qui ratione
                voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem
                ipsum quia dolor sit consectetur, adipisci velit, sed quia non
                numquam eius modi tempora incidunt ut labore et dolore magnam
                aliquam voluptatem. Ut enim ad minima veniam, quis nostrum
                exercitationem ullam corporis suscipit laboriosam, <br />
                <br />
                Nor again is there anyone who loves or pursues or desires to
                obtain pain of itself, because it is pain, but because
                occasionally circumstances occur in which toil and pain can
                procure him some great pleasure. To take a trivial example,
                which of us ever undertakes laborious physical exercise,
              </p>
              <div className="row mt-30 mb-30">
                <div className="col-6">
                  <div className="blog-feature-img">
                    <Image
                      alt=""
                      src="/assets/img/blog/blog-details-img-1.jpg"
                      width={1024}
                      height={764}
                      className="height-auto"
                    />
                  </div>
                </div>
                <div className="col-6">
                  <div className="blog-feature-img">
                    <Image
                      alt=""
                      src="/assets/img/blog/blog-details-img-2.jpg"
                      width={1024}
                      height={764}
                      className="height-auto"
                    />
                  </div>
                </div>
              </div>
              <p>
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered humour, randomised words which
                don't look even slightly believable. If you are going to passage
                of Lorem Ipsum, you need embarrassing hidden in the middle of
                text. All the Lorem Ipsum Internet tend to repeat predefined
                chunks as necessary, making this the first generator on the
                Internet.
              </p>
              <div className="row border-top border-bottom pt-30 pb-30 mt-30 mb-30">
                <div className="col-xl-6 col-lg-6 col-md-6">
                  <div className="blog-tag-wrap d-flex align-items-center">
                    <h5>Tags:</h5>
                    <span>Advisor</span>
                    <span>Financials</span>
                  </div>
                </div>
                <div className="col-xl-6 col-lg-6 col-md-6 text-xl-end">
                  <div className="social-icon">
                    <a href="#">
                      <i className="lab la-facebook-f" />
                    </a>
                    <a href="#">
                      <i className="lab la-skype" />
                    </a>
                    <a href="#">
                      <i className="lab la-instagram" />
                    </a>
                    <a href="#">
                      <i className="lab la-linkedin-in" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="pagination-wrap">
                <a href="#">
                  <i className="las la-long-arrow-alt-left" />
                  Previous Post
                </a>
                <a href="#">
                  Next Post
                  <i className="las la-long-arrow-alt-right" />
                </a>
              </div>
            </div>
            <Comments />
            <CommentForm />
          </div>
          <div className="col-xl-4 col-lg-4 col-12">
            <BlogSidebar />
          </div>
        </div>
      </div>
    </div>
  );
}
