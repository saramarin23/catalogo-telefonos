import PropTypes from 'prop-types';
import { TEXTS } from '../utils/texts';
const ProductSpecs = ({ product }) => {
  if (!product?.specs) return null;

  const specList = [
    { label: 'BRAND', value: product?.brand },
    { label: 'NAME', value: product?.name },
    { label: 'DESCRIPTION', value: product?.description },
    { label: 'SCREEN', value: product?.specs?.screen },
    { label: 'RESOLUTION', value: product?.specs?.resolution },
    { label: 'PROCESSOR', value: product?.specs?.processor },
    { label: 'MAIN CAMERA', value: product?.specs?.mainCamera },
    { label: 'SELFIE CAMERA', value: product?.specs?.selfieCamera },
    { label: 'BATTERY', value: product?.specs?.battery },
    { label: 'OS', value: product?.specs?.os },
    { label: 'SCREEN REFRESH RATE', value: product?.specs?.screenRefreshRate },
  ];

  return (
    <div className="specs">
      <p className="specs-title">{TEXTS.PHONE_DETAIL.SPECIFICATIONS_TITLE}</p>
      <div style={{ borderTop: '0.5px solid #000000' }}>
        {specList.map((spec, index) => (
          <div key={index} className="specs-row">
            <p className="specs-row-label">{spec.label}</p>
            <p>{spec.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

ProductSpecs.propTypes = {
  product: PropTypes.shape({
    brand: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    specs: PropTypes.shape({
      screen: PropTypes.string,
      resolution: PropTypes.string,
      processor: PropTypes.string,
      mainCamera: PropTypes.string,
      selfieCamera: PropTypes.string,
      battery: PropTypes.string,
      os: PropTypes.string,
      screenRefreshRate: PropTypes.string,
    }),
  }).isRequired,
};

export default ProductSpecs;
