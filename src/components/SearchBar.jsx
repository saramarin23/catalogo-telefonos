/* eslint-disable react/prop-types */
import { useRef, useEffect } from 'react';
import X from '../assets/icons/X.svg';

const SearchBar = ({ searchTerm, onSearchChange, products }) => {
  const inputRef = useRef(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, [searchTerm]);

  const clearSearchQuery = () => {
    onSearchChange({ target: { value: '' } });
  };

  return (
    <div className="searchBar">
      <input
        ref={inputRef}
        type="text"
        value={searchTerm}
        placeholder="Search for a smartphone..."
        onChange={onSearchChange}
      />
      {searchTerm && (
        <img
          src={X}
          onClick={clearSearchQuery}
          style={{
            position: 'absolute',
            cursor: 'pointer',
            top: '127px',
            left: '1200px',
          }}
        />
      )}
      <p>{products.length} RESULTS</p>
    </div>
  );
};

export default SearchBar;
