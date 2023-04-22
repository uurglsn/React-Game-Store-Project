
import { Route, Routes } from "react-router-dom";

//Components

import Home from "./pages/home";
import Auth from "./pages/Sign&Register/"
import ForgotPass from "./pages/forgotPass";
import Profile from "./pages/profile"
import { Toaster } from 'react-hot-toast';
import Register from "./pages/Sign&Register/components/Register";
import Login from "./pages/Sign&Register/components/Login";
import Dashboard from "./pages/profile/components/Dashboard";
import Inbox from "./pages/profile/components/Inbox"
import Ticket from "./pages/profile/components/Tickets"
import Coupons from "./pages/profile/components/Coupons"
import Orders from "./pages/profile/components/Orders"
import Cash from "./pages/profile/components/Cash"
import Sales from "./pages/profile/components/Sales"

const App = () => {


  return (
    <>
    
      <div className='font-mainFont  dark:from-sky-100 dark:to-teal-100 dark:text-black  text-sky-700 bg-gradient-to-br from-gray-700 via-gray-900 to-black'>
      <Toaster position="top-right" reverseOrder={false} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/auth" element={<Auth />} >
            <Route index={true} element={< Login />} />
            <Route path='/auth/register' element={<Register />} />
          </Route>
          <Route path="/forgot" element={<ForgotPass />} />
          <Route path="/profile" element={<Profile />} >
            <Route index={true} element={< Dashboard />} />
            <Route path='/profile/inbox' element={<Inbox />} />
            <Route path='/profile/ticket' element={<Ticket />} />
            <Route path='/profile/coupons' element={<Coupons />} />
            <Route path='/profile/orders' element={<Orders />} />
            <Route path='/profile/cash' element={<Cash />} />
            <Route path='/profile/sales' element={<Sales />} />
          </Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
