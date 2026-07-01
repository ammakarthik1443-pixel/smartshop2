import React from 'react';
import { useCart } from '../../context/CartContext';
import './Cart.css';

const Cart = () => {
  const { cart, addToCart, decreaseQuantity,clearCart } = useCart();

  const totalPrice = cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  const [customerName, setCustomerName] = React.useState('');
const [mobile, setMobile] = React.useState('');
const [address, setAddress] = React.useState('');
const [city, setCity] = React.useState('');
const [pincode, setPincode] = React.useState('');
  const handlePlaceOrder = () => {
  if (cart.length === 0) {
    alert("Your cart is empty!");
    return;
  }

  if (!customerName || !mobile || !address || !city || !pincode) {
    alert("Please fill all customer details!");
    return;
  }
  
  alert(
    `✅ Order Placed Successfully!

Customer: ${customerName}
Mobile: ${mobile}

Total Amount: ₹${totalPrice}

Thank you for shopping with TVR Supermart!`
  );
  clearCart();
};

  return (
    <div className="cart-page" style={{ padding: '40px 5%', minHeight: '60vh' }}>
      <h1>Your Cart</h1>
      
      {cart.length === 0 ? (
        <p>No items in the cart.</p>
      ) : (
        <div className="cart-container">
          <div className="cart-items">
            {cart.map((item) => (
              <div key={item.id} style={{ display: 'flex', alignItems: 'center', gap: '20px', borderBottom: '1px solid #ddd', padding: '15px 0' }}>
                <img src={item.image} alt={item.name} style={{ width: '80px', borderRadius: '8px' }} />
                <div style={{ flex: 1 }}>
                  <h3>{item.name}</h3>
                  <p>₹{item.price}</p>
                </div>
                <div className="quantity-controls">
                  <button onClick={() => decreaseQuantity(item.id)}>-</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => addToCart(item)}>+</button>
                </div>
                <div style={{ fontWeight: 'bold' }}>₹{item.price * item.quantity}</div>
              </div>
            ))}
          </div>
          <div className="customer-form">
  <h3>Customer Details</h3>

  <input type="text" placeholder="Full Name" value={customerName}
    onChange={(e) => setCustomerName(e.target.value)}
    className="checkout-input"
  />

  <input type="tel" placeholder="Mobile Number" value={mobile}
    onChange={(e) => setMobile(e.target.value)}
    className="checkout-input"
  />

  <textarea
    placeholder="Address"
    value={address}
    onChange={(e) => setAddress(e.target.value)}
    className="checkout-input"
    rows="3"
  />

  <input type="text" placeholder="City" value={city}
    onChange={(e) => setCity(e.target.value)}
    className="checkout-input"
  />

  <input type="text" placeholder="Pincode" value={pincode}
    onChange={(e) => setPincode(e.target.value)}
    className="checkout-input"
  />
</div>

          <div className="cart-summary" style={{ marginTop: '30px', padding: '20px', background: '#f4faf6', borderRadius: '12px', textAlign: 'right' }}>
            <h2>Total Amount: ₹{totalPrice}</h2>
            <button onClick={handlePlaceOrder} style={{ background: '#0b8e36', color: 'white', padding: '12px 30px', border: 'none', borderRadius: '8px', fontSize: '1.1rem', cursor: 'pointer', marginTop: '15px' }}>
              Place Order
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;