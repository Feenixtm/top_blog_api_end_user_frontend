import { useState, useEffect } from "react";

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
    <div className="flex flex-col items-center gap-2">
      <h1 className="text-[1.75rem] font-semibold">Blogs</h1>
      <span>{ backendMessage }</span>

      {
        allBlogs && allBlogs.map((blog, index) => {
          return (
            <div>
              <h2>{ blog.name }</h2>
            </div>
          )
        })
      }
    </div>
  )
}

export default Blogs;