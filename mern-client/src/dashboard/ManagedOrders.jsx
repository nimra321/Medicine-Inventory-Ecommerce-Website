import React, { useState, useEffect } from 'react';

const ManagedOrders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await fetch('http://localhost:5000/orders');
        const data = await response.json();
        setOrders(data);
      } catch (error) {
        console.error('Error fetching orders:', error);
      }
    };

    fetchOrders();
  }, []);

  return (
    <div className="container mx-auto">
      <h2 className="text-2xl font-bold mb-4">Manage Orders</h2>
      <div className="overflow-x-auto">
        <table className="table-auto w-full border-collapse">
          <thead>
            <tr className="bg-gray-200">
              <th className="px-4 py-2 align-top">User ID</th>
              <th className="px-4 py-2 align-top">Payment Method</th>
              <th className="px-4 py-2 align-top">Items</th>
              <th className="px-4 py-2 align-top">Total (PKR)</th>
              <th className="px-4 py-2 align-top">Created At</th>
              <th className="px-4 py-2 align-top">Shipping Address</th>

              {/* Add more table headers as needed */}
            </tr>
          </thead>
          <tbody>
            {orders.map(order => (
              <tr key={order._id} className="border-b">
                <td className="px-4 py-2 align-top">{order.userId}</td>
                <td className="px-4 py-2 align-top">{order.paymentMethod}</td>
                <td className="px-4 py-2 align-top">
                  {order.items.map((item, index) => (
                    <span key={index}>{item.name}{index !== order.items.length - 1 ? ', ' : ''}</span>
                  ))}
                </td>
                <td className="px-4 py-2 align-top">PKR {order.total.toFixed(2)}</td>
                <td className="px-4 py-2 align-top">{new Date(order.createdAt).toLocaleString()}</td>
                <td className="px-4 py-2 align-top">{order.shippingAddress}</td>
                {/* Render other order details */}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManagedOrders;
