import React, { useState, useEffect, useContext } from 'react';
import './UserProfile.css'; // Create this CSS file for styling
import userImage from '../assets/Avatar1.jpg'
import { authContext } from '../contects/authProvider';

const UserProfile = () => {
    // Example user data (replace with data fetched from your backend)
    const [userData, setUserData] = useState({
        name: "John Doe",
        email: "john.doe@example.com",
        medicines: [],
        totalSpent: 0,
    });
    const { user } = useContext(authContext);
    const loggedInUserId = user ? user.uid : null;
    console.log(loggedInUserId);

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                if (user && user.uid) {
                    // Fetch user data
                    const userResponse = await fetch(`http://localhost:5000/user/${user.uid}`);
                    const userData = await userResponse.json();
                    setUserData(userData);

                    // Fetch orders data based on the user UID
                    const ordersResponse = await fetch(`http://localhost:5000/orders/${user.uid}`);
                    const ordersData = await ordersResponse.json();

                    // Update orders array in userData
                    setUserData((prevUserData) => ({ ...prevUserData, orders: ordersData }));
                }
            } catch (error) {
                console.error('Error fetching user data:', error);
            }
        };

        fetchUserData();
    }, [user]);


    if (!user) {
        // Render loading state or redirect to login page
        return <p>Loading user information...</p>;
    }

    return (
        <div className="container">
            <div style={{ marginTop: '100px', textAlign: 'center', marginBottom: '20px' }}>
                <h1 style={{ fontSize: '40px', fontWeight: 'bold' }}>My Profile</h1>
            </div>
            <div>
                <h1 style={{ fontSize: '30px', fontWeight: 'bold', marginLeft: '20px' }}>Hi! <p className='text-blue-700'>{user.displayName}</p></h1>
                <div className='flex flex-col md:flex-row justify-center items-center'>
                    <div className='md:w-1/2 space-y-3'>
                        <h1 className="font-bold">User Information:</h1>
                        <p>Email: {user.email}</p>
                        <p>User_id: {user.uid}</p>
                    </div>
                    <div><center><img src={userImage} alt="user-image" height={300} width={300} /></center></div>
                </div>
                
            </div>
            <h1 style={{ fontSize: '30px', fontWeight: 'bold', marginLeft: '20px' }}>My Record:</h1>
            <div className="user-profile-container">
                {/* <div className="overflow-x-auto">
                <table className="table">
                    <thead>
                    <tr>
                        <th>Order</th>
                        <th>Date</th>
                        <th>Status</th>
                        <th>Total</th>
                        <th>Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    {userData.orders && userData.orders.map((order, index) => (
                    <tr key={index}>
                        <th>{order._id}</th>
                        <td>Cy Ganderton</td>
                        <td>Quality Control Specialist</td>
                        <td>Blue</td>
                    </tr>
                    ))}
                    </tbody>
                </table>
                </div> */}
                {/* profiles made by waleed  */}
               
                <div className="medicine-card">
                    <h3 style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '10px', color: 'blue' }}>Order Details</h3>
                    {userData.orders && userData.orders.map((order, index) => (
                        <div key={index} className="overflow-x-auto">
                            <table className="table">
                                <div>
                                <div>
                                <tbody>
                                    <tr>
                                        <th>Order ID</th>
                                        <td>{order._id}</td>
                                    </tr>
                                </tbody>
                                </div>
                                <div>
                                <tbody>
                                    {order.items.map((item, itemIndex) => (
                                        <tr key={itemIndex}>
                                            <th>Medicine Name</th>
                                            <td>{item.name}</td>
                                            <th>Quantity</th>
                                            <td>{item.quantity}</td>
                                            <th>Price</th>
                                            <td>{item.price}</td>
                                        </tr>
                                    ))}
                                </tbody>
                                </div>
                                </div>
                                
                            </table>
                                <div className='text-right my-6'>
                                    <p><strong>Total Amount:</strong> Rs.{order.total.toFixed(2)}</p>
                                </div>
                                <hr />
                        </div>
                    ))}
                </div>


                {/* <div className="medicine-card">
                    <h3 style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '10px', color: 'blue' }}>Order Details</h3>
                    {userData.orders && userData.orders.map((order, index) => (
                        <div key={index} className="overflow-x-auto">
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th>Order ID</th>
                                        <th>Medicine Name</th>
                                        <th>Quantity</th>
                                        <th>Price</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>{order._id}</td>
                                        <td colSpan="3"> 
                                            <table className="table">
                                                {order.items.map((item, itemIndex) => (
                                                    <tr key={itemIndex}>
                                                        <td>{item.name}</td>
                                                        <td>{item.quantity}</td>
                                                        <td>{item.price}</td>
                                                    </tr>
                                                ))}
                                            </table>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                            <p><strong>Total Amount:</strong> Rs.{order.total.toFixed(2)}</p>
                        </div>
                    ))}
                    
                   
                </div> */}
 {/* {userData.orders && userData.orders.map((order, index) => (
                        <div key={index} className="order-card">
                            <p><b>Order ID:</b> {order._id}</p>
                            <ul>
                                {order.items.map((item, itemIndex) => (
                                    <li key={itemIndex}>
                                        <p><b>Medicine Name:</b> {item.name}</p>
                                        <p><b>Quantity:</b> {item.quantity}</p>

                                    </li>
                                ))}
                            </ul>
                            <p><b>Total Amount:</b> Rs.{order.total.toFixed(2)}</p>
                        </div>
                    ))} */}

                {/* <div className="total-spent-card">
                    <h3>Total Spent</h3>
                    {userData.orders && (
                        <p>Overall Total: Rs.{userData.orders.reduce((acc, order) => acc + order.total, 0).toFixed(2)}</p>
                    )}              
                </div> */}
            </div>
        </div>
    );
};

export default UserProfile;
