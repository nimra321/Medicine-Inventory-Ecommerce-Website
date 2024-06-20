import { useContext } from "react"
import { authContext } from "../contects/authProvider"
import { Navigate, useLocation } from "react-router-dom";
import { Spinner } from 'flowbite-react';


const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(authContext);
    const location = useLocation();

    if(loading) {
        return (
        <div className="text-center">
 <div className="text-center">
        <Spinner aria-label="Center-aligned spinner example" />
      </div>
        </div>
        )

    }

    if(user) {
        return children;
    }

  return (
    <Navigate to="/login" state={{from: location}} replace></Navigate>
  )
}

export default PrivateRoute