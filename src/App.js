
import { Route, Routes } from "react-router-dom";

//Components

import Home from "./pages/home";
import Auth from "./pages/Sign&Register/"
import ReActiveCode from "./pages/ReActiveCode";
import ForgotPass from "./pages/forgotPass";
import Profile from "./pages/profile"

const App = () => {
  return (
    <>
      <div className='font-mainFont  dark:from-sky-100 dark:to-teal-100 dark:text-black  text-sky-700 bg-gradient-to-br from-gray-700 via-gray-900 to-black'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/reactive" element={<ReActiveCode />} />
          <Route path="/forgot" element={<ForgotPass />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
