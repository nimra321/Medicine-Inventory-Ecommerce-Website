import React from "react";
import { FaUser } from "react-icons/fa";

const Profile = ({ user }) => {
  return (
    <div>
      <div className="drawer drawer-end">
        <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          <label htmlFor="my-drawer-4" className="drawer-button btn bg-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              {
                user.photoURL ? <img alt="Tailwind CSS Navbar component" src={user.photoURL} />
                  : <img alt="Tailwind CSS Navbar component" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
              }
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
    </div>
  );
};

export default Profile;
