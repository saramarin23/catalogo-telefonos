import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { fetchProductById } from '../services/api';
import ColorBoxes from '../components/ColorBoxes';
import StorageBoxes from '../components/StorageBoxes';
import LoadingBar from '../assets/LoadingBar.png';
import ChevronLeft from '../assets/icons/ChevronLeft.svg';

const PhoneDetail = () => {
  const [product, setProduct] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const [selectedStorage, setSelectedStorage] = useState(null);
  const [selectedColor, setSelectedColor] = useState(null);

  const { id } = useParams();
  const navigate = useNavigate();

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
        setProduct(phoneData);
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
      <div className="backButton" onClick={() => navigate(-1)}>
        <img src={ChevronLeft} className="backButton_icon" />
        <p>BACK</p>
      </div>
      {product && (
        <>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              top: '234px',
              width: '1200px',
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
              style={{ display: 'flex', gap: '64px', flexDirection: 'column' }}
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
                <ul className="storage-box">
                  {product.storageOptions.map((option, index) => {
                    return (
                      <StorageBoxes
                        key={index}
                        option={option}
                        onSelectStorage={handleSelectStorage}
                        isSelected={option.price === selectedStorage}
                      />
                    );
                  })}
                </ul>
                <p>COLOR. PICK YOUR FAVORITE.</p>
                <ul style={{ display: 'flex' }}>
                  {product.colorOptions.map((color) => {
                    return (
                      //TODO: añadir key
                      <>
                        <ColorBoxes
                          color={color}
                          onSelectColor={handleSelectColor}
                        />
                      </>
                    );
                  })}
                </ul>
                {selectedColor && <p>{selectedColor.name}</p>}
              </div>
              <button disabled={(selectedStorage && selectedColor) === null}>
                AÑADIR
              </button>
            </div>
          </div>
          <p>ESPECIFICACIONES</p>
          <p>{product.specs.screen}</p>
          <p>{product.specs.resolution}</p>
          <p>{product.specs.processor}</p>
          <p>{product.specs.mainCamera}</p>
          <p>{product.specs.selfieCamera}</p>
          <p>{product.specs.battery}</p>
          <p>{product.specs.os}</p>
          <p>{product.specs.screenRefreshRate}</p>
          <p>SIMILAR PRODUCTS</p>
          <ul>
            {product.similarProducts.map((product) => (
              <li key={product.id}>
                <img src={product.imageUrl} />
                <p>{product.brand}</p>
                <p>{product.name}</p>
                <p>{product.basePrice}</p>
              </li>
            ))}
          </ul>
          {/* TODO: carrusel */}
        </>
      )}
    </>
  );
};

export default PhoneDetail;
