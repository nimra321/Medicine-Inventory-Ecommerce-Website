
import { Sidebar } from 'flowbite-react';
import { HiArrowSmRight, HiChartPie, HiHome, HiInbox, HiOutlineCloudUpload, HiShoppingBag, HiShoppingCart, HiSupport, HiTable, HiUser, HiViewBoards } from 'react-icons/hi';
// import userImg from "../assets/Avatar1.jpg"
import { FaCartPlus } from 'react-icons/fa6';
// import { useContext } from 'react';
// import { authContext } from '../contects/authProvider';


export const SideBar = () => {
  // const {user} = useContext(authContext)
  return (
    <Sidebar aria-label="Sidebar with content separator example">
        <Sidebar.Logo href="#" >
          <div className="text-2x1 font-bold text-blue-700 flex items-center gap-2">
          <FaCartPlus className="inline-block text-4xl" />
          <p className="text-3xl">MedAdept</p>
          </div>
          <div>
             <div className="badge badge-success badge-outline">Admin</div>
          </div>
          
      </Sidebar.Logo>
      <Sidebar.Items>
        <Sidebar.ItemGroup>
          <Sidebar.Item
            href="/admin/dashboard"
            icon={HiChartPie}
          >
            <p>
              Dashboard
            </p>
          </Sidebar.Item>
          <Sidebar.Item
            href="/admin/dashboard/upload"
            icon={HiOutlineCloudUpload}
          >
            <p>
              Add Medicines
            </p>
          </Sidebar.Item>
          <Sidebar.Item
            href="/admin/dashboard/manage"
            icon={HiInbox}
          >
            <p>
              Manage Medicines
            </p>
          </Sidebar.Item>
          <Sidebar.Item
            href="/admin/dashboard/ManagedOrders"
            icon={HiInbox}
          >
            <p>
              Manage Orders
            </p>
          </Sidebar.Item>
          <Sidebar.Item
            href="/admin/dashboard/user"
            icon={HiUser}
          >
            <p>
              Users
            </p>
          </Sidebar.Item>
          <Sidebar.Item
            href="#"
            icon={HiShoppingBag}
          >
            <p>
              Products
            </p>
          </Sidebar.Item>
          <Sidebar.Item
            href="/login"
            icon={HiArrowSmRight}
          >
            <p>
              Sign In
            </p>
          </Sidebar.Item>
          <Sidebar.Item
            href="/Logout"
            icon={HiTable}
          >
            <p>
              Log Out
            </p>
          </Sidebar.Item>
        </Sidebar.ItemGroup>
        <Sidebar.ItemGroup>
          <Sidebar.Item
            href="/"
            icon={HiHome}
          >
            <p>
              Home
            </p>
          </Sidebar.Item>
          <Sidebar.Item
            href="/shop"
            icon={HiShoppingCart}
          >
            <p>
              Shop
            </p>
          </Sidebar.Item>
          <Sidebar.Item
            href="#"
            icon={HiSupport}
          >
            <p>
              Help
            </p>
          </Sidebar.Item>
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
  )
}
