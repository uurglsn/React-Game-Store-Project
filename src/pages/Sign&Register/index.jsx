import backgroundImage from "./images/registerBackground.png"
import SignUp from "./components/SignUp";
import Registry from "./components/Register";
import { useSelector, useDispatch } from "react-redux";
import { toRegisterOrSign } from "../../features/app/appSlice"
import { Link } from "react-router-dom";





const SignRegister = () => {
    const dispatch = useDispatch();
    const { signOrRegister } = useSelector((state) => state.appRedux);
    return (
        <div className=' flex h-screen w-screen '>
           
            <div className=' font-mainFont  dark:from-sky-100 dark:to-teal-100 dark:text-black  text-sky-700 bg-gradient-to-br from-gray-700 via-gray-900 to-black    border-r-4 border-black  max-xl:w-full  w-1/2'>
                
                <div className="flex    gap-10  justify-between   max-md:justify-center    m-10">
                    
                    
                    <Link to="/reactive" className=" hover:text-sky-500 transition-colors">Aktivasyon Kodum Gelmedi </Link>
                    <Link className=" hover:text-sky-500 transition-colors" to="/">Ana Sayfa</Link>
                    
                    
                    
                    </div>

                <div className=" flex mb-5  justify-center pt-10">
                     <button onClick={() => dispatch(toRegisterOrSign(true))} className={`${signOrRegister ? "bg-white   dark:bg-black dark:text-white text-black" : "bg-black hover:text-sky-500  "}  p-2 rounded transition-colors`}>Giriş Yap</button> 
                     <button onClick={() => dispatch(toRegisterOrSign(false))} className={`${!signOrRegister ? "bg-white   dark:bg-black dark:text-white text-black" : "bg-black hover:text-sky-500  "}  p-2 rounded transition-colors`}>Kayıt Ol</button>
                     </div>
              
                {signOrRegister ? <SignUp /> : <Registry />}
            </div>
            <div className='  max-xl:hidden  w-1/2'><img src={backgroundImage} className='opacity-70   dark:opacity-100  w-full h-full  object-right  object-cover' ></img>
            </div>
        </div>
    );
}

export default SignRegister;




