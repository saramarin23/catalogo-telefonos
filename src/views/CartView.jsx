import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import CartItemCard from '../components/CartItemCard';

const CartView = () => {
  const { cartItems, removeFromCart } = useCart();

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.storage.price,
    0,
  );

  return (
    <>
      <h1>CART ({cartItems.length})</h1>
      <div style={{ display: 'flex' }}>
        {cartItems.map((item) => (
          <CartItemCard
            key={item.id}
            item={item}
            removeFromCart={removeFromCart}
          />
        ))}
      </div>

      <Link to="/">
        <button>CONTINUE SHOPPING</button>
      </Link>
      {cartItems.length > 0 && (
        <>
          <div>
            <p>TOTAL</p>
            <p>{totalPrice} EUR</p>
          </div>
          <button>PAY</button>
        </>
      )}
    </>
  );
};

export default CartView;
