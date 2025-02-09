/* eslint-disable react/prop-types */
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
      <p>SPECIFICATIONS</p>
      <div>
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

export default ProductSpecs;
