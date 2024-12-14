import React from "react";
import Image from "next/image";
import Counter from "./Counter";

export default function Faq() {
  return (
    <div className="faq-section py-8">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <div className="section-title text-center mb-12">
          <h6 className="text-lg text-gray-500 uppercase mb-2">Evolución y actualización constante</h6>
          <h2 className="text-3xl md:text-4xl font-bold leading-tight">
            ¡Nos renovamos continuamente <br />
            para brindarle el mejor servicio!
          </h2>
        </div>

        {/* Counters Section */}
        <div className="flex flex-wrap justify-center gap-8">
          {/* Counter Block 1 */}
          <div className="w-full md:w-1/2 relative">
            {/* Background Image */}
            <div className="relative w-full h-80 md:h-96">
              <Image
                src="/assets/img/counter-bg-1.jpg"
                alt="Background"
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
              {/* Counters */}
              <div className="absolute bottom-4 left-4 flex flex-col gap-4">
                {/* Counter Item 1 */}
                <div className="single-counter-item bg-gray-900 bg-opacity-80 text-white p-4 rounded-md shadow-md">
                  <h6 className="text-sm font-semibold mb-1">Clientes satisfechos</h6>
                  <h1 className="text-2xl font-bold">
                    <Counter max={24} />+
                  </h1>
                  <p className="text-gray-300 text-sm">36 Proyectos concluidos</p>
                </div>
                {/* Counter Item 2 */}
                <div className="single-counter-item bg-blue-600 bg-opacity-80 text-white p-4 rounded-md shadow-md">
                  <h6 className="text-sm font-semibold mb-1">Años de experiencia</h6>
                  <h1 className="text-2xl font-bold">
                    <Counter max={5} />+
                  </h1>
                  <p className="text-gray-300 text-sm">5 Proyectos en proceso</p>
                </div>
              </div>
            </div>
          </div>

          {/* Counter Block 2 */}
          <div className="w-full md:w-1/2 relative">
            {/* Background Image */}
            <div className="relative w-full h-80 md:h-96">
              <Image
                src="/assets/img/counter-bg-2.jpg"
                alt="Background"
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
              {/* Counters */}
              <div className="absolute bottom-4 left-4 flex flex-col gap-4">
                {/* Counter Item 3 */}
                <div className="single-counter-item bg-gray-900 bg-opacity-80 text-white p-4 rounded-md shadow-md">
                  <h6 className="text-sm font-semibold mb-1">Proyectos activos</h6>
                  <h1 className="text-2xl font-bold">
                    <Counter max={12} />+
                  </h1>
                  <p className="text-gray-300 text-sm">En desarrollo</p>
                </div>
                {/* Counter Item 4 */}
                <div className="single-counter-item bg-blue-600 bg-opacity-80 text-white p-4 rounded-md shadow-md">
                  <h6 className="text-sm font-semibold mb-1">Horas trabajadas</h6>
                  <h1 className="text-2xl font-bold">
                    <Counter max={1000} />+
                  </h1>
                  <p className="text-gray-300 text-sm">Dedicación profesional</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
