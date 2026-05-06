function Pagination({ page, canGoNext, onPrev, onNext }) {
  return (
    <nav className="pagination" aria-label="Meal pages">
      <button type="button" onClick={onPrev} disabled={page === 1}>
        Previous
      </button>
      <span>Page {page}</span>
      <button type="button" onClick={onNext} disabled={!canGoNext}>
        Next
      </button>
    </nav>
  )
}

export default Pagination