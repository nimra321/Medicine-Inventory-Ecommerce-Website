import { useState } from "react";
import Swal from "sweetalert2";
import UseCart from "../hooks/useCart";
import { MdDelete } from "react-icons/md";
import { useContext } from "react";
import { authContext } from "../contects/authProvider";
import { Link } from 'react-router-dom';

const CartPage = () => {
  const [cart, refetch] = UseCart();
  const { user } = useContext(authContext);
  const [paymentMethod, setPaymentMethod] = useState("");
  const [shippingAddress, setShippingAddress] = useState('');

  const calculatePrice = (item) => {
    return item.price * item.quantity;
  };

  if (!user) {
    return <p>Loading user information...</p>;
  }

  const handleCheckout = async () => {
    try {
      const orderData = {
        userId: user.uid,
        paymentMethod: paymentMethod,
        shippingAddress: shippingAddress,
        items: cart.map((item) => ({
          medicineId: item._id,
          name: item.name,
          quantity: item.quantity,
          price: calculatePrice(item),
        })),
        total: orderTotal,
      };

      const response = await fetch('http://localhost:5000/orders', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(orderData),
      });

      console.log('order is:' + orderData);
      const data = await response.json();

      console.log('Order placed successfully:', data);
      // console.log(cart);

      // const ordersResponse = await fetch('http://localhost:5000/orders');
      // const ordersData = await ordersResponse.json();
      // console.log('Orders Collection:', ordersData);

      Swal.fire({
        title: 'Order Placed!',
        text: 'Thank you for your order.',
        icon: 'success',
      });

      refetch();
    } catch (error) {
      console.error('Error placing order:', error);
      Swal.fire({
        title: 'Error',
        text: 'There was an error placing your order. Please try again.',
        icon: 'error',
      });
    }
  };

  const handleDecrease = (item) => {
    if (item.quantity > 1) {
      fetch(`http://localhost:5000/carts/${item._id}`, {
        method: 'PUT',
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
        body: JSON.stringify({ quantity: item.quantity - 1 }),
      })
        .then((res) => res.json())
        .then((data) => {
          refetch();
        });
    } else {
      alert("Item can't be zero");
    }
  };

  const handleIncrease = (item) => {
    fetch(`http://localhost:5000/carts/${item._id}`, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
      body: JSON.stringify({ quantity: item.quantity + 1 }),
    })
      .then((res) => res.json())
      .then((data) => {
        refetch();
      });
  };

  const handleDelete = (item) => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/carts/${item._id}`, {
          method: 'DELETE',
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.message === 'Cart Item Deleted Successfully!') {
              refetch();
              Swal.fire({
                title: 'Deleted!',
                text: 'Your file has been deleted.',
                icon: 'success',
              });
            }
          });
      }
    });
  };

  const cartSubTotal = cart.reduce((total, item) => {
    return total + calculatePrice(item);
  }, 0);

  const orderTotal = cartSubTotal;

  const TCSPrice = 250.00;

  const finalPrice = cartSubTotal + TCSPrice;


  return (
    <div className="section-container">
      <div className="max-w-screen-2xl container mx-auto xl:px-24 px-4 bg-gradient-to-r from-0% from-[#FAFAFA] to-[#FCFCFC] to-100%">
        {/* banner */}
        <div className="py-36 flex flex-col items-center justify-center">
          <div className=" text-center px-4 space-y-7">
            <h2 className="md:text-5xl text-4xl font-bold md:leading-snug leading-snug">
              Items Added to The<span className="text-blue-700"> Cart</span>
            </h2>
          </div>
        </div>
        {/* TABLES  */}
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead className="bg-blue-700 text-white rounded-sm">
              <tr>
                <th>#</th>
                <th>Medicine</th>
                <th>Name</th>
                <th>Quantity</th>
                <th>Price</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img src={item.image} alt="" />
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="font-medium">{item.name}</td>
                  <td>
                    <button className="btn btn-xs" onClick={() => handleDecrease(item)}>
                      -
                    </button>
                    <input
                      type="number"
                      value={item.quantity}
                      onChange={() => console.log(item.quantity)}
                      className="w-10 mx-2 text-center overflow-hidden appearance-none"
                    />
                    <button className="btn btn-xs" onClick={() => handleIncrease(item)}>
                      +
                    </button>
                  </td>
                  <td>Rs.{calculatePrice(item)}</td>
                  <th>
                    <button className="btn btn-ghost text-red-500 btn-xs" onClick={() => handleDelete(item)}>
                      <MdDelete size={20} />
                    </button>
                  </th>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {/* CUSTOMER DETAIL  */}
        <div className="my-12 flex flex-col md:flex-row justify-between items-start">
          <div className="md:w-1/2 space-y-3">
            <h3 className="font-bold text-blue-700">Customer Details</h3>
            <p>Name: {user.displayName}</p>
            <p>Email: {user.email}</p>
            <p>User_id: {user.uid}</p>
          </div>
          <div className="md:w-1/2 space-y-3 w-full">
            <div className="space-y-3 shrink-0 max-w-sm shadow-2xl bg-base-100 px-4 py-8">
              <h3 className="font-bold text-blue-700">Cart Details</h3>
              <hr />
              <div className="overflow-x-auto">
                <table className="table">
                  <tbody>
                    {/* row 1 */}
                    <tr>
                      <th> Items</th>
                      <td>{cart.length}</td>
                    </tr>
                    <tr>
                      <th>Subtotal </th>
                      <td>Rs.{orderTotal.toFixed(2)}</td>
                    </tr>
                    <tr>
                      <th>Shipping</th>
                      <td>TCS -24 working hours ₨ 250.00 <hr className="m-2" />
                        <span className="font-semibold">Only in Pakistan.</span>
                      </td>
                    </tr>
                    <tr>
                      <th>Total  </th>
                      <td>Rs.{finalPrice.toFixed(2)}</td>
                    </tr>
                  </tbody>
                </table>
              </div><br />
                <div style={{flexDirection:'row', display: 'flex', justifyContent: 'space-around'}}>
                  <label htmlFor="shippingAddress" style={{fontWeight:'bold'}}>Add Shipping Address:</label><br/>
                  <input type="text" value={shippingAddress} onChange={(e) => setShippingAddress(e.target.value)} name="address" id="" placeholder="enter your address here" style={{border: '1px solid', borderTopColor: 'transparent', borderLeftColor: 'transparent', borderRightColor: 'transparent'}}/>
                </div>
                <br />
              <div>
                <input
                  type="radio"
                  value={paymentMethod}
                  onChange={() => setPaymentMethod("Cash on Delivery")}
                />
                <label htmlFor="cod">Cash on Delivery</label>
              </div>


              {/* <p>Total Items: {cart.length}</p> */}
              {/* <p>Total Price: Rs.{orderTotal.toFixed(2)}</p> */}
              <Link to='/' className="btn bg-blue-700 text-white" onClick={handleCheckout}>
                Place Order
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
