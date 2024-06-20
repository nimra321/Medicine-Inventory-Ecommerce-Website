import BannerCard from "../home/bannerCard"


const Banner = () => {
  return (
    <div className="px-4 lg:px-24 bg-teal-100 flex items-center">
        <div className="flex w-full flex-col md:flex-row justify-between items-center gap-12 py-40">
            {/* Left side  */}
            <div className="md:w-1/2 space-y-8 h-full"> 
                <h2 className="text-5xl font-bold leading-snug text-black">Elevate Your Medicine Stock with_<span className="text-blue-700">MedAdept</span> </h2>
                <p className="md:w-4/5">
                MedAdept is your go-to solution for managing and optimizing your medicine inventory.  Whether you're a small pharmacy or a large healthcare provider, MedAdept simplifies the process, ensuring you have the right medicines at the right time. MedAdept – the key to a well-stocked and efficient management.
                </p>
                <div >
                  </div>   
         </div>

            {/* Right side  */}
            <div>
              <BannerCard></BannerCard>
            </div>
        </div>
    </div>
  )
}

export default Banner