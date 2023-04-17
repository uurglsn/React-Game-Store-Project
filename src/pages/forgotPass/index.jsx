
import { RiLockPasswordLine } from "react-icons/ri"
import { Link , useNavigate} from "react-router-dom";
import ReCAPTCHA from "react-google-recaptcha";
import { useState, useEffect } from "react";
import languages from "../../jsons/languages/languages.json"
import { useSelector } from "react-redux";
const ForgotPass = () => {
    const navigate = useNavigate()
    const { language, user } = useSelector((state) => state.appRedux);
    const [captchaIsDone, setCaptchaIsDone] = useState(false)
    const captchaKey = "6Lf0nIolAAAAACAYd9FYx4oSUdm-honHK20bdq49"
    const onChange = () => {
        setCaptchaIsDone(true)
    }




    useEffect(() => {
        if (user || localStorage.getItem("user")) {
            navigate("/");
        }
    }, [navigate]);



    return (
        <div className=' flex h-screen w-screen '>
            <div className=' font-mainFont  dark:from-sky-100 dark:to-teal-100 dark:text-black  text-sky-700 bg-gradient-to-br from-gray-700 via-gray-900 to-black    border-r-4 border-black w-full '>
                <div className="flex   gap-3   justify-center    m-10">
                    <Link className=" hover:text-sky-500 transition-colors" to="/">{languages[language].auth.mainPageNav}</Link>
                    <Link className=" hover:text-sky-500 transition-colors" to="/register"> {languages[language].auth.signInRegister}</Link>
                </div>
                <div className=" flex mb-5  justify-center pt-10">
                    <div className="flex flex-col   gap-5">
                        <RiLockPasswordLine className=" text-2xl" />
                        <h1> {languages[language].auth.passRequest}</h1>
                        <div className="relative col-span-2"><div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"><svg aria-hidden="true" className="w-5 h-5 dark:text-white " fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path></svg> </div><input type="text" id="input-group-1" className="bg-black  dark:placeholder:text-white dark:text-white  placeholder:text-sky-700 hover:bg-gray-950   hover:text-sky-700 focus:bg-gray-950 focus:text-sky-700    transition-colors text-sm rounded-lg   block w-full pl-10 p-2.5 outline-none" placeholder={languages[language].auth.email} /> </div>
                        <div className="flex max-sm:items-center  max-sm:flex-col  gap-3">
                            <ReCAPTCHA sitekey={captchaKey} onChange={onChange} />
                            {captchaIsDone ? <button className='  bg-black   flex items-center justify-center w-64 max-sm:w-40      hover:bg-white hover   dark:hover:text-black hover:text-black  transition-colors rounded-xl  max-xl:col-span-2 dark:text-white max-xl:place-self-center'>{languages[language].auth.submitButton}</button> : null}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ForgotPass;
