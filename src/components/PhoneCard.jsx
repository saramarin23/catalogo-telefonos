/* eslint-disable react/prop-types */ //TODO: instalar proptypes
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

export default PhoneCard;
