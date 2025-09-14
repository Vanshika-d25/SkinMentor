import React from 'react';
import { useCart } from './CartContext';

const Cart = () => {
  const { cartItems, updateQuantity, removeFromCart } = useCart();

  const subtotal = cartItems.reduce((total, item) => {
    const price = parseFloat(item.price);
    return total + price * item.quantity;
  }, 0);

  const gst = subtotal * 0.18; // 18% GST
  const shipping = subtotal > 999 ? 0 : 50; // Free shipping over ₹999
  const grandTotal = subtotal + gst + shipping;

  return (
    <div className="container my-4 p-4 border rounded shadow-sm" style={{ backgroundColor: '#f5f5f5' }}>
      <h2 className="text-success mb-4">🛒 Your Cart</h2>

      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          {cartItems.map((item) => (
            <div key={item.id} className="d-flex justify-content-between align-items-center mb-3 p-2 border rounded bg-white">
              <img src={item.image || 'https://via.placeholder.com/80'} alt={item.name} width="80" height="80" className="rounded" />
              <div className="flex-grow-1 mx-3">
                <h5 className="mb-1">{item.name}</h5>
                <p className="mb-1 text-muted">₹{item.price}</p>
                <div className="d-flex align-items-center">
                  <button className="btn btn-sm btn-outline-secondary" onClick={() => updateQuantity(item.id, -1)}>-</button>
                  <span className="mx-2">{item.quantity}</span>
                  <button className="btn btn-sm btn-outline-secondary" onClick={() => updateQuantity(item.id, 1)}>+</button>
                </div>
              </div>
              <button className="btn btn-outline-danger btn-sm" onClick={() => removeFromCart(item.id)}>Remove</button>
            </div>
          ))}

          {/* Bill Breakdown */}
          <div className="mt-4 p-3 bg-white border rounded">
            <h4 className="text-success">🧾 Bill Summary</h4>
            <ul className="list-group list-group-flush">
              <li className="list-group-item d-flex justify-content-between">
                <span>Subtotal</span>
                <span>₹{subtotal.toFixed(2)}</span>
              </li>
              <li className="list-group-item d-flex justify-content-between">
                <span>GST (18%)</span>
                <span>₹{gst.toFixed(2)}</span>
              </li>
              <li className="list-group-item d-flex justify-content-between">
                <span>Shipping</span>
                <span>{shipping === 0 ? 'Free' : `₹${shipping}`}</span>
              </li>
              <li className="list-group-item d-flex justify-content-between fw-bold">
                <span>Total</span>
                <span>₹{grandTotal.toFixed(2)}</span>
              </li>
            </ul>
            <div className="text-end mt-3">
              <button className="btn btn-success">Proceed to Checkout</button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
