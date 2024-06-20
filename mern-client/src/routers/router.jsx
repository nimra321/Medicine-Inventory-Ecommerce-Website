import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../home/home";
import Shop from "../shop/shop";
import About from "../components/about";
import Blog from "../components/blog";
import SingleMedicine from "../shop/singleMedicine";
import DashboardLayout from "../dashboard/dashboardLayout";
import Dashboard from "../dashboard/dashboard";
import UploadMedicine from "../dashboard/uploadMedicine";
import ManageMedicine from "../dashboard/manageMedicine";
import EditMedicines from "../dashboard/editMedicines";
import SignUp from "../components/signUp";
import Login from "../components/login";
import PrivateRoute from "../privateRoute/privateRoute";
import Logout from "../components/logout";
import CartPage from "../components/cartPage";
import User from "../dashboard/user";
import UpDateProfile from "../dashboard/upDateProfile";
import UserProfile from "../components/userProfile";
import Payment from "../components/payment";
import CheckOut from "../components/checkout";
import ManagedOrders from "../dashboard/ManagedOrders";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/shop", element: <Shop /> },
      { path: "/about", element: <About /> },
      { path: "/blog", element: <Blog /> },
      { path: "/cart-page", element: <CartPage /> },
      { path: "/checkOut", element: <CheckOut /> },
      { path: "/process-checkout", element: <Payment /> },
      {
        path: "/medicine/:id",
        element: <SingleMedicine />,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/medicine/${params.id}`),
      },
      { path: "/update-profile", element: <UpDateProfile /> },
      { path: "/user-profile", element: <UserProfile /> },
    ],
  },
  {
    path: "/admin/dashboard",
    element: <DashboardLayout />,
    children: [
      {
        path: "/admin/dashboard",
        element: <PrivateRoute><Dashboard /></PrivateRoute>
      },
      {
        path: "/admin/dashboard/upload",
        element: <UploadMedicine />
      },
      {
        path: "/admin/dashboard/manage",
        element: <ManageMedicine />
      },
      {
        path: "/admin/dashboard/ManagedOrders",
        element: <ManagedOrders />
      },
      {
        path: "/admin/dashboard/edit-medicines/:id",
        element: <EditMedicines />,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/all-medicines/${params.id}`),
      },
      {
        path: "/admin/dashboard/user",
        element: <User />
      }
    ]
  },
  { path: "sign-up", element: <SignUp /> },
  { path: "login", element: <Login /> },
  { path: "logout", element: <Logout /> },
]);

export default router;
