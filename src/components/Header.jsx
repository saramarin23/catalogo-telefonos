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
        <Link
          to="/cart"
          style={{
            display: 'flex',
            cursor: 'pointer',
            padding: '4px 0',
            alignItems: 'center',
            gap: '6px',
          }}
        >
          <img
            src={cartItems.length > 0 ? CartIconBlack : CartIconWhite}
            style={{ width: '16px', height: '16px' }}
          />
          <p>{cartItems.length}</p>
        </Link>
      )}
    </header>
  );
};

export default Header;
