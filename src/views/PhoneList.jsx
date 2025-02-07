import { useState, useEffect, useCallback } from 'react';
import { fetchAllProducts } from '../services/api';
import { filterProducts } from '../utils/filterProducts';
import PhoneCard from '../components/PhoneCard';
import SearchBar from '../components/SearchBar';
import LoadingBar from '../assets/LoadingBar.png';

const PhoneList = () => {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSearch = useCallback((e) => {
    setSearch(e.target.value);
  }, []);

  useEffect(() => {
    const loadProducts = async () => {
      setLoading(true);
      setError('');

      try {
        const data = await fetchAllProducts(search);
        const uniqueProducts = filterProducts(data);
        const limitedProducts = uniqueProducts.slice(0, 20);
        setProducts(limitedProducts);
      } catch (error) {
        console.error('Error en la llamada a la API:', error);
        setError('No se han cargado los productos');
      } finally {
        setLoading(false);
      }
    };

    const timeoutSearch = setTimeout(() => {
      loadProducts();
    }, 600);

    return () => clearTimeout(timeoutSearch);
  }, [search]);

  return (
    <div className="home">
      {!loading && ( //TODO: optimizar que se vea a la vez o no
        <SearchBar
          searchTerm={search}
          onSearchChange={handleSearch}
          products={products}
        />
      )}
      {loading && (
        <img src={LoadingBar} style={{ position: 'relative', top: '80px' }} />
      )}
      {error && <p>{error}</p>}
      {!loading && (
        <div className="gridPhones">
          {products.map((product) => (
            <PhoneCard key={product?.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
};

export default PhoneList;
