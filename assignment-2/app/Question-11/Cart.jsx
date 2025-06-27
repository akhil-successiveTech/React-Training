"use client"
import { useCart } from '@/context/CartContext';

const Cart = () => {
  const { cart, removeFromCart, total } = useCart();

  return (
    <div>
      <h2>Cart</h2>
      {cart.length === 0 && <p>No items in cart.</p>}
      {cart.map(item => (
        <div key={item.id} className="border p-2 m-2">
          <h3>{item.name}</h3>
          <p>₹{item.price}</p>
          <button onClick={() => removeFromCart(item.id)}>Remove</button>
        </div>
      ))}
      <h3>Total: ₹{total}</h3>
    </div>
  );
};

export default Cart;
