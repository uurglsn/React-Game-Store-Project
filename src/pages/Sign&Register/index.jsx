import backgroundImage from "./images/registerBackground.png"
import {  useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import languages from "../../jsons/languages/languages.json"
import { Outlet } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";


const Auth = () => {
    const { language } = useSelector((state) => state.theme);
    const { user } = useSelector((state) => state.auth);
  
    const navigate = useNavigate();
    useEffect(() => {
        if (user || localStorage.getItem("user")) {
            navigate("/");
        }
    }, [navigate, user]);

    return (
        <div className=' overflow-auto   max-h-screen flex  h-screen w-screen '>
            <div className=' font-mainFont  dark:from-sky-100 dark:to-teal-100 dark:text-black  text-sky-700 bg-gradient-to-br from-gray-700 via-gray-900 to-black    border-r-4 border-black  max-xl:w-full  w-1/2'>
                <div className="flex     justify-around        m-10">
                    <Link to="/terms" className=" text-center hover:text-sky-500 transition-colors">{languages[language].auth.membershipTerms} </Link>
                    <Link className=" text-center hover:text-sky-500 transition-colors" to="/">{languages[language].auth.mainPageNav}</Link>
                </div>
                <div className=" flex mb-5  justify-center pt-10">
                    <NavLink to='/auth' end className={({ isActive }) => (isActive ? 'bg-white  dark:text-white   dark:bg-black  text-black  p-2 rounded transition-colors' : 'bg-black hover:text-sky-500 dark:text-sky-500 p-2 rounded transition-colors  dark:hover:bg-white')}>{languages[language].auth.signIn}</NavLink>
                    <NavLink to='/auth/register' className={({ isActive }) => (isActive ? 'bg-white  dark:text-white   dark:bg-black  text-black  p-2 rounded transition-colors' : 'bg-black hover:text-sky-500 dark:text-sky-500 p-2 rounded transition-colors  dark:hover:bg-white')}               >{languages[language].auth.register}</NavLink>
                </div>
                <Outlet />
            </div>
            <div className='    max-xl:hidden  w-1/2'>
                <img alt={[]} src={backgroundImage} className='opacity-70   z-10   dark:opacity-100  w-full h-full  object-right  object-cover' ></img >
            </div>
        </div>
    );
}
export default Auth;