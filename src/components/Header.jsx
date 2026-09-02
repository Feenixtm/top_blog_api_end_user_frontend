import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header className='flex justify-between py-2 px-4 md:px-6 bg-blue-100'>
        <div className='flex gap-4'>
            <Link to={"/"}>Home</Link>
            <Link to={"/blogs"}>Blogs</Link>
        </div>

        <div className='flex gap-4'>
            <Link to={"/sign-up"}>Sign Up</Link>
            <Link to={"/login"}>Login</Link>
        </div>
    </header>
  )
}

export default Header