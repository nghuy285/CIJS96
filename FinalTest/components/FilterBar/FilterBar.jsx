import React from "react";
import "./FilterBar.css";

function FilterBar() {
  return (
    <div className="filter-bar">
      <h2>Filter By</h2>
      <h3>Product Line</h3>
      <div className="filter-section">
        <label>
          Two
          <input type="checkbox" />
          <span class="checkmark"></span>
        </label>
      </div>
      <h3>Product Line</h3>
      <div className="filter-section">
        <label>
          Two
          <input type="checkbox" />
          <span class="checkmark"></span>
        </label>
      </div>
      <h3>Product Line</h3>
      <div className="filter-section">
        <label>
          Two
          <input type="checkbox" />
          <span class="checkmark"></span>
        </label>
      </div>
    </div>
  );
}

export default FilterBar;
