// import backgroundImage from "./images/background.jpg"
// import profilePhoto from "./images/profile.jpeg"
// import { Link } from "react-router-dom";
// import { BiLogOutCircle } from "react-icons/bi"
// import { CgProfile, CgShoppingCart } from "react-icons/cg"
// import { BsTicket, BsKey } from "react-icons/bs"
// import { RiCoupon2Line, RiBillLine } from "react-icons/ri"
// import { CiMoneyBill } from "react-icons/ci"
// import { GiSellCard } from "react-icons/gi"
// import { IoIosSettings } from "react-icons/io"
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { currentEmailVerification, update, auth, updatePass } from "../../firebase/firebase";
import { toast } from "react-hot-toast";
import { loginIn } from "../../features/auth/authSlice";
import Modal from "./components/modal";

const Profile = () => {
    const dispatch = useDispatch()
    const { user } = useSelector((state) => state.auth);
    const localStorageUser = JSON.parse(localStorage.getItem("user"))
    const navigate = useNavigate()
    const [displayName, setnewDisplayName] = useState(user.displayName || auth.currentUser.displayName)
    const [avatar, setAvatar] = useState(user.photoURL || auth.currentUser.photoURL)
    const [newPass, setNewPass] = useState('')
    let [isOpen, setIsOpen] = useState(false)
    function closeModal() {
        setIsOpen(false)
    }

    function openModal() {
        setIsOpen(true)
    }
    useEffect(() => {

        if (!localStorageUser || !user) {
            navigate("/");
        }
    }, [localStorageUser, user, navigate]);
    const handleVerification = () => {
        currentEmailVerification()
            .then(() => {
                toast.success(`Doğrulama Maili ${user.email} Adresine Gönderildi`)
            }).catch(() => {
                toast.error('Doğrulama Maili GÖnderilemedi')
            })
    }
    const profileUpdate = async e => {
        e.preventDefault()
        await update({
            displayName,
            photoURL: avatar
        })
            .then(() => {
                dispatch(loginIn(auth.currentUser))
                toast.success("Profil Güncellendi")
            }).catch(() => {
                toast.error('hata')
            })
    }
    const updatePassHandle = async () => {
        await updatePass(newPass)
            .then((res) => {
                if (newPass == '') {
                    toast.error('HAYIRDIR')
                } else {
                    toast.success('parola güncellendi')
                }

            }).catch((error) => {
                if (error.code === 'auth/requires-recent-login') {
                    toast.error('Şifrenizi Doğrulamalısınız')
                    openModal()
                } else if (error.code === 'auth/weak-password') {
                    toast.error("Şifre Çok Kısa")
                } else {
                    toast.error(error)
                }

            })
    }
    return (

        // <div className=' overflow-auto   max-h-screen flex  h-screen w-screen  '>
        //     <div className=" flex w-1/2">
        //         <div className="bg-black opacity-70 flex flex-col  pl-3  gap-3  w-72 h-full">
        //             <div className="pt-16 flex items-center  justify-around ">
        //                 <Link to='/'>  <BiLogOutCircle className=" hover:text-sky-500 transition-colors text-2xl" /></Link>
        //                 <button>Çıkış Yap</button>
        //             </div>
        //             {newPass}
        //             <div className="flex gap-1 pt-6 items-center flex-col">
        //                 {user.photoURL ? <img alt={[]} className=" w-32 h-32       rounded-full " src={user.photoURL} /> : <img alt={[]} className=" w-32 h-32       rounded-full " src={profilePhoto} />}

        //                 <p className="mx-auto">  {user.email}</p>
        //                 <p className="mx-auto text-sm  mb-4">  {user.displayName}</p>
        //             </div>
        //             <div className="  flex  flex-col  gap-4 pt-5">
        //                 <Link className="flex items-center  hover:text-sky-500  transition-colors  gap-2" > <CgProfile className="text-xl" /> Profilim</Link>
        //                 <Link className="flex items-center   hover:text-sky-500  transition-colors gap-2" >  <CgShoppingCart className="text-xl" /> Geçmiş Siparişler</Link>
        //                 <Link className="flex items-center  hover:text-sky-500  transition-colors  gap-2" >  <BsTicket className="text-xl" /> Destek Talepleri</Link>
        //                 <Link className="flex items-center  hover:text-sky-500  transition-colors  gap-2" >  <RiCoupon2Line className="text-xl" /> Kuponlar</Link>
        //                 <Link className="flex items-center  hover:text-sky-500  transition-colors  gap-2" >  <BsKey className="text-xl" /> Cd Keyler</Link>
        //                 <Link className="flex items-center  hover:text-sky-500  transition-colors  gap-2" >  <CiMoneyBill className="text-xl" /> Nakit Talebi</Link>
        //                 <Link className="flex items-center  hover:text-sky-500  transition-colors  gap-2" >   <GiSellCard className="text-xl" /> Satışlar</Link>
        //                 <Link className="flex items-center  hover:text-sky-500  transition-colors  gap-2" >   <RiBillLine className="text-xl" /> Faturalar</Link>
        //                 <Link className="flex items-center  hover:text-sky-500  transition-colors  gap-2" >  <IoIosSettings className="text-xl" /> Ayarlar</Link>
        //             </div>
        //         </div>

        //     </div>

        //     <div className='    max-xl:hidden  w-1/2'>

        //         <img alt={[]} src={backgroundImage} className='opacity-70   z-10   dark:opacity-100  w-full h-full    object-cover' ></img >

        //     </div>
        // </div>
        <div className=" h-screen flex flex-col">
            <Modal isOpen={isOpen} closeModal={closeModal} setIsOpen={setIsOpen} />
            <button onClick={handleVerification} className="bg-dark rounded-xl"> Doğrulama Maili</button>
            <input type="text" onChange={(e) => setnewDisplayName(e.target.value)} />
            <button onClick={profileUpdate}>Kullanıcı adı değiştir</button>
            <input type="text" onChange={(e) => setAvatar(e.target.value)} />
            <button onClick={profileUpdate}>Resim değitir</button>
            <input placeholder="parola güncelle" type="password" onChange={(e) => setNewPass(e.target.value)} />
            <button onClick={updatePassHandle}>Parola Güncelle</button>

        </div>
    );
}

export default Profile;




