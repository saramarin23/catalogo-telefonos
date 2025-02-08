/* eslint-disable react/prop-types */ //TODO: instalar proptypes una vez

const ColorBoxes = ({ color, onSelectColor, isSelected }) => {
  return (
    <>
      <div className={`storage-container ${isSelected ? 'selected' : ''}`}>
        <div
          style={{
            backgroundColor: color.hexCode,
            width: '20px',
            height: '20px',
            display: 'flex',
            alignItems: 'center',
          }}
          onClick={() => onSelectColor(color)}
        ></div>
      </div>
    </>
  );
};

export default ColorBoxes;
