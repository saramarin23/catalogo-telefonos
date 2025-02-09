import PropTypes from 'prop-types';

const Button = ({ variant, disabled, text, onClick }) => {
  return (
    <button
      className={`button ${variant} ${disabled ? 'disabled' : ''}`}
      onClick={onClick}
      disabled={disabled}
    >
      {text}
    </button>
  );
};

Button.propTypes = {
  variant: PropTypes.string,
  disabled: PropTypes.bool,
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

export default Button;
