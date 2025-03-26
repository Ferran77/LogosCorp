"use client";
import Image from "next/image";
export default function DetailsTab() {
  return (
    <div className="products-details-tab section-padding pt-0">
      <div className="container">
        <div className="row">
          <div className="col-xl-12">
            <div className="product-details-tab-menu">
              <nav>
                <div className="nav nav-tabs" id="nav-tab" role="tablist">
                  <button
                    className="nav-link active"
                    id="description-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#description"
                    type="button"
                    role="tab"
                    aria-controls="description"
                    aria-selected="true"
                  >
                    Descripción
                  </button>
                  <button
                    className="nav-link"
                    id="additional_info-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#additional_info"
                    type="button"
                    role="tab"
                    aria-controls="additional_info"
                    aria-selected="false"
                  >
                    Información Adicional
                  </button>
                  {/* <button
                    className="nav-link"
                    id="review-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#review"
                    type="button"
                    role="tab"
                    aria-controls="review"
                    aria-selected="false"
                  >
                    Review
                  </button> */}
                </div>
              </nav>
            </div>
            <div className="tab-content" id="nav-tabContent">
              <div
                className="tab-pane fade show active"
                id="description"
                role="tabpanel"
                aria-labelledby="description-tab"
              >
                <div className="pro-tab-descrip">
                  <p>
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco
                    laboris. Lorem ipsum dolor sit amet, consecteturadipiscing
                    elit, sed do eiusmod temp incid idunt ut labore et dolore
                    magna aliqua. nisi ut aliquip ex ea commodo consat. Duis
                    aute irure dolor in reprehenderit n volup tate velit esse
                    cillum dolore euy elit ale ruin irure dolor in. Adipisci
                    accusata interpretaris nec ea. In etiam neglegentur has, his
                    iudico vidisse feugiat id. An nibh homero pri, mutat feugait
                    salutandi id mei, mentitum patrioque sea id. Erat minimum
                    vulputate eu quo. Lorem ipsum dolor sit amet, ne quando
                    feugait eos, nisl inciderint per et. <br />
                    <br />
                  </p>
                </div>
              </div>
              <div
                className="tab-pane fade"
                id="additional_info"
                role="tabpanel"
                aria-labelledby="additional_info-tab"
              >
                <div className="pro-tab-addition-info">
                  <h6>Product code:</h6>
                  <p>
                    <span>ATN-24578</span>
                  </p>
                  <h6>Weight :</h6>
                  <p>
                    <span>2.5 KG</span>
                  </p>
                  <h6>Dimension:</h6>
                  <p>
                    <span>30 x 2 x 20 CM</span>
                  </p>
                </div>
              </div>
              <div
                className="tab-pane fade"
                id="review"
                role="tabpanel"
                aria-labelledby="review-tab"
              >
                <div className="pro-tab-review">
                  <ul className="review-list">
                    <li className="review-item">
                      <div className="reviewer-img">
                        <a href="#">
                          <Image
                            alt="reviewer-1"
                            src="/assets/img/testimonial/author-1.jpg"
                            className="height-auto"
                            width={120}
                            height={120}
                          />
                        </a>
                      </div>
                      <div className="reviewer-descrip">
                        <div className="reviewer-meta">
                          <ul className="reviewer-rating">
                            <li>
                              <i className="las la-star active" />
                            </li>
                            <li>
                              <i className="las la-star active" />
                            </li>
                            <li>
                              <i className="las la-star active" />
                            </li>
                            <li>
                              <i className="las la-star active" />
                            </li>
                            <li>
                              <i className="las la-star active" />
                            </li>
                          </ul>
                          <a href="#">
                            Admin <span>02 February 2023</span>
                          </a>
                        </div>
                        <div className="reviewer-quote">
                          <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Fugiat quae perferendis nostrum id ad ullam
                            perspiciatis eum delectus aut nisi.
                          </p>
                        </div>
                      </div>
                    </li>
                  </ul>
                  <form
                    className="review-form"
                    onSubmit={(e) => e.preventDefault()}
                  >
                    <h3>Add Your Review</h3>
                    <p>
                      Your email address will not be published. Required fields
                      are marked *
                    </p>
                    <div className="row">
                      <div className="col-12 mb-3">
                        <textarea
                          required
                          placeholder="Your Review"
                          defaultValue={""}
                        />
                      </div>
                      <div className="col-6 mb-3">
                        <input required type="text" placeholder="Your name" />
                      </div>
                      <div className="col-6 mb-3">
                        <input required type="email" placeholder="Your email" />
                      </div>
                    </div>
                    <button type="submit" className="theme-btn">
                      <i className="las la-paper-plane" />
                      Submit
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
