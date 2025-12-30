import { categories, cities } from '../data/events';

const FilterBar = ({ activeCategory, activeCity, onCategoryChange, onCityChange }) => {
  return (
    <div className="filter-bar">
      <div className="filter-group">
        <label>Category:</label>
        <select 
          value={activeCategory} 
          onChange={onCategoryChange}
          className="filter-select"
        >
          {categories.map(cat => (
            <option key={cat} value={cat} className="filter-option">{cat}</option>
          ))}
        </select>
      </div>
      
      <div className="filter-group">
        <label>City:</label>
        <select 
          value={activeCity} 
          onChange={onCityChange}
          className="filter-select"
        >
          {cities.map(city => (
            <option key={city} value={city} className="filter-option">{city}</option>
          ))}
        </select>
      </div>
      
      <button 
        className="clear-filters" 
        onClick={() => {
          onCategoryChange({ target: { value: 'All Events' } });
          onCityChange({ target: { value: 'All Cities' } });
        }}
      >
        Clear Filters
      </button>
    </div>
  );
};
export default FilterBar;