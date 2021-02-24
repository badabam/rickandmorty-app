export default function Pagination({
  currentPage,
  totalPages,
  onClickBack,
  onClickForward,
}) {
  return (
    <div>
      <button disabled={currentPage === 1} onClick={onClickBack}>
        ←
      </button>
      {currentPage}/{totalPages}
      <button disabled={currentPage === totalPages} onClick={onClickForward}>
        →
      </button>
    </div>
  )
}
