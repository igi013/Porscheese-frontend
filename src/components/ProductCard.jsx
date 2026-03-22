import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";

const ProductCard = ({
    product,
    onView,
    onToggleCompare,
    isCompared = false,
    showCompareButton = false,
}) => {
    //Get addToCart from global context
    const { addToCart } = useContext(CartContext);
    const [wishlisted, setWishlisted] = useState(() => {
        const wishlist = JSON.parse(localStorage.getItem("wishlist") || "[]");
        return wishlist.some((item) => item.id === product.id);
    });

    const toggleWishlist = () => {
        const wishlist = JSON.parse(localStorage.getItem("wishlist") || "[]");
        const exists = wishlist.some((item) => item.id === product.id);

        const updatedWishlist = exists
            ? wishlist.filter((item) => item.id !== product.id)
            : [...wishlist, product];

        localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
        setWishlisted(!exists);
    };

    return (
        <div className="card h-100 shadow-sm product-card-modern">
            {/* Image wrapper for zoom and badge */}
            <div className="product-img-wrapper" onClick={() => onView?.(product)}>
                {/*Sale badge */}
                {product.discount && (
                    <div className="sale-badge">-{product.discount}%</div>
                )}

            <img 
                src={product.image}
                className="card-img-top product-img"
                alt={product.name}
                />
            </div>
        
        <div className="card-body d-flex flex-column">
            <h6 className="card-title" onClick={() => onView?.(product)}>{product.name}</h6>
            
            {/* Star rating */}
            <div className="mb-2 text-warning">
                {[...Array(5)].map((star, index) => (
                    <i key={index} className={`fa-star ${index < product.rating ? 'fas' : 'far'} fa`}></i>
                ))}
            </div>
            
            {/*Price section */}
            <div className="mb-2">
                {product.oldPrice && (
                  <span className="text-muted text-decoration-line-through me-2">
                      P{product.oldPrice}
                  </span>
                )}
                <span className="fw-bold text-danger">
                    P{product.price}
                </span>
            </div>

            <button
              className={`btn btn-sm mb-2 ${wishlisted ? "btn-danger" : "btn-outline-danger"}`}
              onClick={toggleWishlist}
            >
              <i className="fa fa-heart me-2"></i>
              {wishlisted ? "Wishlisted" : "Add to Wishlist"}
            </button>

            {showCompareButton && (
              <button
                className={`btn btn-sm mb-2 compare-btn ${isCompared ? "compare-btn-active" : ""}`}
                onClick={() => onToggleCompare?.(product)}
              >
                <i className="fa fa-balance-scale me-2"></i>
                {isCompared ? "Compared" : "Compare"}
              </button>
            )}

            {/* When clicked, send this product to App.jsx */}
            <button className="btn btn-primary mt-auto" onClick={() => addToCart(product)}>
            <i className="fas fa-shopping-cart me-2"></i>
                Pre-Order
            </button>

        </div>
    </div>
    );
};

export default ProductCard;