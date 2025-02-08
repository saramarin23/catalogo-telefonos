/* eslint-disable react/prop-types */ //TODO: instalar proptypes

const CartItemCard = ({ item, removeFromCart }) => {
  return (
    <div className="cartItemCard">
      <img src={item.color.imageUrl} />
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
          <p>{item.storage.price} EUR</p>
        </div>
        <div>
          <label
            onClick={() => removeFromCart(item)}
            style={{ color: 'red', cursor: 'pointer' }}
          >
            Eliminar
          </label>
          {/* TODO: revisar accesibilidad */}
        </div>
      </div>
    </div>
  );
};

export default CartItemCard;
