/* eslint-disable react/prop-types */ //TODO: instalar proptypes una vez

const StorageBoxes = ({ option, onSelectStorage, isSelected }) => {
  return (
    <div
      className={`storage-container-box ${isSelected ? 'selected' : ''}`}
      onClick={() => onSelectStorage(option)}
    >
      <p>{option.capacity}</p>
    </div>
  );
};

export default StorageBoxes;
