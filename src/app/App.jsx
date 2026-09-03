import { useState } from 'react'
import '../styles/App.css'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Home from '../features/home/components/Home'
import SignUp from '../components/forms/SignUp'
import Login from '../components/forms/Login'
import Blogs from '../features/blogs/components/Blogs'

import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";

function App() {
  return (
    <BrowserRouter>
      
      <Header/>

      <main className='flex justify-center h-[calc(100vh-5rem)] py-2 px-4 md:px-6 bg-blue-200'>

      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/sign-up" element={<SignUp/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path='/blogs' element={<Blogs/>}></Route>
      </Routes>

      </main>

      <Footer/>
      
    </BrowserRouter>
  )
}

export default App
