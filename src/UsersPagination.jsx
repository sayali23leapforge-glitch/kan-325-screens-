function UsersPagination({ currentPage, totalPages, onPageChange, totalEntries, itemsPerPage }) {
  const startEntry = (currentPage - 1) * itemsPerPage + 1
  const endEntry = Math.min(currentPage * itemsPerPage, totalEntries)

  const renderPageNumbers = () => {
    const pages = []
    const maxPagesToShow = 4

    if (totalPages <= maxPagesToShow + 1) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i)
      }
    } else {
      for (let i = 1; i <= maxPagesToShow; i++) {
        pages.push(i)
      }
      if (currentPage > maxPagesToShow + 1) {
        pages.push('...')
      }
      if (currentPage > maxPagesToShow) {
        pages.push(totalPages)
      }
    }

    return pages
  }

  return (
    <div className="users-pagination">
      <div className="pagination-info">
        Showing {startEntry} to {endEntry} of {totalEntries} users
      </div>

      <div className="pagination-controls">
        <button
          className="pagination-btn"
          disabled={currentPage === 1}
          onClick={() => onPageChange(currentPage - 1)}
        >
          ←
        </button>

        {renderPageNumbers().map((page, idx) => (
          <button
            key={idx}
            className={`pagination-page-btn ${page === currentPage ? 'active' : ''} ${page === '...' ? 'ellipsis' : ''}`}
            disabled={page === '...'}
            onClick={() => typeof page === 'number' && onPageChange(page)}
          >
            {page}
          </button>
        ))}

        <button
          className="pagination-btn"
          disabled={currentPage === totalPages}
          onClick={() => onPageChange(currentPage + 1)}
        >
          →
        </button>
      </div>
    </div>
  )
}

export default UsersPagination
