const SortDropdown = ({ value, onChange }) => {
  return (
    <div className="d-flex flex-column flex-sm-row align-items-stretch align-items-sm-center gap-2 w-100 w-md-auto">
      <label htmlFor="sort-products" className="mb-0 fw-semibold flex-shrink-0">
        Sort by:
      </label>
      <select
        id="sort-products"
        className="form-select sort-dropdown-select"
        value={value}
        onChange={(event) => onChange(event.target.value)}
      >
        <option value="default">Default</option>
        <option value="price-asc">Price Low to High</option>
        <option value="price-desc">Price High to Low</option>
        <option value="name-asc">Name A-Z</option>
        <option value="rating-desc">Rating</option>
      </select>
    </div>
  );
};

export default SortDropdown;
