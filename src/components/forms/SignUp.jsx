import { useState } from "react";
import { Link } from "react-router-dom"

const SignUp = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const url = "http://localhost:5050/auth/sign-up"

  async function signUp(e) {
    // console.log("Signing up...");

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username: username, password: password })
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${ response.status }`);
      }

      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error("Sign Up Failed:", error);
    }
  }

  return (
    <div className='flex flex-col items-center self-center w-[375px] bg-white border rounded-2xl px-8 py-6 h-fit'>
      <h1 className="text-[2.5rem] font-semibold self-center mb-6">Sign up</h1>

      <form action="" className="flex flex-col gap-4 w-full">

        <input 
          className="border py-2 px-3" 
          type="text" 
          placeholder='Username' 
          required
          value={ username }
          onChange={ (e) => setUsername(e.target.value) }
        />
        
        <input 
          className="border py-2 px-3" 
          type="password" 
          placeholder='Password' 
          required
          value={ password }
          onChange={ (e) => setPassword(e.target.value) }
        />

        <button className="form-button" type="button" onClick={(e) => signUp(e)}>Sign Up</button>

      </form>

      <div className='flex flex-col self-start mt-4'>
        <span>Already have an account? <Link to="/login">Login</Link></span>
        <span>Don't want to make an account? <Link to="/">Try Guest Mode</Link></span>
      </div>
    </div>    
  )
}

export default SignUp