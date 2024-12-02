import React from "react";
import "./Pagination.css";

function pagiNation({ setPage, currentPage }) {
  return (
    <div className="page-nation-container">
      <button
        style={{
          backgroundColor: currentPage === 1 ? "#ffffff" : "#ffffff",
          color: currentPage === 1 ? "#ffffff" : "#6b7280",
          border: currentPage === 1 ? "#ffffff" : "",
        }}
        className="page-nation-btn"
        disabled={currentPage === 1}
        onClick={() => {
          setPage(currentPage - 1);
        }}
      >
        {"<"}
      </button>
      <button
        style={{
          backgroundColor: currentPage === 1 ? "#2f80ed" : "#ffffff",
          color: currentPage === 1 ? "#f9fafb" : "#6b7280",
        }}
        className="page-nation-btn"
        onClick={() => {
          setPage(1);
        }}
      >
        1
      </button>
      <button
        style={{
          backgroundColor: currentPage === 2 ? "#2f80ed" : "#ffffff",
          color: currentPage === 2 ? "#f9fafb" : "#6b7280",
        }}
        className="page-nation-btn"
        onClick={() => {
          setPage(2);
        }}
      >
        2
      </button>
      <button
        style={{
          backgroundColor: currentPage === 3 ? "#2f80ed" : "#ffffff",
          color: currentPage === 3 ? "#f9fafb" : "#6b7280",
        }}
        className="page-nation-btn"
        onClick={() => {
          setPage(3);
        }}
      >
        3
      </button>
      <button
        style={{
          backgroundColor: currentPage === 4 ? "#2f80ed" : "#ffffff",
          color: currentPage === 4 ? "#f9fafb" : "#6b7280",
        }}
        className="page-nation-btn"
        onClick={() => {
          setPage(4);
        }}
      >
        4
      </button>
      <button
        style={{
          backgroundColor: currentPage === 5 ? "#2f80ed" : "#ffffff",
          color: currentPage === 5 ? "#f9fafb" : "#6b7280",
        }}
        className="page-nation-btn"
        onClick={() => {
          setPage(5);
        }}
      >
        5
      </button>
      <button
        className="page-nation-btn"
        onClick={() => {
          setPage(currentPage + 1);
        }}
      >
        {">"}
      </button>
    </div>
  );
}

export default pagiNation;
