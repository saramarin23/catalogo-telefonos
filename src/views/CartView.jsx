import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const CartView = () => {
  const { cartItems, removeFromCart } = useCart();

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.storage.price,
    0,
  );

  return (
    <>
      <h1>CART ({cartItems.length})</h1>
      {cartItems.map((item, index) => (
        <div key={index}>
          <img src={item.color.imageUrl} />
          <div>
            <p>{item.name}</p>
            <p>
              {item.storage.capacity} | {item.color.name}{' '}
            </p>
            <p>{item.storage.price} EUR</p>
            <button
              onClick={() => removeFromCart(item)}
              style={{ color: 'red' }}
            >
              Eliminar
            </button>
          </div>
        </div>
      ))}

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
