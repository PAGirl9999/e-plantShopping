import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addItem, removeItem, updateQuantity } from './CartSlice';
import './CartItem.css';

const CartItem = ({ onContinueShopping }) => {
  const cart = useSelector(state => state.cart.items);
  const dispatch = useDispatch();

  // Calculate total amount for all products in the cart
  const calculateTotalAmount = (item, ItemsDisplay) => {
    const total_cart_amount=item.quantity * item.cost;
    return (
        <div className="pricing-app">
            <div className="display_box">
                <div className="header">
                    <p className="preheading"><h3>Total cart amount</h3></p>
                </div>
        ${total_cart_amount}

<div className="render_items">
    <ItemsDisplay />
</div>
                
            </div>
        </div>

    )
  };

  const handleContinueShopping = (e) => {
   dispatch(handleContinueShopping(e))
  };



  const handleIncrement = (item) => {
    dispatch(updateQuantity(item.quantity++))
};

  const handleDecrement = (item) => {
    dispatch(updateQuantity(item.quantity--))
  };

  const handleRemove = (item) => {
    dispatch(removeItem(item))
  };

const handleCheckoutShopping = (e) => {
  alert('Functionality to be added for future reference');
};

  // Calculate total cost based on quantity for an item
  const calculateTotalCost = (item) => {
  };

  return (
    <div className="cart-container">
      <h2 style={{ color: 'black' }}>Total Cart Amount: ${calculateTotalAmount()}</h2>
      <div>
        {cart.map(item => (
          <div className="cart-item" key={item.name}>
            <img className="cart-item-image" src={item.image} alt={item.name} />
            <div className="cart-item-details">
              <div className="cart-item-name">{item.name}</div>
              <div className="cart-item-cost">{item.cost}</div>
              <div className="cart-item-quantity">
                <button className="cart-item-button cart-item-button-dec" onClick={() => handleDecrement(item)}>-</button>
                <span className="cart-item-quantity-value">{item.quantity}</span>
                <button className="cart-item-button cart-item-button-inc" onClick={() => handleIncrement(item)}>+</button>
              </div>
              <div className="cart-item-total">Total: ${calculateTotalCost(item)}</div>
              <button className="cart-item-delete" onClick={() => handleRemove(item)}>Delete</button>
            </div>
          </div>
        ))}
      </div>
      <div style={{ marginTop: '20px', color: 'black' }} className='total_cart_amount'></div>
      <div className="continue_shopping_btn">
        <button className="get-started-button" onClick={(e) => handleContinueShopping(e)}>Continue Shopping</button>
        <br />
        <button className="get-started-button1">Checkout</button>
      </div>
    </div>
  );
};

export default CartItem;


