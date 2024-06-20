import { useQuery } from "@tanstack/react-query"
import { FaTrashAlt, FaUsers } from "react-icons/fa";


const User = () => {

  const { refetch, data: users = [] } = useQuery({
    queryKey: ['users'],
    queryFn: async () => {
        const res = await fetch(`http://localhost:5000/user`)
        return res.json()
      },
})
console.log(users);

  return (
    <div>
      <div className="flex items-center justify-between mx-4 my-4">
        <h5>All Users</h5>
        <h5>Total Users: {users.length}</h5>
      </div>
      {/* TABLE */}
      <div>
      <div className="overflow-x-auto">
  <table className="table table-zebra md:w-[870px]">
    {/* head */}
    <thead className="bg-blue-700 text-white rounded-lg">
      <tr>
        <th>#</th>
        <th>Name</th>
        <th>Email</th>
        <th>Role</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
    {
          users.map((user, index) => (
            <tr key={index}>
              <th>{index+1}</th>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>
              {
                user.role === 'admin' ? 'Admin' : (
                <button className="btn btn-xs btn-circle bg-indigo-500 text-white">
                  <FaUsers />
                </button>
                )
              }
              </td>
              <td>
                <button className="btn btn-xs bg-orange-400 text-white">
                <FaTrashAlt />
                </button>
              </td>
            </tr>
          ))
        }
      
    </tbody>
  </table>
</div>
      </div>
      
    </div>
  )
}

export default User