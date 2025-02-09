import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const PhoneCard = ({ product }) => {
  return (
    <Link to={{ pathname: `/products/${product.id}`, search: '' }}>
      <div className="card">
        <div className="card-image">
          <img src={product.imageUrl} alt="Phone image" />
        </div>
        <div>
          <p>{product.brand.toUpperCase()}</p>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <p>{product.name.toUpperCase()}</p>
            <p>{product.basePrice}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

PhoneCard.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.string.isRequired,
    imageUrl: PropTypes.string,
    brand: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    basePrice: PropTypes.string,
  }).isRequired,
};

export default PhoneCard;
