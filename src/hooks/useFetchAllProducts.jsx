import { useState, useEffect } from 'react';
import { fetchAllProducts } from '../services/api';
import { filterProducts } from '../utils/filterProducts';

const useFetchAllProducts = (search) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const loadProducts = async () => {
      setLoading(true);
      setError('');

      try {
        const data = await fetchAllProducts(search);
        const uniqueProducts = filterProducts(data);
        const limitedProducts = uniqueProducts.slice(0, 20);
        setProducts(limitedProducts);
        setIsLoaded(true);
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

  return { products, loading, error, isLoaded };
};

export default useFetchAllProducts;
