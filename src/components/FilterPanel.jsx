const FilterPanel = ({
  categories,
  selectedCategory,
  onCategoryChange,
  selectedPrice,
  onPriceChange,
}) => {
  return (
    <div className="filter-panel filter-products-card card border-0 shadow-sm mb-4">
      <div className="card-body">
        <h6 className="mb-3">Filter Products</h6>

        <div className="mb-3">
          <label className="form-label">Category</label>
          <select
            className="form-select"
            value={selectedCategory}
            onChange={(event) => onCategoryChange(event.target.value)}
          >
            <option value="all">All Categories</option>
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="form-label">Price Range</label>
          <select
            className="form-select"
            value={selectedPrice}
            onChange={(event) => onPriceChange(event.target.value)}
          >
            <option value="all">All Prices</option>
            <option value="0-200000">0 - 200,000</option>
            <option value="200001-600000">200,001 - 600,000</option>
            <option value="600001-1000000">600,001 - 1,000,000</option>
            <option value="1000001-above">1,000,001 and above</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default FilterPanel;
