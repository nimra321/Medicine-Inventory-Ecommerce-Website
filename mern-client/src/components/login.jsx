import { useContext, useState } from 'react';
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom';
import { authContext } from "../contects/authProvider"
import goggleLogo from '../assets/google-logo.png'
import axios from 'axios';

const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [redirect, setRedirect] = useState('');
  const [credentials, setCredentials] = useState({})

  const handleChange = (e) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value
    })
  }

  // async function login(e) {
  //   e.preventDefault();

  //   const requestOptions = {
  //     method: "POST",
  //     headers: { "Content-Type": "application/json" },
  //     body: JSON.stringify({
  //       email: email,
  //       password: password,
  //     }),
  //   };

  //   fetch('http://localhost:5000/login', requestOptions)
  //     .then((response) => response.json())
  //     .then((data) => {
  //       setEmail("");
  //       setPassword("");

  //       // console.log(data);

  //       const access = data.access_token;
  //       const refresh = data.refresh_token;
  //       localStorage.setItem("accessToken", access);
  //       localStorage.setItem("refreshToken", refresh);
  //     });
  // }

  const handleLogin = (e) => {
    // perform the login request 
    e.preventDefault();

    axios.post('http://localhost:5000/login', {
      email: credentials.email,
      password: credentials.password
    }).then(response => {
      if (response.data) {
        const token = response.data.token
        localStorage.setItem('jsonwebtoken', token)
        // set default headers 
        // setAuthenticationHeader(token)
        console.log(token)
        navigate('/');
      }
    }).catch(error => {
      console.log(error)
    })

  }


  if (redirect) {
    return <Navigate to={'/'} />
  }


  return (
    <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
      <div className="relative py-3 sm:max-w-xl sm:mx-auto">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-300 to-blue-600 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
        <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
          <div className="max-w-md mx-auto">
            <div>

              <h1 className="text-2xl font-semibold">Log in Form</h1>
            </div>
            <div className="divide-y divide-gray-200">
              <form onSubmit={handleLogin} className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                <div className="relative">
                  <input id="email" name="email"  onChange={handleChange} type="text" className="peer h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-rose-600" placeholder="Email address" />
                </div>
                <div className="relative">
                  <input id="password" name="password"  onChange={handleChange} type="password" className="peer h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-rose-600" placeholder="Password" />
                </div>
                {/* {error ? <p className='text-red-600 text-base'>Email or Password is not correct</p> : ""} */}
                <p>If you have not an account. Please <Link to="/sign-up" className="text-blue-600 underline">Sign Up</Link> Here</p>

                <div className="relative">
                  <button className="bg-blue-500 text-white rounded-md px-6 py-2">Login</button>
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
  )
}

export default Login







// import React, { useState } from 'react';
// import { Navigate,Link } from 'react-router-dom'
// import swal from 'sweetalert';

// function Login() {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [redirect, setRedirect] = useState('');

//   async function login(e) {
//     e.preventDefault()

//     const response = await fetch('http://localhost:5000/login', {
//       method: 'POST',
//       body: JSON.stringify({ email, password }),
//       headers: { 'Content-Type': 'application/json' },
//       credentials: 'include',
//     })
//     console.log(response);
//     if (response.ok) {
//       setRedirect(true);
//       swal("Success!", "Your are login successfully", "success");
//     } else {
//       swal("Error!", "check your credentials!", "error");
//     }
//   }

//   if (redirect) {
//     return <Navigate to={'/'} />
//   }

//   return (
//     <div className="form-container">
//       <h2>Login</h2>
//       <form onSubmit={login}>
//         <input type="text" name="email" placeholder="email" value={email} onChange={(e) => setEmail(e.target.value)} />
//         <input type="password" name="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
//         <button type="submit">Login</button>
//       </form>
//       <div className="link-container">
//         Don't have an account? <Link to='/sign-up'>Register</Link>
//       </div>
//     </div>
//   );
// }

// export default Login;