"use client";
import Image from "next/image";

export default function DetailsTab({ product }) {
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
                    id="review-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#review"
                    type="button"
                    role="tab"
                    aria-controls="review"
                    aria-selected="false"
                  >
                    Reseñas
                  </button>
                </div>
              </nav>
            </div>
            <div className="tab-content -mb-6" id="nav-tabContent">
              <div
                className="tab-pane fade show active"
                id="description"
                role="tabpanel"
                aria-labelledby="description-tab"
              >
                <div className="pro-tab-descrip">
                {product.description ? (
                    <div
                      dangerouslySetInnerHTML={{
                        __html: product.description
                          .replace(/\n\n/g, "<br /><br />") // Reemplaza dobles saltos de línea
                          .replace(/\n/g, "<br />") || "No hay descripción disponible", // Reemplaza saltos de línea simples
                      }}
                    />
                  ) : (
                    <p>No hay descripción disponible</p>
                  )}
                </div>
                <div className="pro-tab-descrip">
                {product.description ? (
                    <div
                      dangerouslySetInnerHTML={{
                        __html: product.includes
                          .replace(/\n\n/g, "<br /><br />") // Reemplaza dobles saltos de línea
                          .replace(/\n/g, "<br />") || "No hay descripción disponible", // Reemplaza saltos de línea simples
                      }}
                    />
                  ) : (
                    <p>No hay descripción disponible</p>
                  )}
                </div>
                <div className="pro-tab-descrip -mb-10">
                {product.description ? (
                    <div
                      dangerouslySetInnerHTML={{
                        __html: product.requirements
                          .replace(/\n\n/g, "<br /><br />") // Reemplaza dobles saltos de línea
                          .replace(/\n/g, "<br />") || "No hay descripción disponible", // Reemplaza saltos de línea simples
                      }}
                    />
                  ) : (
                    <p>No hay descripción disponible</p>
                  )}
                </div>
              </div>
              <div
                className="tab-pane fade"
                id="review"
                role="tabpanel"
                aria-labelledby="review-tab"
              >
                <div className="pro-tab-review mt-6 -mb-16">
                  <form
                    className="review-form"
                    onSubmit={(e) => e.preventDefault()}
                  >
                    <h3>Envíe su reseña</h3>
                    <p>
                      La dirección de email no será compartida <br /> Todos los
                      campos son requeridos
                    </p>
                    <div className="row">
                      <div className="col-12 mb-3">
                        <textarea required placeholder="Su reseña:" />
                      </div>
                      <div className="col-6 mb-3">
                        <input required type="text" placeholder="Su nombre:" />
                      </div>
                      <div className="col-6 mb-3">
                        <input required type="email" placeholder="Su email:" />
                      </div>
                    </div>
                    <button type="submit" className="theme-btn">
                      <i className="las la-paper-plane" />
                      Enviar
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
