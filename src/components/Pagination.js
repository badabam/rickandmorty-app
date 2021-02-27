export default function Pagination({
  currentPage,
  totalPages,
  onPrevious,
  onNext,
}) {
  return (
    <div>
      <button disabled={currentPage === 1} onClick={onPrevious}>
        ←
      </button>
      {currentPage}/{totalPages}
      <button disabled={currentPage === totalPages} onClick={onNext}>
        →
      </button>
    </div>
  )
}
