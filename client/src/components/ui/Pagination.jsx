const Pagination = ({ currentPage, totalPages, onPageChange }) => (
  <div className="flex space-x-2">
    {Array.from({ length: totalPages }, (_, i) => (
      <button
        key={i}
        onClick={() => onPageChange(i + 1)}
        className={`px-3 py-1 rounded ${
          currentPage === i + 1
            ? "bg-primary text-white"
            : "bg-gray-200 text-gray-700"
        }`}
      >
        {i + 1}
      </button>
    ))}
  </div>
);

export default Pagination;
