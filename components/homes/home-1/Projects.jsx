"use client";  // 👈 Esto evita que Next.js intente renderizar en el servidor

import { projects7 } from "@/data/projects";
import React from "react";
import Link from "next/link";
import { Paper, Typography, Box } from "@mui/material";

export default function Projects() {
  return (
    <div id="project-1" className="project-section theme-bg">
      <div className="container-fluid">
        <div className="row">
          {projects7.map((project, index) => {
            const IconComponent = project.icon;  // ✅ Asignamos el icono como un componente

            return (
              <div
                key={index}
                className="col-xl-3 col-lg-3 col-md-6 wow fadeInUp"
                data-wow-delay={project.delay}
              >
                <Link
                  href={`/project-details-right-sidebar/${project.id}`}
                  className="single-project-item"
                >
                  <Paper
                    elevation={3}
                    className="flex flex-col items-center p-6 text-center"
                    sx={{
                      padding: "20px",
                      textAlign: "center",
                      backgroundColor: "white",
                      borderRadius: "10px",
                      transition: "transform 0.3s",
                      "&:hover": { transform: "scale(1.05)" },
                    }}
                  >
                    {/* Ícono superior */}
                    <Box sx={{ color: "#fa4729" }}>
                      <IconComponent sx={{ fontSize: 65 }} />  {/* ✅ Renderizamos el icono correctamente */}
                    </Box>

                    {/* Título */}
                    <Typography variant="h6" sx={{ fontWeight: "bold", mt: 2 }}>
                      {project.title}
                    </Typography>

                    {/* Descripción */}
                    <Typography variant="body2" sx={{ mt: 1, color: "#333" }}>
                      {project.description}
                    </Typography>
                  </Paper>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
