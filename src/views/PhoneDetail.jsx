import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useCart } from '../context/CartContext';
import { fetchProductById } from '../services/api';
import { filterProducts } from '../utils/filterProducts';
import ColorBoxes from '../components/ColorBoxes';
import StorageBoxes from '../components/StorageBoxes';
import LoadingBar from '../assets/LoadingBar.png';
import ChevronLeft from '../assets/icons/ChevronLeft.svg';
import PhoneCard from '../components/PhoneCard';

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
    setSelectedStorage(option.price);
  };
  const handleSelectColor = (color) => {
    setSelectedColor(color);
  };

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const phoneData = await fetchProductById(id);
        const filteredProduct = {
          ...phoneData,
          similarProducts: filterProducts(phoneData.similarProducts),
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
      {loading && (
        <img src={LoadingBar} style={{ position: 'relative', top: '80px' }} />
      )}
      {error && <p>Error: {error}</p>}
      <div className="backButton" onClick={() => navigate('/')}>
        <img src={ChevronLeft} className="backButton_icon" />
        <p>BACK</p>
      </div>
      {product && (
        <div style={{ width: '1200px', margin: '0 auto' }}>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              top: '234px',
            }}
          >
            <img
              src={
                selectedColor
                  ? selectedColor.imageUrl
                  : product.colorOptions[0].imageUrl
              }
              className="phoneDetail-image"
              alt=""
            />
            <div
              style={{
                display: 'flex',
                gap: '64px',
                flexDirection: 'column',
                width: '380px',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  gap: '11px',
                  flexDirection: 'column',
                }}
              >
                <p>{product.name}</p>
                {selectedStorage === null ? (
                  <p>From {product.basePrice} EUR</p>
                ) : (
                  <p>{selectedStorage} EUR</p>
                )}
              </div>
              <div
                style={{
                  display: 'flex',
                  gap: '40px',
                  flexDirection: 'column',
                }}
              >
                <p>STORAGE ¿HOW MUCH SPACE DO YOU NEED?</p>
                <ul className="storage-box" style={{ paddingLeft: '0' }}>
                  {product.storageOptions.map((option, index) => {
                    return (
                      <StorageBoxes
                        key={index}
                        option={option}
                        onSelectStorage={handleSelectStorage}
                        isSelected={option?.price === selectedStorage}
                      />
                    );
                  })}
                </ul>
                <p>COLOR. PICK YOUR FAVORITE.</p>
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
              <button
                disabled={(selectedStorage && selectedColor) === null}
                className={'phoneDetail-button'}
                onClick={() => addToCart(product)}
              >
                AÑADIR
              </button>
            </div>
          </div>
          <div
            className="specs"
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '40px',
            }}
          >
            {/* TODO: refactor */}
            <div style={{ display: 'flex' }}>
              <p>SPECIFICATIONS</p>
            </div>
            <div>
              <div className="specs-row">
                <p className="specs-row-label">BRAND</p>
                <p>{product.brand}</p>
              </div>
              <div className="specs-row">
                <p className="specs-row-label">NAME</p>
                <p>{product.name}</p>
              </div>
              <div className="specs-row">
                <p className="specs-row-label">DESCRIPTION</p>
                <p>{product.description}</p>
              </div>
              <div className="specs-row">
                <p className="specs-row-label">SCREEN</p>
                <p>{product.specs.screen}</p>
              </div>
              <div className="specs-row">
                <p className="specs-row-label">SCREEN</p>
                <p>{product.specs.resolution}</p>
              </div>
              <div className="specs-row">
                <p className="specs-row-label">PROCESSOR</p>
                <p>{product.specs.processor}</p>
              </div>
              <div className="specs-row">
                <p className="specs-row-label">MAIN CAMERA</p>
                <p>{product.specs.mainCamera}</p>
              </div>
              <div className="specs-row">
                <p className="specs-row-label">SELFIE CAMERA</p>
                <p>{product.specs.selfieCamera}</p>
              </div>
              <div className="specs-row">
                <p className="specs-row-label">BATTERY</p>
                <p>{product.specs.battery}</p>
              </div>
              <div className="specs-row">
                <p className="specs-row-label">OS</p>
                <p>{product.specs.os}</p>
              </div>
              <div className="specs-row">
                <p className="specs-row-label">SCREEN REFRESH RATE</p>
                <p>{product.specs.screenRefreshRate}</p>
              </div>
            </div>
          </div>
          <div
            style={{
              marginTop: '100px',
            }}
            className="carousel"
          >
            <p>SIMILAR ITEMS</p>
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
