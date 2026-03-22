{/*import { NavLink } from "react-router-dom";

const Sidebar = () => {
  const linkClass = ({ isActive }) =>
    `list-group-item list-group-item-action border-0 ${
      isActive ? "bg-primary text-white fw-semibold" : "bg-light text-dark"
    }`;

  return (
    <aside>
      <h4>Categories</h4>

      <div className="list-group list-group-flush">
        <NavLink to="/tshirt" className={linkClass}>
          T-shirts
        </NavLink>

        <NavLink to="/trends" className={linkClass}>
          Trends
        </NavLink>

        <NavLink to="/outfits" className={linkClass}>
          Outfit Ideas
        </NavLink>

        <NavLink to="/style-guide" className={linkClass}>
          Style Guide
        </NavLink>

        <NavLink to="/brand-spotlight" className={linkClass}>
          Brand Spotlight
        </NavLink>
      </div>
    </aside>
  );
};

export default Sidebar;*/}


{/*
import { NavLink } from 'react-router-dom';


const Sidebar = () => {
    const linkClass = ({ isActive }) =>
    `list-group-item list-group-item-action border-1 ${
      isActive ? "bg-primary text-white fw-semibold" : "bg-light text-dark"
    }`;
    return (
        <aside className="bg-light p-3">
            <h5>Categories</h5>
             <div className="list-group list-group-flush">
        <NavLink to="/tshirt" className={linkClass}>
          T-shirts
        </NavLink>

        <NavLink to="/shoes" className={linkClass}>
          Shoes
        </NavLink>

        <NavLink to="/pants" className={linkClass}>
          Pants
        </NavLink>

        <NavLink to="/hoodiejacket" className={linkClass}>
          Hoodies/Jackets
        </NavLink>

        <NavLink to="/headwear" className={linkClass}>
          Headwear
        </NavLink>

        <NavLink to="/accessories" className={linkClass}>
          Accessories
        </NavLink>
      </div>
                
        </aside>
    );
};

export default Sidebar;*/}


const Sidebar = ({ categories, selectedCategory, onCategoryChange }) => {
    return (
        <aside className="category-sidebar p-3">
            <h5 className="mb-3">Categories</h5>
            <div className="list-group list-group-flush">
                <button
                  type="button"
                  className={`list-group-item list-group-item-action border-1 category-item ${selectedCategory === "all" ? "active" : ""}`}
                  onClick={() => onCategoryChange("all")}
                >
                  All Categories
                </button>
                {categories.map((category) => (
                    <button
                        key={category}
                        type="button"
                        className={`list-group-item list-group-item-action border-1 category-item ${selectedCategory === category ? "active" : ""}`}
                        onClick={() => onCategoryChange(category)}
                    >
                        {category}
                    </button>
                ))}
            </div>
        </aside>
    );
};

export default Sidebar;


                