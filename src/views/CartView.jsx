import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { TEXTS } from '../utils/texts';
import { useCart } from '../context/CartContext';
import CartItemCard from '../components/CartItemCard';
import Button from '../components/Button';
import LoadingBar from '../assets/LoadingBar.png';

const CartView = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const { cartItems, removeFromCart } = useCart();
  const isMobile = width < 768;

  const totalPrice = cartItems.reduce(
    (total, item) => total + item?.storage.price,
    0,
  );

  const handleSize = () => {
    return setWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', handleSize);

    return () => {
      window.removeEventListener('resize', handleSize);
    };
  });

  return (
    <>
      {cartItems.length > 0 && <img src={LoadingBar} />}
      <div style={{ position: 'relative', top: '40px', padding: '12px 100px' }}>
        <p className="cartview-title">
          {TEXTS.CART.TITLE.toUpperCase()} ({cartItems.length})
        </p>
      </div>
      <div className="cartItems-container">
        {cartItems.length > 0 &&
          cartItems.map((item) => (
            <CartItemCard
              key={item.id}
              item={item}
              removeFromCart={removeFromCart}
            />
          ))}
      </div>
      {isMobile ? (
        <div style={{ padding: '16px 16px 24px 16px' }}>
          {cartItems.length > 0 && (
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
              }}
            >
              <p>{TEXTS.CART.TOTAL.toUpperCase()}</p>
              <p>{totalPrice + ' ' + TEXTS.CART.EUR}</p>
            </div>
          )}
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <Link to="/">
              <button className="cartview-button-continue">
                {TEXTS.CART.CONTINUE_SHOPPING_BUTTON.toUpperCase()}
              </button>
            </Link>
            <Button
              variant="secondary"
              text={TEXTS.CART.CONTINUE_SHOPPING_BUTTON.toUpperCase()}
            />
          </div>
        </div>
      ) : (
        <div className="cartview-footer">
          <Link to="/">
            <Button
              variant="secondary"
              text={TEXTS.CART.CONTINUE_SHOPPING_BUTTON.toUpperCase()}
            />
          </Link>
          {cartItems.length > 0 && (
            <div style={{ display: 'flex', gap: '80px' }}>
              <div
                style={{ display: 'flex', gap: '24px', alignItems: 'center' }}
              >
                <p>{TEXTS.CART.TOTAL.toUpperCase()}</p>
                <p>{totalPrice + ' ' + TEXTS.CART.EUR}</p>
              </div>
              <Button
                variant="primary"
                text={TEXTS.CART.PAY_BUTTON.toUpperCase()}
              />
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default CartView;
