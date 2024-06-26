import { useContext, useState } from "react"
import { authContext } from "../contects/authProvider"
import { useLocation, useNavigate } from "react-router-dom";


const Logout = () => {
    const {logOut} = useContext(authContext);
    const location = useLocation();
    const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem('jsonwebtoken'));

    
    const from = location.state?.from?.pathname || "/";

    const handleLogout = () => {
      localStorage.removeItem('jsonwebtoken');
      setIsLoggedIn(false);
      navigate('/login');
    };
  
    // const handleLogout =() => {
    //     logOut().then(() => {
    //         // Sign-out successful.
    //         alert("Sign-out successfull....!!!!!");
    //     navigate(from, {replace: true})

    //       }).catch((error) => {
    //         // An error happened.
    //       });
    // }
  return (
    <div className="h-screen bg-teal-100 flex items-center justify-center">
        <button className="bg-red-700 px-8 py-2 text-white rounded" onClick={handleLogout}>Logout</button>
    </div>
  )
}

export default Logout