import { useContext, useEffect, useState } from "react"
import { Card } from 'flowbite-react';
import { authContext } from "../contects/authProvider";
import Swal from 'sweetalert2'
import { useLocation, useNavigate } from 'react-router-dom';
import UseCart from "../hooks/useCart";


const Shop = () => {

  const [refetch] = UseCart();
  const [medicines, setmedicines] = useState([]);
  const { user } = useContext(authContext);
  const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem('jsonwebtoken'));


  const navigate = useNavigate();
  const location = useLocation();
  // console.log(user)

  const handleAddToCart = (medicine) => {
    if (user) {
      const cartItem = {
        menuItemId: medicine._id,
        name: medicine.medicineName,
        image: medicine.imageUrl,
        quantity: 1,
        price: medicine.medicinePricePKR,
        email: user.email,
      };
      // console.log(cartItem);
      fetch('http://localhost:5000/carts', ({
        method: "POST",
        headers: {
          'content-type': "application/json"
        },
        body: JSON.stringify(cartItem)
      }))
        .then(res => {
          if (res.ok) {
            return res.json();
          } else if (res.status === 400) {
            // Product is already in the cart
            return res.json().then(data => {
              Swal.fire({
                icon: 'info',
                title: 'Product Already in Cart',
                text: data.message, // You can customize the message based on your server response
              });
              throw new Error('Product already in cart');
            });
          } else {
            throw new Error('Server error');
          }
        })
        .then(data => {
          console.log(data);
          if (data._id) {
            Swal.fire({
              position: "center",
              icon: "success",
              title: "Medicine added on the cart.",
              showConfirmButton: false,
              timer: 1500
            });
            refetch();
          }
        })
    } else {
      Swal.fire({
        title: "Please Login?",
        text: "Without an account can't able to add products",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "SignUp Now"
      }).then((result) => {
        if (result.isConfirmed) {
          navigate('/sign-up', { state: { from: location } })
        }
      });

    }
  }

  useEffect(() => {
    fetch("http://localhost:5000/all-medicines").then(res => res.json()).then(data => setmedicines(data));
  }, [])
  return (
    <div className="mt-28 px-4 lg:px24">
      <h2 className="text-5xl font-bold text-center">All Medicines are here</h2>
      <div className="grid gap-8 my-12 lg:gird-cols-4 sm:grid-cols-2 md:grid-cols-3 md:grid-cols-1">
        {
          medicines.map((medicine, i) =>
            <Card key={i}>
              <img src={medicine.imageUrl} alt={`Image of ${medicine.medicineName}`} className="h-96" />


              <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {medicine.medicineName}
              </h5>
              <p className="font-normal text-gray-700 dark:text-gray-400">
                {medicine.medicineDescription}
              </p>

                <button className="bg-blue-700 font-semibold text-white py-2 rounded" onClick={() => handleAddToCart(medicine)}>
                  Add to Cart
                </button>
            </Card>)
        }
      </div>
    </div>
  )
}

export default Shop
