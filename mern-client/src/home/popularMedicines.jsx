import { useEffect, useState } from "react"
import MedicineCard from "../components/medicineCard"


const PopularMedicines = () => {

    const [medicine, setMedicine] = useState([])

    
    
    useEffect(() => {
        fetch("http://localhost:5000/all-medicines").then(res => res.json()).then(data => setMedicine(data.slice(0, 6)))
    }, [])

  return (
    <div>
       <MedicineCard medicine={medicine} headline="Common Medicines" />
    </div>
  )
}

export default PopularMedicines