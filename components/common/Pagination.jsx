"use client";
import React from "react";

export default function Pagination({ currentPage, totalPages, onPageChange }) {
  const handlePageClick = (page) => {
    if (page >= 1 && page <= totalPages) {
      onPageChange(page);
    }
  };

  return (
    <ul className="pagination">
      <li className="page-item">
        <a
          className="page-link"
          onClick={() => handlePageClick(currentPage - 1)}
        >
          <i className="las la-angle-left" />
        </a>
      </li>
      {Array.from({ length: totalPages }, (_, index) => (
        <li
          key={index + 1}
          className={`page-item ${currentPage === index + 1 ? "active" : ""}`}
        >
          <a
            className="page-link"
            onClick={() => handlePageClick(index + 1)}
          >
            {index + 1}
          </a>
        </li>
      ))}
      <li className="page-item">
        <a
          className="page-link"
          onClick={() => handlePageClick(currentPage + 1)}
        >
          <i className="las la-angle-right" />
        </a>
      </li>
    </ul>
  );
}
