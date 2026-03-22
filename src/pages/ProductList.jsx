import { useContext, useEffect, useMemo, useRef, useState } from "react";

import ProductCard from "../components/ProductCard";
import { ThemeContext } from "../context/themeContextValue";
import Sidebar from '../components/Sidebar';
import SearchBar from "../components/SearchBar";
import FilterPanel from "../components/FilterPanel";
import SortDropdown from "../components/SortDropdown";
import SkeletonCard from "../components/SkeletonCard";
import CompareTable from "../components/CompareTable";

const ProductList = () => {

    const { darkMode } = useContext(ThemeContext);
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("all");
    const [selectedPrice, setSelectedPrice] = useState("all");
    const [sortType, setSortType] = useState("default");
    const [visibleCount, setVisibleCount] = useState(6);
    const [isLoadingMore, setIsLoadingMore] = useState(false);
    const [comparedProducts, setComparedProducts] = useState([]);
    const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
    const observerRef = useRef(null);

    const closeMobileFilters = () => setMobileFiltersOpen(false);

    useEffect(() => {
      if (!mobileFiltersOpen) return;
      const onKey = (e) => {
        if (e.key === "Escape") closeMobileFilters();
      };
      const prevOverflow = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", onKey);
      return () => {
        document.body.style.overflow = prevOverflow;
        window.removeEventListener("keydown", onKey);
      };
    }, [mobileFiltersOpen]);


    useEffect(() => {
        fetch("http://localhost:5000/api/products")
        .then((res) => res.json())
        .then((data) => {
            setProducts(data);
            setLoading(false);
        })
        .catch((error) => {
            console.error("API Fetch Error:", error);
            setLoading(false);
        });
    }, []);
    
    const categories = useMemo(
      () => [...new Set(products.map((product) => product.category))],
      [products]
    );

    const withinPriceRange = (price) => {
        if (selectedPrice === "all") return true;
        if (selectedPrice === "1000001-above") return price >= 1000001;

        const [min, max] = selectedPrice.split("-").map(Number);
        return price >= min && price <= max;
    };

    // Derived filtering keeps source product data untouched.
    const filteredProducts = products.filter((product) => {
        const searchMatch = product.name.toLowerCase().includes(searchQuery.toLowerCase().trim());
        const categoryMatch = selectedCategory === "all" || product.category === selectedCategory;
        const priceMatch = withinPriceRange(product.price);

        return searchMatch && categoryMatch && priceMatch;
    });

    const sortedProducts = [...filteredProducts].sort((a, b) => {
        if (sortType === "price-asc") return a.price - b.price;
        if (sortType === "price-desc") return b.price - a.price;
        if (sortType === "name-asc") return a.name.localeCompare(b.name);
        if (sortType === "rating-desc") return (b.rating || 0) - (a.rating || 0);
        return 0;
    });
    const visibleProducts = sortedProducts.slice(0, visibleCount);

    const handleLoadMore = () => {
      if (isLoadingMore || visibleCount >= sortedProducts.length) return;
      setIsLoadingMore(true);
      setTimeout(() => {
        setVisibleCount((prev) => prev + 4);
        setIsLoadingMore(false);
      }, 450);
    };

    useEffect(() => {
      setVisibleCount(6);
    }, [searchQuery, selectedCategory, selectedPrice, sortType]);

    useEffect(() => {
      const observer = new IntersectionObserver(
        (entries) => {
          const [entry] = entries;
          if (entry.isIntersecting) handleLoadMore();
        },
        { threshold: 0.2 }
      );
      if (observerRef.current) observer.observe(observerRef.current);
      return () => observer.disconnect();
    }, [visibleCount, sortedProducts.length, isLoadingMore]);

    const handleToggleCompare = (targetProduct) => {
      setComparedProducts((prev) => {
        const exists = prev.some((product) => product.id === targetProduct.id);
        if (exists) return prev.filter((product) => product.id !== targetProduct.id);
        if (prev.length >= 4) return prev;
        return [...prev, targetProduct];
      });
    };

    const handleViewedProduct = (product) => {
      const saved = JSON.parse(localStorage.getItem("recentlyViewed") || "[]");
      const deDuplicated = saved.filter((item) => item.id !== product.id);
      const updated = [product, ...deDuplicated].slice(0, 8);
      localStorage.setItem("recentlyViewed", JSON.stringify(updated));
    };

    if (loading) {
      return (
        <div className="container">
          <div className="row">
            {Array.from({ length: 8 }).map((_, index) => (
              <div className="col-lg-3 col-md-4 col-sm-6 mb-4" key={index}>
                <SkeletonCard />
              </div>
            ))}
          </div>
        </div>
      );
    }

    const filterControls = (
      <>
        <Sidebar
          categories={categories}
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
        />
        <FilterPanel
          categories={categories}
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
          selectedPrice={selectedPrice}
          onPriceChange={setSelectedPrice}
        />
      </>
    );

    return (
        <>
        <div className="container">
            <div className="row">

            {/* Sidebar — desktop / tablet md+ only */}
            <div className="col-lg-2 col-md-3 mb-4 d-none d-md-block">
                {filterControls}
            </div>

            {/* Products */}
            <div className="col-12 col-md-9 col-lg-10">
                <div className="d-flex flex-column flex-md-row align-items-stretch align-items-md-center justify-content-md-between gap-2 gap-md-3 mb-3">
                    <div className="d-flex align-items-center justify-content-between gap-3 min-w-0 w-100 w-md-auto">
                      <h2 className="mb-0 flex-grow-1 min-w-0 pe-1" style={{ wordBreak: "break-word" }}>
                        All Products
                      </h2>
                      <button
                        type="button"
                        className="btn btn-outline-secondary d-md-none flex-shrink-0"
                        aria-expanded={mobileFiltersOpen}
                        aria-controls="product-filters-drawer"
                        onClick={() => setMobileFiltersOpen(true)}
                      >
                        <span className="visually-hidden">Open filters menu</span>
                        <i className="fa fa-bars" aria-hidden="true"></i>
                        <span className="d-none d-sm-inline ms-2">Filters</span>
                      </button>
                    </div>
                    <div className="d-flex align-items-center justify-content-start justify-content-md-end w-100 w-md-auto">
                      <SortDropdown value={sortType} onChange={setSortType} />
                    </div>
                </div>

                <div className="mb-3">
                    <SearchBar value={searchQuery} onChange={setSearchQuery} />
                </div>

                <p className="text-muted mb-3">
                    Showing {visibleProducts.length} of {sortedProducts.length} products
                </p>

                <CompareTable products={comparedProducts} />

                <div className="row">
                    {visibleProducts.map((product) => (
                        <div className="col-lg-3 col-md-4 col-sm-6 mb-4" key={product.id}>
                            <ProductCard
                              product={product}
                              onView={handleViewedProduct}
                              onToggleCompare={handleToggleCompare}
                              isCompared={comparedProducts.some((item) => item.id === product.id)}
                              showCompareButton
                            />
                        </div>
                    ))}
                </div>
                <div ref={observerRef} className="text-center py-2">
                  {isLoadingMore && <span className="text-muted">Loading more products...</span>}
                </div>

                {!sortedProducts.length && (
                    <div className="alert alert-secondary">
                        No products matched your current filters.
                    </div>
                )}
            </div>
        </div>
    </div>

    <div
      className={`product-filters-backdrop ${mobileFiltersOpen ? "is-visible" : ""}`}
      onClick={closeMobileFilters}
      role="presentation"
      aria-hidden="true"
    />

    <div
      id="product-filters-drawer"
      className={`product-filters-drawer ${mobileFiltersOpen ? "is-open" : ""}`}
      role="dialog"
      aria-modal="true"
      aria-hidden={!mobileFiltersOpen}
      aria-labelledby="product-filters-drawer-title"
      data-bs-theme={darkMode ? "dark" : "light"}
    >
      <div className="p-3 border-bottom d-flex justify-content-between align-items-center flex-shrink-0">
        <span id="product-filters-drawer-title" className="fw-semibold">
          Categories &amp; filters
        </span>
        <button
          type="button"
          className="btn btn-sm btn-outline-secondary"
          onClick={closeMobileFilters}
          aria-label="Close filters"
        >
          <i className="fa fa-times" aria-hidden="true"></i>
        </button>
      </div>
      <div className="overflow-auto flex-grow-1 p-3">{filterControls}</div>
    </div>
    </>
    );
};

export default ProductList;