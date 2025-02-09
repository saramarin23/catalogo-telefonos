import PropTypes from 'prop-types';

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

StorageBoxes.propTypes = {
  option: PropTypes.shape({
    capacity: PropTypes.string.isRequired,
  }).isRequired,
  onSelectStorage: PropTypes.func.isRequired,
  isSelected: PropTypes.boolean,
};

export default StorageBoxes;
