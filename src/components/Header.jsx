import { Link, useLocation } from 'react-router-dom';
import Logo from '../assets/Logo.png';
import CartIconBlack from '../assets/icons/CartIconBlack.svg';
import CartIconWhite from '../assets/icons/CartIconWhite.svg';
import { useCart } from '../context/CartContext';

const Header = () => {
  const { cartItems } = useCart();
  const location = useLocation();

  return (
    <header className="header">
      <Link to="/">
        <img src={Logo} className="logo" alt="Website logo" />
      </Link>
      {location.pathname !== '/cart' && (
        <Link to="/cart" className="cartIcon_container">
          <img
            src={cartItems.length > 0 ? CartIconBlack : CartIconWhite}
            className="cartIcon_icon"
          />
          <p>{cartItems.length}</p>
        </Link>
      )}
    </header>
  );
};

export default Header;
