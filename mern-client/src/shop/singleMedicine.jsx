// SingleMedicine.js
import React, { useEffect } from "react";
import { useLoaderData, useParams } from "react-router-dom";

const SingleMedicine = () => {
  const { id } = useParams();
  const { _id, medicineName, imageUrl } = useLoaderData();

  // Fetch medicine details based on the ID
  useEffect(() => {
    fetch(`http://localhost:5000/single-medicine/${id}`)
      .then(res => res.json())
      .then(data => {
        console.log(data);
      })
      .catch(error => {
        console.error('Error fetching single medicine:', error.message);
      });
  }, [id]);

  return (
    <div className="mt-28 px-4 lg:px-24">
      <img src={imageUrl} alt={`Image of ${medicineName}`} className="h-96" />
      <h2>{medicineName}</h2>
      {/* Additional details can be added here */}
    </div>
  );
}

export default SingleMedicine;

