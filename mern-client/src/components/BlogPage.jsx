import{ useEffect, useState } from 'react'
import BlogCard from './blogCard';


const BlogPage = () => {
  const [blogs, setBlogs] = useState([]);
  useEffect(()=>{
    async function fetchBlogs() {
        let url = 'http://localhost:5000/blog'

        const response = await fetch(url);
        const data = await response.json();
        // console.log(data);
        setBlogs(data);
    }
    fetchBlogs();
}, [])

  return (
    <div>
    <div>
      <BlogCard blogs={blogs}/>
    </div>
    </div>
  )
}

export default BlogPage;