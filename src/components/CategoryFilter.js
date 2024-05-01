import React from "react";

function CategoryFilter({ categories, selectedCategory, onCategoryChange }) {
  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categories.map((category, ind) => (
        <button
          key={ind}
          className={selectedCategory === category ? "selected" : ""}
          onClick={() => onCategoryChange(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
}

export default CategoryFilter;
