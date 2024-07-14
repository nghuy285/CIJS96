import React from "react";
import "./FilterBar.css";

const FilterBar = ({ filters, setFilters }) => {
  const handleFilterChange = (e) => {
    const { name, value, checked } = e.target;
    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: checked
        ? [...prevFilters[name], value]
        : prevFilters[name].filter((item) => item !== value),
    }));
  };

  return (
    <div className="filter-bar">
      <div className="filter-group">
        <h3>Connection Type:</h3>
        <label>
          <input
            type="checkbox"
            name="connectionType"
            value="wired"
            onChange={handleFilterChange}
          />
          Wired
        </label>
        <label>
          <input
            type="checkbox"
            name="connectionType"
            value="wireless"
            onChange={handleFilterChange}
          />
          Wireless
        </label>
      </div>

      <div className="filter-group">
        <h3>Color:</h3>
        <label>
          <input
            type="checkbox"
            name="color"
            value="black"
            onChange={handleFilterChange}
          />
          Black
        </label>
        <label>
          <input
            type="checkbox"
            name="color"
            value="white"
            onChange={handleFilterChange}
          />
          White
        </label>
        <label>
          <input
            type="checkbox"
            name="color"
            value="red"
            onChange={handleFilterChange}
          />
          Red
        </label>
        <label>
          <input
            type="checkbox"
            name="color"
            value="blue"
            onChange={handleFilterChange}
          />
          Blue
        </label>
        <label>
          <input
            type="checkbox"
            name="color"
            value="green"
            onChange={handleFilterChange}
          />
          Green
        </label>
      </div>

      <div className="filter-group">
        <h3>Product Line:</h3>
        <label>
          <input
            type="checkbox"
            name="productLine"
            value="low"
            onChange={handleFilterChange}
          />
          Low
        </label>
        <label>
          <input
            type="checkbox"
            name="productLine"
            value="medium"
            onChange={handleFilterChange}
          />
          Medium
        </label>
        <label>
          <input
            type="checkbox"
            name="productLine"
            value="high"
            onChange={handleFilterChange}
          />
          High
        </label>
      </div>
    </div>
  );
};

export default FilterBar;
