import { FaEdit, FaTrashAlt } from "react-icons/fa";
import useMenu from "../hooks/useMenu"
import {Link} from 'react-router-dom'
import Swal from 'sweetalert2'
import useAxiosSecure from "../hooks/useAxiosSecure";

const ManageMedicine = () => {
  const [medicines, refetch] = useMenu();
  const axiosSecure = useAxiosSecure();
  // console.log(medicines);

  const handleDeleteItem = (item) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then(async (result) => {
      if (result.isConfirmed) {
        const res = await axiosSecure.delete(`/all-medicines/${item._id}`);
        console.log(res);
        refetch();
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success"
        });
      }
    });

  }

  return (
    <div className="w-full md:w-[970px] px-4 mx-auto">
      <h2 className="text-2xl font-bold my-4">
      Manage All <span className="text-blue-700">Medicines</span>
    </h2>
    {/* TABLE FOR MEDICINES */}
    <div>
    <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>#</th>
        <th>Image</th>
        <th>Medicine Name</th>
        <th>Price</th>
        <th>Edit</th>
        <th>Delete</th>
      </tr>
    </thead>
    <tbody>
      {
        medicines.map((item, index) => {
          return(
            <tr key={index}>
          <th>{index+1}</th>
          <td>
            <div className="flex items-center gap-3">
              <div className="avatar">
                <div className="mask mask-squircle w-12 h-12">
                  <img src={item.imageUrl} />
                </div>
              </div>
            </div>
          </td>
          <td>{item.medicineName}</td>
          <td>Rs. {item.medicinePricePKR}</td>
          <th>
            <Link to={`/admin/dashboard/edit-medicines/${item._id}`}>
              <button className="btn btn-ghost btn-xs bg-orange-400 text-white">
              <FaEdit />
              </button>
            </Link>
          </th>
          <td><button 
          onClick={() => handleDeleteItem(item)}
          className="btn btn-ghost btn-xs text-red-500">
          <FaTrashAlt />  
          </button></td>
        </tr>
          )
        
        })
      }
      {/* row 1 */}
      
    </tbody>
  </table>
</div>
    </div>
    </div>
  )
}

export default ManageMedicine