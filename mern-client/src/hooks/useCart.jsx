import { useContext } from "react"
import { authContext } from "../contects/authProvider"
import { useQuery } from "@tanstack/react-query";


const UseCart = () => {

    const {user} = useContext(authContext);

    const { refetch, data:cart = [] } = useQuery({
        queryKey: ['carts', user?.email],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/carts?email=${user?.email}`)
            return res.json()
          },
    })
    
  return [cart, refetch]
}

export default UseCart