
import { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { authContext } from "../contects/authProvider"
import goggleLogo from '../assets/google-logo.png'
import swal from 'sweetalert';


const SignUp = () => {
  const navigate = useNavigate();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  async function register(e) {
    e.preventDefault()

    const response = await fetch('http://localhost:5000/register', {
      method: 'POST',
      body: JSON.stringify({ username, password, email }),
      headers: { 'Content-Type': 'application/json' },
    })
    if (response.status === 200) {
      swal("Success!", "Your are registered successfully", "success");
      navigate('/login');
    } else {
      swal("Error!", "Failed to registered", "error");
    }
  }

  return (
    <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
      <div className="relative py-3 sm:max-w-xl sm:mx-auto">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-300 to-blue-600 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
        <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
          <div className="max-w-md mx-auto">
            <div>
              <h1 className="text-2xl font-semibold">Sign Up Form</h1>
            </div>
            <div className="divide-y divide-gray-200">
              <form onSubmit={register} className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                <div className="relative">
                  <input id="email" name="username" value={username} onChange={(e) => setUsername(e.target.value)} type="text" className="peer h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-rose-600" placeholder="Username" />
                </div>
                <div className="relative">
                  <input id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} type="text" className="peer h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-rose-600" placeholder="Email address" />
                </div>
                <div className="relative">
                  <input id="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} type="password" className="peer h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-rose-600" placeholder="Password" />
                </div>

                <p>If you have an account. Please <Link to="/login" className="text-blue-600 underline">Login</Link> Here</p>

                <div className="relative">
                  <button className="bg-blue-500 text-white rounded-md px-6 py-2">Sign up</button>
                </div>
              </form>
            </div>

            <hr />
            {/* <div className='flex w-full items-center flex-col mt-5 gap-3'>
              <button className='block'><img src={goggleLogo} alt='' className='w-12 h-12 inline-block ' />Login with Google</button>
            </div> */}

          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp


// import React, { useState } from 'react';
// import swal from 'sweetalert';
// import { useNavigate } from 'react-router-dom';


// function SignUp() {
//   const navigate = useNavigate();
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [email, setEmail] = useState('');

//   async function register(e) {
//     e.preventDefault()

//     const response = await fetch('http://localhost:5000/register', {
//       method: 'POST',
//       body: JSON.stringify({ username, password, email }),
//       headers: { 'Content-Type': 'application/json' },
//     })
//     if (response.status === 200) {
//       swal("Success!", "Your are registered successfully", "success");
//       navigate('/login');
//     } else {
//       swal("Error!", "Failed to registered", "error");
//     }
//   }


//   return (
//     <div className="form-container">
//       <h2>Register</h2>
//       <form onSubmit={register}>
//         <input type="text" name="username" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
//         <input type="password" name="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
//         <input type="email" name="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
//         <button type="submit">Register</button>
//       </form>
//     </div>
//   )
// }

// export default SignUp