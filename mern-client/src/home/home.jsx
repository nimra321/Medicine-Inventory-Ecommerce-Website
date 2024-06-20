import Banner from "../components/banner"
import OtherMedicines from "./otherMedicines"
import PopMedicine from "./popMedicine"
import PopularMedicines from "./popularMedicines"
import PromoBanner from "./promoBanner"
import Review from "./review"



const Home = () => {
  return (
    <div>
      <Banner />
      <PopularMedicines />
      <PopMedicine />
      <PromoBanner/>
      <OtherMedicines />
      <Review/>
    </div>
    
  )
}

export default Home