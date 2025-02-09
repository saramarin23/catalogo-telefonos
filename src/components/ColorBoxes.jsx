import PropTypes from 'prop-types';

const ColorBoxes = ({ color, onSelectColor, isSelected }) => {
  return (
    <>
      <div className={`color-container${isSelected ? ' selected' : ''}`}>
        <div
          className="color-container-fill"
          style={{ backgroundColor: color.hexCode }}
          onClick={() => onSelectColor(color)}
        ></div>
      </div>
    </>
  );
};

ColorBoxes.propTypes = {
  color: PropTypes.shape({
    hexCode: PropTypes.string.isRequired,
  }).isRequired,
  onSelectColor: PropTypes.func.isRequired,
  isSelected: PropTypes.boolean.isRequired,
};

export default ColorBoxes;
