import React from "react";
import styles from "./Pagination.module.css";

interface PaginationProps {
  currentPage: number;
  totalRecords: number;
  recordsPerPage: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalRecords,
  recordsPerPage,
  onPageChange,
}) => {
  const totalPages = Math.ceil(totalRecords / recordsPerPage);

  return (
    <div className={styles.pagination} aria-label="Pagination controls">
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className={`${styles.button} ${styles.previousNext} ${
          currentPage === 1 ? styles.disabled : ""
        }`}
        aria-label="Previous page"
        aria-disabled={currentPage === 1 ? "true" : "false"}
      >
        Previous
      </button>

      <span className={styles.pageInfo}>
        Page {currentPage} of {totalPages}
      </span>

      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className={`${styles.button} ${styles.previousNext} ${
          currentPage === totalPages ? styles.disabled : ""
        }`}
        aria-label="Next page"
        aria-disabled={currentPage === totalPages ? "true" : "false"}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
