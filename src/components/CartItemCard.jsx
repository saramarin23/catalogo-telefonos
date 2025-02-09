/* eslint-disable react/prop-types */ //TODO: instalar proptypes
import { TEXTS } from '../utils/texts';

const CartItemCard = ({ item, removeFromCart }) => {
  return (
    <div className="cartItemCard">
      <img
        src={item.color.imageUrl}
        alt={`${item.name} ${item.color.name} ${item.storage.capacity}`}
      />
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
        }}
      >
        <div style={{ paddingTop: '40px', maxWidth: '100%' }}>
          <p>{item.name.toUpperCase()}</p>
          <p>
            {item.storage.capacity} | {item.color.name.toUpperCase()}{' '}
          </p>
          <p>{item.storage.price + ' ' + TEXTS.CART.EUR}</p>
        </div>
        <div>
          <button
            onClick={() => removeFromCart(item)}
            className="cartItemCard-button_delete"
            aria-label={`Remove ${item.name} from cart`}
          >
            {TEXTS.CART.DELETE_BUTTON}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItemCard;
