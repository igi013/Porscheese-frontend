import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import { ThemeContext } from '../context/themeContextValue';

const Navbar = () => {

    const { cart } = useContext(CartContext);
    const { darkMode, toggleTheme } = useContext(ThemeContext);
    const totalQty = cart.reduce((sum, item) => sum + item.qty, 0);

    return (
        <>
        {/* Desktop Navbar */}
        <nav className="navbar navbar-expand-lg sticky-top shadow-sm d-none d-lg-block nav-modern" data-bs-theme={darkMode ? "dark" : "light"}>
        <div className="container">
            <NavLink className="navbar-brand fw-bold" to="/">Discover
            </NavLink>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <NavLink  to="/" end className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
                            Home 
                        </NavLink>
                    </li>
                     <li className="nav-item">
                        <NavLink  to="/products" end className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
                           Products 
                        </NavLink>
                    </li>
                     <li className="nav-item">
                        <NavLink  to="/about" end className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
                            About 
                        </NavLink>
                    </li>
                     <li className="nav-item">
                        <NavLink  to="/contact" end className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
                            Contact 
                        </NavLink>
                    </li>
                     <li className="nav-item">
                        <NavLink  to="/policy" end className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
                            Policies
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/wishlist" end className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
                            Wishlist
                        </NavLink>
                    </li>

                </ul>

                <div className="d-flex align-items-center gap-3">
                    <button
                      type="button"
                      className="btn btn-sm btn-outline-secondary"
                      onClick={toggleTheme}
                    >
                      <i className={`fa ${darkMode ? "fa-sun" : "fa-moon"} me-2`}></i>
                      {darkMode ? "Light" : "Dark"} Mode
                    </button>

                    <li className="nav-item" style={{ listStyle: 'none' }}>
                            <NavLink className="nav-link" to="/cart">
                            <i className="fa fa-shopping-cart my-2"></i>
                            <span className="badge bg-danger ms-2">
                                ({totalQty})
                            </span>
                            </NavLink>
                        </li>
                </div>

            </div>
        </div>
    </nav>

    {/* Mobile Bottom Navigation */}
    <nav
      className="navbar fixed-bottom border-top d-lg-none shadow-lg bg-body nav-mobile-bottom"
      data-bs-theme={darkMode ? "dark" : "light"}
    >
      <div className="container-fluid d-flex justify-content-around text-center py-1 gap-1">

        {/* Home */}
        <NavLink
          to="/"
          end
          className={({ isActive }) =>
            isActive
              ? "text-primary text-decoration-none"
              : "text-body text-decoration-none"
          }
        >
          <div className="nav-mobile-item">
            <i className="fa fa-home fs-5" aria-hidden="true"></i>
            <div className="nav-mobile-label">Home</div>
          </div>
        </NavLink>

        {/* Products */}
        <NavLink
          to="/products"
          className={({ isActive }) =>
            isActive
              ? "text-primary text-decoration-none"
              : "text-body text-decoration-none"
          }
        >
          <div className="nav-mobile-item">
            <i className="fa fa-box fs-5" aria-hidden="true"></i>
            <div className="nav-mobile-label">Products</div>
          </div>
        </NavLink>

        {/* Wishlist */}
        <NavLink
          to="/wishlist"
          className={({ isActive }) =>
            isActive
              ? "text-primary text-decoration-none"
              : "text-body text-decoration-none"
          }
        >
          <div className="nav-mobile-item">
            <i className="fa fa-heart fs-5" aria-hidden="true"></i>
            <div className="nav-mobile-label">Wishlist</div>
          </div>
        </NavLink>

        {/* Cart */}
        <NavLink
          to="/cart"
          className={({ isActive }) =>
            isActive
              ? "text-primary text-decoration-none position-relative"
              : "text-body text-decoration-none position-relative"
          }
        >
          <div className="position-relative nav-mobile-item">
            <i className="fa fa-shopping-cart fs-5" aria-hidden="true"></i>

            {totalQty > 0 && (
              <span
                className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
                style={{ fontSize: "10px" }}
              >
                {totalQty}
              </span>
            )}

            <div className="nav-mobile-label">Cart</div>
          </div>
        </NavLink>

        {/* Theme toggle */}
        <button
          type="button"
          className="btn btn-link text-body text-decoration-none p-0 border-0"
          onClick={toggleTheme}
          aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
        >
          <div className="nav-mobile-item">
            <i className={`fa ${darkMode ? "fa-sun" : "fa-moon"} fs-5`} aria-hidden="true"></i>
            <div className="nav-mobile-label">{darkMode ? "Light" : "Dark"}</div>
          </div>
        </button>

        {/* About */}
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive
              ? "text-primary text-decoration-none"
              : "text-body text-decoration-none"
          }
        >
          <div className="nav-mobile-item">
            <i className="fa fa-info-circle fs-5" aria-hidden="true"></i>
            <div className="nav-mobile-label">About</div>
          </div>
        </NavLink>

        {/* Contact */}
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive
              ? "text-primary text-decoration-none"
              : "text-body text-decoration-none"
          }
        >
          <div className="nav-mobile-item">
            <i className="fa fa-phone fs-5" aria-hidden="true"></i>
            <div className="nav-mobile-label">Contact</div>
          </div>
        </NavLink>

      </div>
    </nav>
    </>
    );

};

export default Navbar;