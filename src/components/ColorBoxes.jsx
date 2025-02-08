/* eslint-disable react/prop-types */ //TODO: instalar proptypes una vez

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

export default ColorBoxes;
