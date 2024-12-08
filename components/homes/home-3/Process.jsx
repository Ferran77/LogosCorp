import React from "react";
import Image from "next/image";
export default function Process() {
  return (
    <div className="process-section section-padding">
      <div className="container">
        <div className="row">
          <div className="row justify-content-center">
            <div className="col-xl-8 text-center">
              <div className="section-title">
                <h6>What We Offer</h6>
                <h2>Working Process in 3 Steps</h2>
              </div>
            </div>
          </div>
        </div>
        <div className="row gx-5 justify-content-center">
          <nav>
            <div
              className="nav project-list justify-content-center"
              role="tablist"
            >
              <button
                className="nav-link active"
                id="discovery-tab"
                data-bs-toggle="tab"
                data-bs-target="#discovery"
                type="button"
                role="tab"
                aria-controls="discovery"
                aria-selected="false"
              >
                Discover
              </button>
              <button
                className="nav-link"
                id="design-tab"
                data-bs-toggle="tab"
                data-bs-target="#design"
                type="button"
                role="tab"
                aria-controls="design"
                aria-selected="false"
              >
                Design
              </button>
              <button
                className="nav-link"
                id="implementation-tab"
                data-bs-toggle="tab"
                data-bs-target="#implementation"
                type="button"
                role="tab"
                aria-controls="implementation"
                aria-selected="false"
              >
                Implementation
              </button>
            </div>
          </nav>
          <div className="tab-content mt-60" id="nav-tabContent">
            <div
              className="tab-pane fade show active"
              id="discovery"
              aria-labelledby="discovery-tab"
              tabIndex={0}
            >
              <div className="row align-items-center">
                <div className="col-xl-6 col-lg-6 col-md-6">
                  <div className="process-content-wrap">
                    <div className="section-title">
                      <h6>Step 1</h6>
                      <h2>Meeting clients &amp; consultancy</h2>
                    </div>
                    <p>
                      Dicta sunt explicabo. Nemo enim ipsam voluptatem quia
                      voluptas sit aspernatur aut odit aut fugit sed quia.
                    </p>
                    <div className="theme-btn mt-30">Read More</div>
                  </div>
                </div>
                <div className="col-xl-6 col-lg-6 col-md-6">
                  <div className="process-bg-wrap">
                    <Image
                      className="height-auto"
                      alt=""
                      src="/assets/img/process/1-1.jpg"
                      width={1920}
                      height={1416}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div
              className="tab-pane fade show"
              id="design"
              aria-labelledby="design-tab"
              tabIndex={0}
            >
              <div className="row align-items-center">
                <div className="col-xl-6 col-lg-6 col-md-6">
                  <div className="process-content-wrap">
                    <div className="section-title">
                      <h6>Step 2</h6>
                      <h2>Testing product material &amp; prices</h2>
                    </div>
                    <p>
                      Dicta sunt explicabo. Nemo enim ipsam voluptatem quia
                      voluptas sit aspernatur aut odit aut fugit sed quia.
                    </p>
                    <div className="theme-btn mt-30">Read More</div>
                  </div>
                </div>
                <div className="col-xl-6 col-lg-6 col-md-6">
                  <div className="process-bg-wrap">
                    <Image
                      className="height-auto"
                      alt=""
                      src="/assets/img/process/1-2.jpg"
                      width={1920}
                      height={1416}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div
              className="tab-pane fade show"
              id="implementation"
              aria-labelledby="implementation"
              tabIndex={0}
            >
              <div className="row align-items-center">
                <div className="col-xl-6 col-lg-6 col-md-6">
                  <div className="process-content-wrap">
                    <div className="section-title">
                      <h6>Step 3</h6>
                      <h2>Creating best products ever</h2>
                    </div>
                    <p>
                      Dicta sunt explicabo. Nemo enim ipsam voluptatem quia
                      voluptas sit aspernatur aut odit aut fugit sed quia.
                    </p>
                    <div className="theme-btn mt-30">Read More</div>
                  </div>
                </div>
                <div className="col-xl-6 col-lg-6 col-md-6">
                  <div className="process-bg-wrap">
                    <Image
                      className="height-auto"
                      alt=""
                      src="/assets/img/process/1-3.jpg"
                      width={1920}
                      height={1416}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
