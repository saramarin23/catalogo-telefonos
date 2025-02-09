/* eslint-disable react/prop-types */
import { useRef, useEffect } from 'react';
import { TEXTS } from '../utils/texts';
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
        aria-label={TEXTS.PHONE_LIST.SEARCH_PLACEHOLDER}
        placeholder={TEXTS.PHONE_LIST.SEARCH_PLACEHOLDER}
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
          alt="clear search"
        />
      )}
      <p>{(products.length + ' ' + TEXTS.PHONE_LIST.RESULTS).toUpperCase()}</p>
    </div>
  );
};

export default SearchBar;
