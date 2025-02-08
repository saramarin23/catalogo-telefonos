import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import CartItemCard from '../components/CartItemCard';
import LoadingBar from '../assets/LoadingBar.png';

const CartView = () => {
  const { cartItems, removeFromCart } = useCart();

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.storage.price,
    0,
  );

  return (
    <>
      <img src={LoadingBar} />
      <div style={{ position: 'relative', top: '40px', padding: '12px 100px' }}>
        <h1>CART ({cartItems.length})</h1>
      </div>
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          padding: '40px',
          margin: '0',
          gap: '40px',
        }}
      >
        {cartItems.map((item) => (
          <CartItemCard
            key={item.id}
            item={item}
            removeFromCart={removeFromCart}
          />
        ))}
      </div>
      <div className="cartview-footer">
        <Link to="/">
          <button className="cartview-button-continue">
            CONTINUE SHOPPING
          </button>
        </Link>
        {cartItems.length > 0 && (
          <div style={{ display: 'flex', gap: '80px' }}>
            <div style={{ display: 'flex', gap: '24px', alignItems: 'center' }}>
              <p>TOTAL</p>
              <p>{totalPrice} EUR</p>
            </div>
            <button className="cartview-button-pay">PAY</button>
          </div>
        )}
      </div>
    </>
  );
};

export default CartView;
