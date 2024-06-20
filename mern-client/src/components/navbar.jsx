import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { FaBarsStaggered, FaCartPlus, FaXmark } from "react-icons/fa6";
import { authContext } from "../contects/authProvider";
import UseCart from "../hooks/useCart";
import { FaUser } from "react-icons/fa";
import Profile from "./profile";

const Navbar = () => {
  const [cart, refetch] = UseCart();
  const { user } = useContext(authContext); // Get user context
  const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem('jsonwebtoken'));
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);



  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navItems = [
    { link: "Home", path: "/" },
    { link: "About", path: "/about" },
    { link: "Shop", path: "/shop" },
    { link: "Dashboard", path: "/admin/dashboard" },
    { link: "Blog", path: "/blog" }
  ];

  return (
    <header className="w-full bg-transparent fixed top-0 right-0 left-0 transition-all ease-in duration-300">
      <nav className={`py-4 lg:px-24 px-4 ${isSticky ? "sticky top-0 left-0 right-0 bg-blue-300" : ""}`}>
        <div className="flex justify-between items-center text-base gap-8">
          <Link to="/" className="text-2x1 font-bold text-blue-700 flex items-center gap-2">
            <FaCartPlus className="inline-block text-4xl" />
            <p className="text-3xl">MedAdept</p>
          </Link>
          <ul className="md:flex space-x-12 hidden">
            {navItems.map(({ link, path }) => (
              <Link key={path} to={path} className="block text-base text-black font-bold uppercase cursor-pointer hover:text-blue-700">
                {link}
              </Link>
            ))}
          </ul>
          <Link to='/cart-page' className="icon_wrapper relative">
            <AiOutlineShoppingCart className="hover:text-blue-700 cursor-pointer font-bold" />
            <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1">{cart.length || 0}</span>
          </Link>
          <div>
            {isLoggedIn ? <div>
              <div className="drawer drawer-end">
                <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                  <label htmlFor="my-drawer-4" className="drawer-button btn bg-ghost btn-circle avatar">
                    <div className="w-10 rounded-full">
                       <img alt="Tailwind CSS Navbar component" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                    </div>
                  </label>
                </div>
                <div className="drawer-side overflow-x-hidden">
                  <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay"></label>
                  <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
                    {/* Sidebar content here */}
                    <li><a href="/user-profile">Profile</a></li>
                    <li><a href="/update-profile">Setting</a></li>
                    <li><a href="/Logout">Logout</a></li>
                  </ul>
                </div>
              </div>
            </div> : (
            <button className="flex justify-between">
              <Link to="/login" className="btn bg-blue-700 rounded-full px-6 text-white flex items-center gap-2 hover:text-blue-700">
                <FaUser />Login
              </Link>
            </button>
            )}
          </div>
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-black outline:name">
              {isMenuOpen ? <FaXmark className="h-5 w-5 text-black" /> : <FaBarsStaggered className="h-5 w-5 text-black" />}
            </button>
          </div>
        </div>
        <div className={`space-y-4 px-4 mt-12 py-7 bg-blue-700 ${isMenuOpen ? "block fixed top-o right-0 left-0" : "hidden"}`}>
          {navItems.map(({ link, path }) => (
            <Link key={path} to={path} className="block text-base text-white uppercase cursor-pointer">
              {link}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
