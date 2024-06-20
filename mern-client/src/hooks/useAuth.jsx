import { useContext } from "react"
import { authContext } from './../contects/authProvider';


const useAuth = () => {
    const auth = useContext(authContext)
  return auth
}

export default useAuth;