import backgroundImage from "./images/background.jpg"
import profilePhoto from "./images/profile.jpeg"
import { Link } from "react-router-dom";
import { BiLogOutCircle } from "react-icons/bi"
import { CgProfile, CgShoppingCart } from "react-icons/cg"
import { BsTicket, BsKey } from "react-icons/bs"
import { RiCoupon2Line, RiBillLine } from "react-icons/ri"
import { CiMoneyBill } from "react-icons/ci"
import { GiSellCard } from "react-icons/gi"
import { IoIosSettings } from "react-icons/io"
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Profile = () => {
    const { user } = useSelector((state) => state.appRedux);
    const localStorageUser = localStorage.getItem("user");
    const navigate = useNavigate()
    useEffect(() => {

        if (!localStorageUser || !user) {
            navigate("/");
        }
    }, [localStorageUser , user , navigate]);

    return (

        <div className=' overflow-auto   max-h-screen flex  h-screen w-screen  '>

            <div className=" flex w-1/2">
                <div className="bg-black opacity-70 flex flex-col  pl-3  gap-3  w-72 h-full">
                    <div className="pt-16 flex items-center  justify-around ">
                        <Link to='/'>  <BiLogOutCircle className=" hover:text-sky-500 transition-colors text-2xl" /></Link>
                        <button>Çıkış Yap</button>
                    </div>
                    <div className="flex gap-1 pt-6 items-center flex-col">
                        <img alt={[]} className=" w-32 h-32       rounded-full " src={profilePhoto} />

                        <p className="mx-auto">  {user.email}</p>
                        <p className="mx-auto text-sm  mb-4">  {user.displayName}</p>
                    </div>
                    <div className="  flex  flex-col  gap-4 pt-5">
                        <Link className="flex items-center  hover:text-sky-500  transition-colors  gap-2" > <CgProfile className="text-xl" /> Profilim</Link>
                        <Link className="flex items-center   hover:text-sky-500  transition-colors gap-2" >  <CgShoppingCart className="text-xl" /> Geçmiş Siparişler</Link>
                        <Link className="flex items-center  hover:text-sky-500  transition-colors  gap-2" >  <BsTicket className="text-xl" /> Destek Talepleri</Link>
                        <Link className="flex items-center  hover:text-sky-500  transition-colors  gap-2" >  <RiCoupon2Line className="text-xl" /> Kuponlar</Link>
                        <Link className="flex items-center  hover:text-sky-500  transition-colors  gap-2" >  <BsKey className="text-xl" /> Cd Keyler</Link>
                        <Link className="flex items-center  hover:text-sky-500  transition-colors  gap-2" >  <CiMoneyBill className="text-xl" /> Nakit Talebi</Link>
                        <Link className="flex items-center  hover:text-sky-500  transition-colors  gap-2" >   <GiSellCard className="text-xl" /> Satışlar</Link>
                        <Link className="flex items-center  hover:text-sky-500  transition-colors  gap-2" >   <RiBillLine className="text-xl" /> Faturalar</Link>
                        <Link className="flex items-center  hover:text-sky-500  transition-colors  gap-2" >  <IoIosSettings className="text-xl" /> Ayarlar</Link>
                    </div>
                </div>

            </div>


            <div className='    max-xl:hidden  w-1/2'>

                <img alt={[]} src={backgroundImage} className='opacity-70   z-10   dark:opacity-100  w-full h-full    object-cover' ></img >

            </div>
        </div>
    );
}

export default Profile;




