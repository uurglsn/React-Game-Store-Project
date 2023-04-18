
import { Route, Routes } from "react-router-dom";

//Components

import Home from "./pages/home";
import Auth from "./pages/Sign&Register/"
import ForgotPass from "./pages/forgotPass";
import Profile from "./pages/profile"

import { Toaster } from 'react-hot-toast';


const App = () => {
  return (
    <>
      <Toaster position="top-right" reverseOrder={false} />
      <div className='font-mainFont  dark:from-sky-100 dark:to-teal-100 dark:text-black  text-sky-700 bg-gradient-to-br from-gray-700 via-gray-900 to-black'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/forgot" element={<ForgotPass />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
