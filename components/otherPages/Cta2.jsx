"use client"

import React, { useState } from "react";

export default function Cta2() {
  const [formData, setFormData] = useState({ name: "", phone: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="cta-section section-padding pt-60 pb-60 dark-bg">
      <div className="container">
        <div className="row justify-center">
          <div className="col-xl-6 col-lg-6 col-md-8 text-center">
            <div className="section-title mb-6">
              <h2 className="text-white">Arquitectura nacida del corazón.</h2>
              <p className="text-2xl">Si lo prefiere, nosotros nos comunicamos con usted:</p>
            </div>
            {submitted ? (
              <p className="text-white text-lg">Pronto nos comunicaremos con usted.</p>
            ) : (
              <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-lg">
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                    Nombre
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="phone">
                    Teléfono
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300"
                >
                  Enviar
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
