import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useCart } from '../context/CartContext';
import { fetchProductById } from '../services/api';
import { filterProducts } from '../utils/filterProducts';
import { TEXTS } from '../utils/texts';
import ColorBoxes from '../components/ColorBoxes';
import StorageBoxes from '../components/StorageBoxes';
import LoadingBar from '../assets/LoadingBar.png';
import ChevronLeft from '../assets/icons/ChevronLeft.svg';
import PhoneCard from '../components/PhoneCard';
import ProductSpecs from '../components/ProductSpecs';
import Button from '../components/Button';

const PhoneDetail = () => {
  const [product, setProduct] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const [selectedStorage, setSelectedStorage] = useState(null);
  const [selectedColor, setSelectedColor] = useState(null);

  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();

  const handleSelectStorage = (option) => {
    setSelectedStorage(option);
  };
  const handleSelectColor = (color) => {
    setSelectedColor(color);
  };

  useEffect(() => {
    const fetchProduct = async () => {
      setLoading(true);
      setError('');
      try {
        const phoneData = await fetchProductById(id);
        const filteredProduct = {
          ...phoneData,
          similarProducts: phoneData.similarProducts
            ? filterProducts(phoneData.similarProducts)
            : [],
        };

        setProduct(filteredProduct);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  return (
    <>
      {loading && <img src={LoadingBar} />}
      {error && <p>Error: {error}</p>}
      {!loading && (
        <div className="backButton" onClick={() => navigate('/')}>
          <img src={ChevronLeft} className="backButton_icon" />
          <p>{TEXTS.PHONE_DETAIL.BACK_BUTTON.toUpperCase()}</p>
        </div>
      )}
      {product && (
        <div className="phoneDetail-container">
          <div className="phoneDetail-details">
            {product && product.colorOptions?.length > 0 && (
              <img
                src={
                  selectedColor?.imageUrl ||
                  product.colorOptions[0].imageUrl ||
                  ''
                }
                className="phoneDetail-image"
                alt="Phone image"
              />
            )}
            <div className="phoneDetail-right-container">
              <div className="phoneDetail-price-container">
                <p>{product.name.toUpperCase()}</p>
                {selectedStorage === null ? (
                  <p>
                    {TEXTS.PHONE_DETAIL.FROM +
                      ' ' +
                      product.basePrice +
                      ' ' +
                      TEXTS.PHONE_DETAIL.EUR}
                  </p>
                ) : (
                  <p>{selectedStorage.price + ' ' + TEXTS.PHONE_DETAIL.EUR}</p>
                )}
              </div>
              <div className="phoneDetail-choose-container" style={{}}>
                <p>{TEXTS.PHONE_DETAIL.STORAGE_TITLE}</p>
                <ul className="storage-box" style={{ paddingLeft: '0' }}>
                  {product.storageOptions.map((option, index) => (
                    <StorageBoxes
                      key={index}
                      option={option}
                      onSelectStorage={handleSelectStorage}
                      isSelected={option?.price === selectedStorage?.price}
                    />
                  ))}
                </ul>
                <p>{TEXTS.PHONE_DETAIL.COLOR_TITLE}</p>
                <ul style={{ display: 'flex', gap: '16px', paddingLeft: '0' }}>
                  {product.colorOptions.map((color, index) => (
                    <ColorBoxes
                      key={index}
                      color={color}
                      onSelectColor={handleSelectColor}
                      isSelected={color?.name === selectedColor?.name}
                    />
                  ))}
                </ul>
                {selectedColor && <p>{selectedColor.name}</p>}
              </div>
              <Button
                disabled={!selectedStorage || !selectedColor}
                variant="primary"
                text={TEXTS.PHONE_DETAIL.ADD_BUTTON.toUpperCase()}
                onClick={
                  selectedColor && selectedStorage
                    ? () => addToCart(product, selectedColor, selectedStorage)
                    : null
                }
              />
            </div>
          </div>
          <ProductSpecs product={product} />
          <div style={{ marginTop: '100px' }} className="carousel">
            <p>{TEXTS.PHONE_DETAIL.SIMILAR_ITEMS}</p>
            <ul className="carousel-list">
              {product.similarProducts.map((product) => (
                <PhoneCard key={product.id} product={product} />
              ))}
            </ul>
          </div>
        </div>
      )}
    </>
  );
};

export default PhoneDetail;
