"use client";
import React, { useState } from "react";

export default function Pagination() {
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageClick = (page) => {
    if (page >= 1 && page <= 3) {
      setCurrentPage(page);
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
      <li className={`page-item ${currentPage === 1 ? "active" : ""}`}>
        <a className="page-link" onClick={() => handlePageClick(1)}>
          1
        </a>
      </li>
      <li
        className={`page-item ${currentPage === 2 ? "active" : ""}`}
        aria-current="page"
      >
        <a className="page-link" onClick={() => handlePageClick(2)}>
          2
        </a>
      </li>
      <li className={`page-item ${currentPage === 3 ? "active" : ""}`}>
        <a className="page-link" onClick={() => handlePageClick(3)}>
          3
        </a>
      </li>
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
