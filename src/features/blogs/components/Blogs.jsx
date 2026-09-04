import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Blogs = () => {
  const [allBlogs, setAllBlogs] = useState([]);
  const [backendMessage, setBackendMessage] = useState("");

  useEffect(() => {

    const url = "http://localhost:5050/blogs";

    async function getAllBlogs () {
      try {
        const response = await fetch(url);

        const data = await response.json();
        console.log(data);

        setAllBlogs(data.allBlogs);
        setBackendMessage(data.message);

      } catch (error) { 
        console.error("An error occurred while trying to retrieve all blogs: ", error);
      }
    };

    getAllBlogs();

  }, [])

  return (
    <div className="flex flex-col items-center gap-2 px-4 my-4">
      <h1 className="text-[1.75rem] font-semibold">Blogs</h1>
      <span className="mb-4">{ backendMessage }</span>

      <div className="flex justify-center flex-wrap gap-4">
        {
          allBlogs && allBlogs.map((blog, index) => {
            return (
              <div key={`${blog.title}-${index}`} className="flex flex-col items-center p-4 gap-2 border w-full max-w-[325px]">
                <h2 className="font-semibold italic">{ blog.title.toLocaleUpperCase() }</h2>
                <p className="text-center">{ blog.content }</p>
                <Link to={`/blogs/${ blog.id }`}><span className="link-tag">View Blog</span></Link>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default Blogs;