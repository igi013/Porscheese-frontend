const SearchBar = ({ value, onChange }) => {
  return (
    <div className="search-bar-wrap">
      <i className="fa fa-search search-icon" aria-hidden="true"></i>
      <input
        type="search"
        className="form-control search-input"
        placeholder="Search by model name..."
        value={value}
        onChange={(event) => onChange(event.target.value)}
        aria-label="Search products"
      />
    </div>
  );
};

export default SearchBar;
