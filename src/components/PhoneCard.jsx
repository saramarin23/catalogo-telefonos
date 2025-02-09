import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { TEXTS } from '../utils/texts';

const PhoneCard = ({ product }) => {
  return (
    <Link to={{ pathname: `/products/${product.id}`, search: '' }}>
      <div className="card">
        <div className="card-image">
          <img src={product.imageUrl} alt="Phone image" />
        </div>
        <div>
          <p className="card-brand">{product.brand.toUpperCase()}</p>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <p className="card-name">{product.name.toUpperCase()}</p>
            <p className="card-name">
              {product.basePrice + ' ' + TEXTS.PHONE_DETAIL.EUR}
            </p>
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
    basePrice: PropTypes.number,
  }).isRequired,
};

export default PhoneCard;
