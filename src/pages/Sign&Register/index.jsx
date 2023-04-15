import backgroundImage from "./images/registerBackground.png"
import SignUp from "./components/SignUp";
import Registry from "./components/Register";
import { useSelector, useDispatch } from "react-redux";
import { toRegisterOrSign } from "../../features/app/appSlice"
import { Link } from "react-router-dom";
import languages from "../../jsons/languages/languages.json"




const SignRegister = () => {
    const dispatch = useDispatch();
    const { signOrRegister, language } = useSelector((state) => state.appRedux);
    return (
        <div className=' overflow-auto   max-h-screen flex  h-screen w-screen '>

            <div className=' font-mainFont  dark:from-sky-100 dark:to-teal-100 dark:text-black  text-sky-700 bg-gradient-to-br from-gray-700 via-gray-900 to-black    border-r-4 border-black  max-xl:w-full  w-1/2'>

                <div className="flex     justify-around        m-10">

                
                    <Link to="/reactive" className=" text-center hover:text-sky-500 transition-colors">{languages[language].auth.reActiveLink} </Link>
                    <Link to=""  className=" text-center hover:text-sky-500 transition-colors">{languages[language].auth.membershipTerms} </Link>
                    <Link className=" text-center hover:text-sky-500 transition-colors" to="/">{languages[language].auth.mainPageNav}</Link>

                </div>

                <div className=" flex mb-5  justify-center pt-10">
                    <button onClick={() => dispatch(toRegisterOrSign(true))} className={`${signOrRegister ? "bg-white  dark:text-white   dark:bg-black  text-black" : "bg-black hover:text-sky-500  dark:hover:bg-white "}    dark:text-sky-500 p-2 rounded transition-colors`}>{languages[language].auth.signIn}</button>
                    <button onClick={() => dispatch(toRegisterOrSign(false))} className={`${!signOrRegister ? "bg-white dark:text-white     dark:bg-black  text-black" : "bg-black hover:text-sky-500  dark:hover:bg-white "}   dark:text-sky-500 p-2 rounded transition-colors`}>{languages[language].auth.register}</button>
                </div>

                {signOrRegister ? <SignUp /> : <Registry />}
            </div>
            <div className=' overflow-auto   max-h-screen  max-xl:hidden  w-1/2'><img src={backgroundImage} className='opacity-70   dark:opacity-100  w-full h-full  object-right  object-cover' ></img>
            </div>
        </div>
    );
}

export default SignRegister;




