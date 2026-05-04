import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'
import './applications.css'

function Pagination({ currentPage, totalPages, onPageChange }) {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1)

  return (
    <div className="pagination-container">
      <div className="pagination-info">
        <span>Showing 6 of 24 applications</span>
      </div>

      <div className="pagination-controls">
        <button
          className={`pagination-btn ${currentPage === 1 ? 'disabled' : ''}`}
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
          aria-label="Previous page"
        >
          <FiChevronLeft />
          Previous
        </button>

        <div className="pagination-pages">
          {pages.map(page => (
            <button
              key={page}
              className={`pagination-page ${currentPage === page ? 'active' : ''}`}
              onClick={() => onPageChange(page)}
              aria-label={`Page ${page}`}
              aria-current={currentPage === page ? 'page' : undefined}
            >
              {page}
            </button>
          ))}
        </div>

        <button
          className={`pagination-btn ${currentPage === totalPages ? 'disabled' : ''}`}
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          aria-label="Next page"
        >
          Next
          <FiChevronRight />
        </button>
      </div>
    </div>
  )
}

export default Pagination
