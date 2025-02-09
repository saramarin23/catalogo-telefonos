import { useState, useCallback } from 'react';
import useFetchAllProducts from '../hooks/useFetchAllProducts';
import PhoneCard from '../components/PhoneCard';
import SearchBar from '../components/SearchBar';
import LoadingBar from '../assets/LoadingBar.png';

const PhoneList = () => {
  const [search, setSearch] = useState('');
  const { products, loading, error, isLoaded } = useFetchAllProducts(search);

  const handleSearch = useCallback((e) => {
    setSearch(e.target.value);
  }, []);

  return (
    <div className="phone-list">
      {isLoaded && !loading && (
        <SearchBar
          searchTerm={search}
          onSearchChange={handleSearch}
          products={products}
        />
      )}
      {loading && <img src={LoadingBar} alt="Loading products" />}
      {error && <p>{error}</p>}
      {!loading && (
        <div className="grid-phones">
          {products.map((product) => (
            <PhoneCard key={product?.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
};

export default PhoneList;
