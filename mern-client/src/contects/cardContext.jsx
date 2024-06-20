// cardContext.js

import React, { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const [cart, setCart] = useState([]);

  const addToCart = () => {
    // Check if the item is already in the cart
    const index = cart.findIndex((cartItem) => cartItem.id === item.id);

    console.log(cart);
    console.log(cartItems);

    if (index === -1) {
      // If item is not in the cart, add it
      const updatedCart = [...cart, { ...item, quantity: 1 }];
      setCart(updatedCart);
    } else {
      // If item is already in the cart, update its quantity
      const updatedCart = [...cart];
      updatedCart[index].quantity += 1;
      setCart(updatedCart);
    }
  };


  const removeFromCart = (itemId) => {
    const updatedCart = cartItems.filter((item) => item._id !== itemId);
    setCartItems(updatedCart);
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  return useContext(CartContext);
};



// import { createContext, useContext, useReducer } from "react";

// const CartStateContex = createContext();
// const CartDispatchContext = createContext();

// const reducer = (state, action) => {
//   switch(action.type) {
//     case "ADD":
//       return [
//         ...state,
//         {
//           id:action.id, 
//           name:action.name, 
//           quantity:action.quantity, 
//           size:action.size, 
//           price:action.price
//         },
//       ]
//       default:
//         console.log("Error in Reducer");
//         return state;
//   }

// }

// export const CartProvider = ({ children }) => {

//     const [state, dispatch] = useReducer(reducer,[])

//   return (
//     <CartDispatchContext.Provider value={dispatch}>
//         <CartStateContex.Provider value={state}>
//             {children}
//         </CartStateContex.Provider>
//     </CartDispatchContext.Provider>
//   )
// }

// export const useCart = () => useContext(CartStateContex);
// export const useDispatchCart = () => useContext(CartDispatchContext);





// import { ReactNode,createContext, useContext, useState } from "react"

// interface ICartContext {
//     product: any | [];
//     addToCart: (cart: any) => void;
// }

// const CartContext = createContext<ICartContext>({
//     product: [],
//     addToCart: () => {},
// });

// interface ICartContextProvider {
//     children: ReactNode;
// }

// export const CartContextProvider = ({ children }: ICartContextProvider) => {
//     const [product, setProduct] = useState<any>([])

//     const addToCart = (cart: any) => {
//         setProduct((prevCart: any) => [...prevCart, cart])
//     };

//     return (
//     <CartContext.Provider value={{ product, addToCart}}>
//         {children}
//     </CartContext.Provider>
// );

// };


// export const useCartContext = () => {
//     const context = useContext(CartContext);
//     return context;
// };
