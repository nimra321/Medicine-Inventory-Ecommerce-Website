// CartModal.js
import './cartModel.css'
import { useEffect, useState } from 'react';
import { useCart } from '../contects/cardContext';
import { TiDelete } from "react-icons/ti";

const CartModal = ({ isOpen, onClose }) => {


  const { cartItems, removeFromCart } = useCart([]);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

     return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  useEffect(() => {
  const newTotalPrice = cartItems.reduce((total, item) => {
    const itemPrice = typeof item.price === 'number' ? item.price : 0;
    const itemQuantity = typeof item.quantity === 'number' ? item.quantity : 0;
    return total + itemPrice * itemQuantity;
  }, 0);
  setTotalPrice(newTotalPrice);
  }, [cartItems]);

  // const checkout = async() => {
  //   try {
  //     const res = await fetch("http://localhost:5000/checkout", {
  //       method:"POST",
  //       headers:{
  //         "Content-Type":"application/json",
  //       },
  //       mode:"cors",
  //       body:JSON.stringify({
  //         items:[
  //           {
  //             id:1,
  //             quantity:quantity,
  //             price:itemPrice,
  //             name:itemName
  //           },
  //         ]
  //       })
  //     })
  //     const data = await res.json();
  //     window.location=data.url;
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }

  const checkout = async () => {
    try {
      // Extract necessary information from cartItems
      const itemsArray = cartItems.map((item) => ({
        id: item._id,
        quantity: item.quantity,
        price: item.medicinePricePKR,
        name: item.medicineName,
      }));
  
      // Make a fetch request
      const res = await fetch("http://localhost:5000/checkout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        mode: "cors",
        body: JSON.stringify({
          items: itemsArray,
        }),
      });
  
      // Parse response data
      const data = await res.json();
  
      // Check the response and navigate if needed
      if (res.ok) {
        window.location = data.url;
      } else {
        console.error("Checkout failed:", data);
        // Handle checkout failure, show an error message, etc.
      }
    } catch (error) {
      console.log("Error during checkout:", error);
    }
  };
  

  return (
    <div className={`cart-modal ${isOpen ? 'open' : ''}`} onClick={onClose}>
      <div className="cart-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={onClose}>
          &times;
        </button>
        <h2>Cart :</h2>
        <div className="cart-items">
          {cartItems.length > 0 ? (
            <ul>
              {cartItems.map((item) => (
                <li key={item._id}>
                  <img src={item.imageUrl} alt="" />
                  <div className="item-details">
                    <div className='item-details-left'>
                      <p>{item.medicineName}</p>
                    </div>
                    <div className='item-price-quantity'>
                      <div className='item-details-center'>
                        <p>Price: {item.medicinePricePKR}</p>
                      </div>
                    
                      <div className='item-details-center'>
                        <p>Quantity: {item.quantity}</p>
                      </div>
                    </div>
                   <button onClick={() => removeFromCart(item._id)} className="remove-btn">
                    <TiDelete />
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          ) : (
            <p>Your cart is empty.</p>
          )}
        </div>
        <div className="total-price">
          <p>Total Price: {totalPrice.toFixed(2)}</p>
        </div>
        <div className='btn-cart'>
          <button className="close-modal-btn" onClick={onClose}>
            Close
          </button>
          <button className="checkOut-modal-btn" onClick={checkout}>
            CheckOut
          </button>
        </div>
        
      </div>
    </div>
  );
};

export default CartModal;
