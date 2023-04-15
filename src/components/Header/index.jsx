// REACT
import { useState, useEffect, Fragment } from "react";
import { Link, NavLink } from "react-router-dom";
// Headlessui
import { Menu, Transition } from '@headlessui/react'
// Redux Toolkit React Redux
import { useSelector, useDispatch } from 'react-redux';
import { changeLanguage, toRegisterOrSign } from "../../features/app/appSlice";
// React Icons
import { FaNewspaper, FaHeadphones } from "react-icons/fa"
import { MdPayments, MdQrCode, MdVideogameAsset, MdOutlineHelp } from "react-icons/md"
import { HiTranslate, HiSun } from "react-icons/hi";
import { CgProfile } from "react-icons/cg";
import { BsTwitch, BsFillKeyFill, BsFillMoonFill, BsDoorClosedFill } from "react-icons/bs"
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineSearch, AiOutlineShoppingCart, AiOutlineClose, AiOutlineForm } from "react-icons/ai";
// LanuageJSON Logo ReactCountryFlag
import languages from "../../jsons/languages/languages.json"
import ReactCountryFlag from "react-country-flag"







const Header = () => {
    const dispatch = useDispatch();
    const [theme, setTheme] = useState(() => {
        const localTheme = localStorage.getItem('theme');
        return localTheme === 'dark' ? true : false;
    });
    useEffect(() => {
        if (theme) {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
        localStorage.setItem('theme', theme ? 'dark' : 'light');

    }, [theme]);

    const toggleTheme = () => {
        setTheme(!theme);
    }
    const { language } = useSelector((state) => state.appRedux);
    const [showSidebar, setShowSidebar] = useState(false);
    const [showModal, setShowModal] = useState(false);


    return (
        <header className="flex   border-b-[1px] border-blue-950  dark:border-white shadow-2xl  max-xl:p-3 p-4 items-center justify-between">
            <div className=" shadow-2xl hidden max-xl:flex max-xl:ml-4">
                {showSidebar ? <AiOutlineClose className="flex  items-center cursor-pointer   z-50" onClick={() => setShowSidebar(!showSidebar)} /> : <GiHamburgerMenu className="flex  items-center cursor-pointer   z-50" onClick={() => setShowSidebar(!showSidebar)} />}
                <div
                    className={`top-0 left-0 w-[50vw] overflow-auto    ${theme ? " bg-gradient-to-r from-sky-100 to-teal-100 text-black" : "bg-gradient-to-br from-gray-700 via-gray-900 to-black text-sky-700"}      fixed h-full z-40  ease-in-out duration-300 ${showSidebar ? "translate-x-0 " : "translate-y-full"}`}>
                    <nav className="">
                        <ul className="flex pt-24 pl-10  gap-4      flex-col gap-x-3">
                            <li>
                                <Link className="hover:text-sky-500 transition-colors flex items-center  gap-3" to="/"><MdPayments className="  text-[32px]" /><p className=" text-sm">{languages[language].NavLink.pay}</p></Link>
                            </li>
                            <li>
                                <Link className="hover:text-sky-500 transition-colors flex items-center  gap-3" to="/"><BsFillKeyFill className="  text-[32px]" /><p className=" text-sm">{languages[language].NavLink.cd_Key}</p></Link>
                            </li>
                            <li>
                                <Link className="hover:text-sky-500 transition-colors flex items-center  gap-3" to="/"><MdQrCode className="  text-[32px]" /><p className=" text-sm">{languages[language].NavLink.epin}</p></Link>
                            </li>
                            <li>
                                <Link className="hover:text-sky-500 transition-colors flex items-center  gap-3" to="/"><BsTwitch className="  text-[32px]" /><p className=" text-sm">{languages[language].NavLink.twitch}</p></Link>
                            </li>
                            <li>
                                <Link className="hover:text-sky-500 transition-colors flex items-center  gap-3" to="/"><MdVideogameAsset className="  text-[32px]" /><p className=" text-sm">{languages[language].NavLink.products}</p></Link>
                            </li>
                            <li>
                                <Link className="hover:text-sky-500 transition-colors flex items-center  gap-3" to="/"><FaNewspaper className="  text-[32px]" /><p className=" text-sm">{languages[language].NavLink.news}</p></Link>
                            </li>
                            <li>
                                <Link className="hover:text-sky-500 transition-colors flex items-center  gap-3" to="/"><MdOutlineHelp className="  text-[32px]" /><p className=" text-sm">{languages[language].NavLink.help}</p></Link>
                            </li>
                            <li>
                                <Link className="hover:text-sky-500 transition-colors flex items-center  gap-3" to="/"><FaHeadphones className="  text-[32px]" /><p className=" text-sm">{languages[language].NavLink.contact}</p></Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
            <div className="max-xl:hidden ml-16">
                <Link to="/">
                    <h1 className="  text-3xl">UURGLSN</h1>
                </Link>
            </div>
            <nav className="">
                <ul className="flex max-xl:hidden gap-x-3">
                    <li>
                        <NavLink className={`hover:text-sky-500 transition-colors`} to="/">{languages[language].NavLink.pay}</NavLink>
                    </li>
                    <li>
                        <NavLink className={`hover:text-sky-500 transition-colors`} to="/">{languages[language].NavLink.cd_Key}</NavLink>
                    </li>
                    <li>
                        <NavLink className={`hover:text-sky-500 transition-colors`} to="/">{languages[language].NavLink.epin}</NavLink>
                    </li>
                    <li>
                        <NavLink className={`hover:text-sky-500 transition-colors`} to="/">{languages[language].NavLink.twitch}</NavLink>
                    </li>
                    <li>
                        <NavLink className={`hover:text-sky-500 transition-colors`} to="/">{languages[language].NavLink.products}</NavLink>
                    </li>
                    <li>
                        <NavLink className={`hover:text-sky-500 transition-colors`} to="/">{languages[language].NavLink.news}</NavLink>
                    </li>
                    <li>
                        <NavLink className={`hover:text-sky-500 transition-colors`} to="/">{languages[language].NavLink.help}</NavLink>
                    </li>
                    <li>
                        <NavLink className={`hover:text-sky-500 transition-colors`} to="/">{languages[language].NavLink.contact}</NavLink>
                    </li>
                </ul>
            </nav>





















            <div className="flex items-center mr-16 max-xl:mr-4  gap-x-3">







                <Menu as="div" className="relative max-lg:hidden   inline-block   z-50   text-left">
                    <div>
                        <Menu.Button className="inline-flex flex-col   border-x-[1px] border-b-[1px] border-blue-950  dark:border-white shadow-2xl  p-3 w-full justify-center gap-x-1.5 rounded-md  text-sm font-semibold  ">

                            <p className="flex items-center gap-3"> {languages[language].auth.signInRegister}</p>
                        </Menu.Button></div>
                    <Transition as={Fragment} enter="transition ease-out duration-100" enterFrom="transform opacity-0 scale-95" enterTo="transform opacity-100 scale-100" leave="transition ease-in duration-75" leaveFrom="transform opacity-100 scale-100" leaveTo="transform opacity-0 scale-95">
                        <Menu.Items className={`absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md  shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none ${theme ? "bg-gradient-to-r from-sky-100 to-teal-100  dark:text-sky-500" : "bg-gradient-to-br from-gray-700 via-gray-900 to-black  "}`}>
                            <div className={`py-1`}>
                                <Menu.Item className={` hover:text-sky-500 transition-colors flex items-center`}><Link to="/register" onClick={() => dispatch(toRegisterOrSign(true))} className='block w-full h-full px-4 py-2 text-sm'>  <p className={`pl-3  flex items-center  font-extrabold `}>  <BsDoorClosedFill className=" mr-3 " />  {languages[language].auth.signIn}</p></Link></Menu.Item>
                                <Menu.Item className={`hover:text-sky-500 transition-colors flex items-center`}><Link to="/register" onClick={() => dispatch(toRegisterOrSign(false))} className="block w-full h-full px-4 py-2 text-sm" >  <p className={`pl-3  flex  items-center  font-extrabold `}> <AiOutlineForm className="  mr-3 " />  {languages[language].auth.register}</p></Link></Menu.Item></div></Menu.Items>
                    </Transition>
                </Menu>

















                <AiOutlineSearch onClick={() => setShowModal(true)} className="hover:text-sky-500 transition-colors cursor-pointer" />
                {showModal ? (
                    <>
                        <div className="fixed z-50 top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2">
                            <div className={`rounded-xl   p-1  ${theme ? "bg-gradient-to-r from-sky-100 to-teal-100 text-black" : "bg-gradient-to-br from-gray-700 via-gray-900 to-black text-sky-700"} flex flex-col justify-center items-center`}>
                                <div className="flex flex-row items-center  p-3">
                                    <label for="search">  <AiOutlineSearch className=" flex items-center cursor-pointer hover:text-sky-500 transition-colors pb-2 text-2xl" /></label>
                                    <input id="search" name="search" type="text" className="flex items-center  border-b-[1px] border-blue-950  dark:border-white  pb-2 w-[850px]   pl-1  bg-transparent outline-none border-1" placeholder="Ara.." />
                                    <button onClick={() => setShowModal(false)}><AiOutlineClose /></button>
                                </div>


                            </div>
                        </div>



                        <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                    </>
                ) : null}












                {theme ? (<BsFillMoonFill className="hover:text-sky-500 transition-colors cursor-pointer" onClick={toggleTheme} />) : (<HiSun className="hover:text-sky-500 transition-colors cursor-pointer" onClick={toggleTheme} />)}
                <Menu as="div" className="relative  z-50   inline-block text-left">
                    <div>
                        <Menu.Button className="inline-flex w-full justify-center gap-x-1.5 rounded-md  text-sm font-semibold  "><HiTranslate className="hover:text-sky-500 transition-colors" /> </Menu.Button></div>
                    <Transition as={Fragment} enter="transition ease-out duration-100" enterFrom="transform opacity-0 scale-95" enterTo="transform opacity-100 scale-100" leave="transition ease-in duration-75" leaveFrom="transform opacity-100 scale-100" leaveTo="transform opacity-0 scale-95">
                        <Menu.Items className={`absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md  shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none ${theme ? "bg-gradient-to-r from-sky-100 to-teal-100  dark:text-sky-500" : "bg-gradient-to-br from-gray-700 via-gray-900 to-black  "}`}>
                            <div className={`py-1`}>
                                <Menu.Item className={` hover:text-sky-500 transition-colors flex items-center`}><button onClick={() => dispatch(changeLanguage("tr_TR"))} className='block w-full h-full px-4 py-2 text-sm'><ReactCountryFlag countryCode="TR" svg style={{ width: '2em', height: '2em', }} title="TR" />  <p className={`pl-3  font-extrabold `}>Türkçe</p></button></Menu.Item>
                                <Menu.Item className={`hover:text-sky-500 transition-colors flex items-center`}><button onClick={() => dispatch(changeLanguage("en_US"))} className="block w-full h-full px-4 py-2 text-sm" ><ReactCountryFlag countryCode="GB" svg style={{ width: '2em', height: '2em', }} title="UK" />  <p className={`pl-3  font-extrabold `}>English</p></button></Menu.Item></div></Menu.Items>
                    </Transition>
                </Menu>
                <AiOutlineShoppingCart />






























                <Menu as="div" className="relative   max-lg:inline-block  hidden  z-50   text-left">
                    <div>
                        <Menu.Button className="inline-flex w-full justify-center gap-x-1.5 rounded-md  text-sm font-semibold  ">
                            <CgProfile className="hover:text-sky-500 transition-colors cursor-pointer" />
                        </Menu.Button></div>
                    <Transition as={Fragment} enter="transition ease-out duration-100" enterFrom="transform opacity-0 scale-95" enterTo="transform opacity-100 scale-100" leave="transition ease-in duration-75" leaveFrom="transform opacity-100 scale-100" leaveTo="transform opacity-0 scale-95">
                        <Menu.Items className={`absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md  shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none ${theme ? "bg-gradient-to-r from-sky-100 to-teal-100  dark:text-sky-500" : "bg-gradient-to-br from-gray-700 via-gray-900 to-black  "}`}>
                            <div className={`py-1`}>
                                <Menu.Item className={` hover:text-sky-500 transition-colors flex items-center`}><Link to="/register" onClick={() => dispatch(toRegisterOrSign(true))} className='block w-full h-full px-4 py-2 text-sm'>  <p className={`pl-3  flex items-center  font-extrabold `}>  <BsDoorClosedFill className=" mr-3 " />  {languages[language].auth.signIn}</p></Link></Menu.Item>
                                <Menu.Item className={`hover:text-sky-500 transition-colors flex items-center`}><Link to="/register" onClick={() => dispatch(toRegisterOrSign(false))} className="block w-full h-full px-4 py-2 text-sm" >  <p className={`pl-3  flex  items-center  font-extrabold `}> <AiOutlineForm className="  mr-3 " />  {languages[language].auth.register}</p></Link></Menu.Item></div></Menu.Items>
                    </Transition>
                </Menu>





























            </div>
        </header >
    );
};
export default Header;