import { useEffect, useState } from "react"
import MedicineCard from "../components/medicineCard"
 

const OtherMedicines = () => {
    const [medicine, setMedicine] = useState([])

    useEffect(() => {
        fetch("http://localhost:5000/all-medicines").then(res => res.json()).then(data => setMedicine(data.slice(0, 10)))
    }, [])
  

  return (
    <div>
       <MedicineCard medicine={medicine} headline="Other Medicines" />
    </div>
  )
}

export default OtherMedicines