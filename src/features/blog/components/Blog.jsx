import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

const Blog = () => {
    const [blog, setBlog] = useState({});

    const id = useParams().id;
    const url = `http://localhost:5050/blogs/${ id }`

    useEffect(() => {
        async function getBlog() {
            try {
                const response = await fetch(url);

                if (!response.ok) {
                    throw new Error("HTTP Error! Status: ", response.status);
                }

                const data = await response.json();
                console.log(data);
                setBlog(data.blog);

            } catch (error) {
                console.error("An error occurred while trying to retrieve this blog: ", error);
            }
        }

        getBlog();
    }, [])
  
    return (
        <div className='flex flex-col gap-6 py-4 w-full max-w-[640px]'>
            <div className='flex flex-col gap-4'>
                <h1 className='text-[1.5rem] font-semibold'>{ blog.title }</h1>
                <p>{ blog.content }</p>
                <div className='flex justify-between'>
                    <p>Author Id: { blog.authorId }</p>
                    <p>{ blog.dateCreated }</p>
                </div>
            </div>

            <div className='flex flex-col'>
                <label htmlFor="">Comment Here:</label>
                <textarea name="" id="" className='border p-2 h-[6rem]'></textarea>
                <button className='add-comment-btn max-w-[8rem] border py-1 px-2 mt-2 self-end'>Add Comment</button>
            </div>

            <div>
                <h2>All Comments:</h2>
                <ul>
                    { blog.comments && blog.comments.map((comment, index) => {
                        return (
                            <p>Comment { index }</p>
                        )
                    }) }
                </ul>
            </div>
        </div>
    )
}

export default Blog