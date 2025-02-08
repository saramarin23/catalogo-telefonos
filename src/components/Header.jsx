import { Link } from 'react-router-dom';
import Logo from '../assets/logo.png';
// import CartIconBlack from '../assets/icons/CartIconBlack';
import CartIconWhite from '../assets/icons/CartIconWhite.svg';

const Header = () => {
  return (
    <header className="header">
      {/* TODO: meter <nav> por accesibilidad pero ver que no choque con space-between */}
      <Link to="/">
        <img src={Logo} className="logo" />
      </Link>
      {/* TODO:  empty ? white : black */}
      <div
        style={{
          display: 'flex',
          cursor: 'pointer',
          padding: '4px 0',
          alignItems: 'center',
          gap: '6px',
        }}
      >
        <img src={CartIconWhite} style={{ width: '16px', height: '16px' }} />
        <p>0</p>
      </div>
    </header>
  );
};

export default Header;
