import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Signup from "./pages/signup/Signup.jsx";
import UserOwner from "./pages/UserOwner/UserOwner.jsx";
import Login from "./pages/login/Login.jsx";
import Admin from "./pages/Admin/dashboard/AdminDashboard.jsx";
import SearchPage from "./pages/SearchPage/SerchPage.jsx";
import Userform from "./pages/profiles/Userprof.jsx";
import Ownerform from "./pages/profiles/Ownerr.jsx";
import WishList from "./pages/WishList/WishList.jsx";
import Contact from "./pages/contact&about/ContactAbout.jsx";
import Uploadform from "./pages/upload/Upload-image.jsx";
import { WishlistProvider } from "./Context/WishlistContext.jsx";
import Owner from "./pages/ownerHome/OwnerHome.jsx";
import PropertyDetails1 from "./pages/property details/Propperty.jsx";
import EditProperty from "./pages/Owner's edit/ownersedit.jsx";
import Support from "./pages/Admin/dashboard/Support.jsx";
import Provider from "./pages/Admin/dashboard/ProvidersAccounts.jsx";
import Accomodations from "./pages/Admin/dashboard/Accommodations.jsx";
import Dectivated from "./pages/Admin/dashboard/Deactivatedaccounts.jsx";
import User from "./pages/Admin/dashboard/UsersAccounts.jsx";
import PrivateRoute from "./Context/PrivateRoute.jsx";

const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/Getstarted", element: <UserOwner /> },
  { path: "/Signup/:userType", element: <Signup /> },
  { path: "/Login", element: <Login /> },
  { path: "/Admin", element: <PrivateRoute element={<Admin />} /> },
  { path: "/search", element: <SearchPage /> },
  {
    path: "/wishlist",
    element: (
      <PrivateRoute
        element={
          <WishlistProvider>
            <WishList />
          </WishlistProvider>
        }
      />
    ),
  },
  { path: "/userform", element: <PrivateRoute element={<Userform />} /> },
  { path: "/ownerform", element: <PrivateRoute element={<Ownerform />} /> },
  { path: "/contact", element: <Contact /> },
  { path: "/upload", element: <PrivateRoute element={<Uploadform />} /> },
  { path: "/owner", element: <PrivateRoute element={<Owner />} /> },
  { path: "/details/:id", element: <PropertyDetails1 /> },
  { path: "/edit/:id", element: <PrivateRoute element={<EditProperty />} /> },
  { path: "/support", element: <Support /> },
  { path: "/provider", element: <Provider /> },
  { path: "/accomodations", element: <Accomodations /> },
  { path: "/deactivated", element: <PrivateRoute element={<Dectivated />} /> },
  { path: "/user", element: <PrivateRoute element={<User />} /> },
]);

export default router;
