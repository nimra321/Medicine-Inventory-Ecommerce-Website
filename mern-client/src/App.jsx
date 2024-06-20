
import { Outlet } from 'react-router-dom'
import './App.css'
import Navbar from './components/navbar'
import MyFooter from './components/myFooter'
import {  CartProvider } from './contects/cardContext'
import Cart from './components/cart'
import { useContext } from 'react'
import { authContext } from './contects/authProvider'

function App() {

  const {loading} = useContext(authContext);

  return (
    <CartProvider>
      {
        loading ? <p>Loading.....</p> : <div>
        <Navbar/>
          <div className='min-h-screen'>
            <Outlet/>
          </div>
        <MyFooter/>
        <Cart />
        </div>
      }
      
    </CartProvider>
  )
}

export default App
