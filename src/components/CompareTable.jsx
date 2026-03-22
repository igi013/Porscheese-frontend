const CompareTable = ({ products }) => {
  if (products.length < 2) return null;

  const prices = products.map((product) => product.price);
  const minPrice = Math.min(...prices);

  return (
    <div className="card border-0 shadow-sm mb-4">
      <div className="card-body">
        <h5 className="mb-3">Product Comparison</h5>
        <div className="table-responsive">
          <table className="table align-middle compare-table mb-0">
            <thead>
              <tr>
                <th>Feature</th>
                {products.map((product) => (
                  <th key={product.id}>{product.name}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Price</td>
                {products.map((product) => (
                  <td
                    key={product.id}
                    className={product.price === minPrice ? "compare-highlight" : ""}
                  >
                    P{product.price.toLocaleString()}
                  </td>
                ))}
              </tr>
              <tr>
                <td>Category</td>
                {products.map((product) => (
                  <td key={product.id}>{product.category || "N/A"}</td>
                ))}
              </tr>
              <tr>
                <td>Rating</td>
                {products.map((product) => (
                  <td key={product.id}>{product.rating || 0} / 5</td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default CompareTable;
