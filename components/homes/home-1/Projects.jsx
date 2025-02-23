"use client"; 

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
            const IconComponent = project.icon;  

            return (
              <div
                key={index}
                className="col-xl-3 col-lg-3 col-md-6 wow fadeInUp"
                data-wow-delay={project.delay}
              >
                <Link
                  href={`/about`}
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
                      border: "1px solid rgba(255, 255, 255, 0.2)",
                      height: "280px", 
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between", 
                      "&:hover":  { transform: "scale(1.05)" },
                      border: ".5px solid #fa4729",
                    }}

                  >
                    {/*superior icon */}
                    <Box sx={{ color: "#fa4729" }}>
                      <IconComponent sx={{ fontSize: 65 }} /> 
                    </Box>

                    {/* title */}
                    <Typography variant="h6" sx={{ fontWeight: "bold", mt: 2 }}>
                      {project.title}
                    </Typography>

                    {/* Description */}
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
