import React from "react";
import { Paper, Typography, Box } from "@mui/material";
import { FaCheckCircle, FaShieldAlt, FaHeadset, FaUsers } from "react-icons/fa";

const reasons = [
  {
    title: "Empresa acreditada",
    description:
      "Somos una empresa mexicana plenamente establecida, contamos con una infraestructura robusta y humana que respalda nuestro compromiso con la excelencia y la confiabilidad.",
    icon: <FaCheckCircle size={50} color="#fa4729" />, 
  },
  {
    title: "Garantía al 100%",
    description:
      "Confiamos plenamente en nuestras capacidades y en los valores éticos y profesionales que guían nuestro trabajo, asegurando resultados que cumplen con los más altos estándares de excelencia.",
    icon: <FaShieldAlt size={50} color="#fa4729" />, 
  },
  {
    title: "Atención personalizada",
    description:
      "¡Nunca estará solo! Le acompañamos en cada etapa de su proyecto, garantizando un soporte continuo y dedicado desde el inicio hasta la finalización.",
    icon: <FaHeadset size={50} color="#fa4729" />, 
  },
  {
    title: "Colaboradores calificados",
    description:
      "Contamos con un equipo élite de profesionales, constantemente capacitados y alineados con las más avanzadas tendencias globales, para asegurar resultados excepcionales en cada proyecto.",
    icon: <FaUsers size={50} color="#fa4729" />, 
  },
];

export default function Process() {
  return (
    <div className="timeline-section section-padding pt-60 pb-60" style={{ maxWidth: "100vw", overflow: "hidden" }}>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-xl-6 col-lg-6">
            <div className="section-title">
              <h6>¿Por qué elegirnos?</h6>
              <h2>Razones que nos diferencian</h2>
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-center" style={{ display: "flex", flexWrap: "nowrap", justifyContent: "center", gap: "20px", overflowX: "auto" }}>
          {reasons.map((reason, index) => (
            <Paper
              key={index}
              elevation={4}
              sx={{
                padding: "15px",
                textAlign: "center",
                backgroundColor: "white",
                borderRadius: "10px",
                transition: "transform 0.3s",
                border: "1px solid rgba(255, 255, 255, 0.2)",
                width: "270px",
                height: "270px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                alignItems: "center",
                "&:hover": { transform: "scale(1.05)" },
                border: ".5px solid #0B0D26",
              }}
            >
              {/* Ícono */}
              <Box>{reason.icon}</Box>
              {/* Título */}
              <Typography variant="h6" sx={{ fontWeight: "bold", mt: 2 }}>
                {reason.title}
              </Typography>
              {/* Descripción */}
              <Typography variant="body2" sx={{ mt: 1, color: "#333" }}>
                {reason.description}
              </Typography>
            </Paper>
          ))}
        </div>
      </div>
    </div>
  );
}
