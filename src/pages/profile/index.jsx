
import Header from '../../components/Header';
import Announcement from '../../components/Announcement';
import { RiDashboardFill, RiCoupon3Fill } from "react-icons/ri"
import { FaInbox } from "react-icons/fa"
import { BsFillTicketFill, BsFillCartFill } from "react-icons/bs"
import { IoIosCash } from "react-icons/io"
import { MdOutlineShoppingCartCheckout } from "react-icons/md"
import profilePhoto from "./images/profile.jpeg"
import { NavLink, Outlet } from "react-router-dom";
import Footer from '../../components/Footer';
import Verification from './components/Verification';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import { toast } from 'react-hot-toast';
import { uploadBytes, ref, getDownloadURL } from 'firebase/storage';
import { useDispatch } from 'react-redux';
import { auth, update, storage } from '../../firebase/auth';
import { loginIn } from '../../features/auth/authSlice';
import { useRef } from 'react';
import { useEffect } from 'react';

const Profile = () => {
    const dispatch = useDispatch()
    const { user } = useSelector((state) => state.auth);
    const inputFileRef = useRef(null);
    const handleImageClick = () => {
        inputFileRef.current.click();
    };
    const [image, setImage] = useState('')
    const [, setUrl] = useState('')


    useEffect(() => {
        if (image) {
            const imageRef = ref(storage, user.uid);
            uploadBytes(imageRef, image)
                .then(() => {
                    getDownloadURL(imageRef)
                        .then((url) => {
                            setUrl(url);
                            console.log(url);
                            update({
                                photoURL: url,
                            })
                                .then(() => {
                                    console.log(storage);
                                    dispatch(loginIn(auth.currentUser));
                                    toast.success("Profil Güncellendi");
                                })
                                .catch(() => {
                                    toast.error("hata");
                                });
                        })
                        .catch((error) => toast.error(error.code));
                })
                .catch((error) => toast.error(error.code));
        }
    }, [image, dispatch, user.uid]);
    return (

        <>
            <Verification />
            <Announcement />
            <Header />
            <div className='grid  grid-cols-12'>

                <aside className="flex flex-col  col-span-2  pt-10 w-64     transition-transform " >
                    <div className='flex  pb-4 flex-col items-center'>
                        <div className='flex flex-col'>
                            <input
                                className="hidden"
                                ref={inputFileRef}
                                type="file"
                                onChange={(e) => setImage(e.target.files[0])}
                            />
                            <img
                                onClick={handleImageClick}
                                alt={[]}
                                className="w-32 h-32 cursor-pointer rounded-full transition-all hover:opacity-100 opacity-90"
                                src={user.photoURL ? user.photoURL : profilePhoto}
                            />
                        </div>

                        <span className="text-sm">{user.email}</span>
                        <p className="text-xs">{user.displayName}</p>
                    </div>
                    <div className="h-full px-3 py-4 overflow-y-auto">

                        <NavLink to="/profile" end className={({ isActive }) => (isActive ? 'bg-black  flex  gap-x-2 p-2 dark:text-white   dark:bg-black    rounded-lg hover:text-sky-500 transition-colors  text-white ' : ' flex    gap-x-2 p-2     rounded-lg  transition-colors hover:text-sky-500 dark:text-sky-500    dark:hover:text-sky-700')} ><RiDashboardFill className='text-2xl' />Dashboard</NavLink>
                        <NavLink to="/profile/inbox" className={({ isActive }) => (isActive ? 'bg-black  flex  gap-x-2 p-2 dark:text-white   dark:bg-black    rounded-lg hover:text-sky-500 transition-colors  text-white ' : ' flex    gap-x-2 p-2     rounded-lg  transition-colors hover:text-sky-500 dark:text-sky-500   dark:hover:text-sky-700 ')}  ><FaInbox className='text-2xl' />Inbox</NavLink>
                        <NavLink to="/profile/ticket" className={({ isActive }) => (isActive ? 'bg-black  flex  gap-x-2 p-2 dark:text-white   dark:bg-black    rounded-lg hover:text-sky-500 transition-colors  text-white ' : ' flex    gap-x-2 p-2     rounded-lg  transition-colors hover:text-sky-500 dark:text-sky-500  dark:hover:text-sky-700  ')}  ><BsFillTicketFill className='text-2xl' />Ticket</NavLink>
                        <NavLink to="/profile/coupons" className={({ isActive }) => (isActive ? 'bg-black  flex  gap-x-2 p-2 dark:text-white   dark:bg-black    rounded-lg hover:text-sky-500 transition-colors  text-white ' : ' flex    gap-x-2 p-2     rounded-lg  transition-colors hover:text-sky-500 dark:text-sky-500  dark:hover:text-sky-700  ')}  ><RiCoupon3Fill className='text-2xl' />Coupons</NavLink>
                        <NavLink to="/profile/orders" className={({ isActive }) => (isActive ? 'bg-black  flex  gap-x-2 p-2 dark:text-white   dark:bg-black    rounded-lg hover:text-sky-500 transition-colors  text-whitek ' : ' flex    gap-x-2 p-2     rounded-lg  transition-colors hover:text-sky-500 dark:text-sky-500    dark:hover:text-sky-700')}  ><BsFillCartFill className='text-2xl' />Orders</NavLink>
                        <NavLink to="/profile/cash" className={({ isActive }) => (isActive ? 'bg-black  flex  gap-x-2 p-2 dark:text-white   dark:bg-black    rounded-lg hover:text-sky-500 transition-colors  text-white ' : ' flex    gap-x-2 p-2     rounded-lg  transition-colors hover:text-sky-500 dark:text-sky-500   dark:hover:text-sky-700 ')}  ><IoIosCash className='text-2xl' />Cash Request</NavLink>
                        <NavLink to="/profile/sales" className={({ isActive }) => (isActive ? 'bg-black  flex  gap-x-2 p-2 dark:text-white   dark:bg-black    rounded-lg hover:text-sky-500 transition-colors  text-white ' : ' flex    gap-x-2 p-2     rounded-lg  transition-colors hover:text-sky-500 dark:text-sky-500    dark:hover:text-sky-700')}  ><MdOutlineShoppingCartCheckout className='text-2xl' />Sales</NavLink>
                    </div>
                </aside>
                <div className='pt-10  col-span-1 '>
                    <Outlet />
                </div>
            </div>
            <Footer />
        </>
    )
}
export default Profile;