"use client";

import React, { useEffect, useRef } from "react";

const VirtualTour = () => {
    const tourContainerRef = useRef(null);

    useEffect(() => {
        const loadTour = async () => {
            try {
                // Fetch el archivo HTML del tour virtual
                const response = await fetch("/tour/index.html");
                const htmlText = await response.text();

                if (tourContainerRef.current) {
                    // Insertar el HTML en el contenedor
                    tourContainerRef.current.innerHTML = htmlText;

                    // Reinsertar y ejecutar scripts manualmente
                    const scripts = tourContainerRef.current.querySelectorAll("script");
                    scripts.forEach((oldScript) => {
                        const newScript = document.createElement("script");
                        if (oldScript.src) {
                            newScript.src = oldScript.src; // Cargar scripts externos
                        } else {
                            newScript.textContent = oldScript.textContent; // Ejecutar scripts inline
                        }
                        newScript.async = false;
                        oldScript.replaceWith(newScript);
                    });
                }
            } catch (error) {
                console.error("Error al cargar el tour virtual:", error);
            }
        };

        loadTour();
    }, []);

    return (
        <div className="w-full h-[550px] md:h-[450px] xs:h-[350px] relative overflow-hidden">
            <div
                ref={tourContainerRef}
                className="w-full h-full flex items-center justify-center text-gray-500"
            >
                Loading virtual tour. Please wait...
            </div>
        </div>
    );
};

export default VirtualTour;
