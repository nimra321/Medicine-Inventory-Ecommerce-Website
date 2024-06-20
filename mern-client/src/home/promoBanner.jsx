
import { Link } from "react-router-dom"
import medPic from '../assets/popMedicine.jpeg'


const PromoBanner = () => {
  return (
    <div className="mt-16 py-12 bg-teal-100 px-4 lg:px-24">
        <div className="flex flex-col md:flex-row justify-between items-center gap-12">
            <div className="md:w-1/2">
                <h2 className="text-4xl font-bold mb-6 leading-snug">
                    Explore Our Latest Insights: Click to Discover More in Our Blog</h2>
                <Link to="/blog" className="mt:12 block"><button className="bg-blue-700 text-white font-semibold px-5 py-2 rounded hover:bg-black transition-all duration-300">
                Start Reading
                  </button></Link>
            </div>
            <div>
                <img src={medPic} alt=""  />
            </div>
        </div>
    </div>
  )
}

export default PromoBanner