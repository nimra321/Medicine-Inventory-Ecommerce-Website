import { Elements } from "@stripe/react-stripe-js";

import CheckoutForm from "./checkoutForm";
import { loadStripe } from "@stripe/stripe-js";
import useCart from "../hooks/useCart";

// outside of a component’s render to avoid
const stripePromise = loadStripe("pk_test_51OaxyiFKg02Rq9shOzaNm1dihqZQsKu1xS6WgkdKwNGKGHeDrZ6E2LYHcAlQ1XlHs9ckU0PqmEssPVNUPotlzfBY00aLuVDfr3");

const Payment = () => {
  const [cart] = useCart();
  console.log(cart)

   // Calculate the cart price
   const cartTotal = cart.reduce((sum, item) => sum + item.price, 0);
   const totalPrice = parseFloat(cartTotal.toFixed(2));
  return (
    <div className="max-w-screen-2xl mx-auto xl:px-24 px-4 py-28">
      <Elements stripe={stripePromise}>
        <CheckoutForm price={totalPrice} cart={cart}/>
      </Elements>
    </div>
  );
};

export default Payment;
