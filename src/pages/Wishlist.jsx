import { useState } from "react";
import ProductCard from "../components/ProductCard";

const Wishlist = () => {
  const [wishlistItems] = useState(() =>
    JSON.parse(localStorage.getItem("wishlist") || "[]")
  );

  return (
    <section className="container">
      <div className="d-flex justify-content-between align-items-center flex-wrap gap-2 mb-3">
        <h2 className="mb-0">Your Wishlist</h2>
        <span className="badge bg-dark">{wishlistItems.length} saved</span>
      </div>

      {wishlistItems.length === 0 ? (
        <div className="card border-0 shadow-sm">
          <div className="card-body">
            <p className="mb-0">
              Your wishlist is empty. Add products from the product cards.
            </p>
          </div>
        </div>
      ) : (
        <div className="row">
          {wishlistItems.map((product) => (
            <div className="col-xl-3 col-lg-4 col-md-6 mb-4" key={product.id}>
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default Wishlist;
