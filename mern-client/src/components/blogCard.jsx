import { Link } from 'react-router-dom';

const BlogCard = ({blogs}) => {
  const filteredBlogs = blogs;

  return (
      <div className='grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8 my-8'>
          {
              filteredBlogs.map((blog, index)=> 
                  <div key={`${blog._id}-${index}`}>
                      <Link to={`/blog/${blog._id}`} className='p-6 shadow-lg rounded-md cursor-pointer'>
                          <div>
                              <img src={blog.image_Url} alt="" className='w-full'/>
                          </div>
                          <h3 className='mt-4 mb-2 font-bold hover:text-blue-600 cursor-pointer'>{blog.name}</h3>
                          <p className='mb-2 text-2xl font-bold text-gray-600'>{blog.title}</p>
                          <p className='text-gray-500'>{blog.description && blog.description.slice(0, 150)}....</p>
                      </Link>
                  </div>
              )
          }
      </div>
  )
}

export default BlogCard;



// import { Link } from 'react-router-dom';



// const BlogCard = ({blogs}) => {
//     const filteredBlogs = blogs;

//   return (
//     <div className='grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8 my-8'>
//     {
//         filteredBlogs.map((blog)=> <Link to={`/blog/${blog._id}`} key={blogs._id} className='p-6 shadow-lg rounded-md cursor-pointer'>
//         <div key={blog._id}>
//         <img src={blog.image_Url} alt="" className='w-full'/>
//         </div>
//         <h3 className='mt-4 mb-2 font-bold hover:text-blue-600 cursor-pointer'>{blog.name}</h3>
//         <p className='mb-2 text-2xl font-bold text-gray-600'>{blog.title}</p>
//         <p className='text-gray-500'>{blog.description && blog.description.slice(0, 150)}....</p>
//         </Link>)
//     }
//     </div>
//   )
// }

// export default BlogCard