
import { useLoaderData } from "react-router-dom";

const SingleBlog = () => {
  const data = useLoaderData();
  const { title, image_Url, description, descriptions, descriptionss } = data;
  return (
    <div>
      {/* <div className='py-28  bg-gray-400 text-center text-black px-4'> */}
      <h2 className="text-4xl max-w-7xl mx-auto text-center mt-28 lg:text-5xl leading-snug font-bold mb-5">
        {title}
      </h2>

      <div className="max-w-7xl mx-auto my-12">
        <div className="lg:w-3/4 mx-auto">
          <div>
            <img src={image_Url} alt="" className="w-full mx-auto rounded" />
          </div>
          <h2 className="text-3xl font-bold mb-4 text-blue-500 cursor-pointer mt-8">
            {title}
          </h2>
          <div>
            <p className="text-xl mt-5">{description}</p>
          </div>

          <div>
            <p className="text-xl mt-5">{descriptions}</p>
          </div>

          <div>
            <p className="text-xl mt-5">{descriptionss}</p>
          </div>
        </div>
      </div>

      <h2 className='text-3xl max-w-7xl mx-auto text-center my-7 lg:text-4xl italic leading-snug font-bold'>Thanks For Reading</h2>

    </div>
  );
};

export default SingleBlog;