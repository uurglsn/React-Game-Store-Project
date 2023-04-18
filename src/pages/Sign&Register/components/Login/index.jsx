import { BsDoorClosedFill } from "react-icons/bs"
import discordLogo from "../../images/discordLogo.png"
import facebookLogo from "../../images/facebookLogo.png"
import googleLogo from "../../images/googleLogo.png"
import steamLogo from "../../images/steamLogo.png"
import languages from "../../../../jsons/languages/languages.json"
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom"
import { Formik, Form } from "formik"
import { login } from "../../../../firebase/firebase"
import toast from 'react-hot-toast';
import { loginIn } from "../../../../features/auth/authSlice"
const Login = () => {
    const dispatch = useDispatch();
    const { language } = useSelector((state) => state.theme);
    const loginInitalValues = {
        email: "",
        pass: ""
    }
    return (
        <Formik
            initialValues={loginInitalValues}
            onSubmit={(values) => {
                login(values.email, values.pass)
                    .then((user) => {
                        toast.success("Giriş Başarılı Yönlendiriliyorsunuz")
                        // Yönlendirme Parenttın korumasından dolayı zaten yapılacak
                        dispatch(loginIn(user))
                    })
                    .catch(() => {
                        toast.error("Giriş Başarısız")

                    });
            }}
        >
            {
                ({ handleSubmit, handleChange }) => (
                    <Form onSubmit={handleSubmit}>
                        <div className='flex justify-center '>
                            <div className='grid max-sm:gap-x-3  gap-y-6  gap-x-16    grid-cols-2'>
                                <BsDoorClosedFill className='  max-sm:hidden col-span-2 text-2xl ' />
                                <label htmlFor='input-group-1' className='col-span-2 text-2xl grid  max-sm:place-self-center '> {languages[language].auth.signIn} </label>
                                <p className="max-sm:hidden col-span-2 text-sm overflow-hidden break-words ">{languages[language].auth.quickLogin}</p>
                                <button className='bg-black transition-colors  hover:bg-white border-2 border-black  hover:border-sky-500   group       p-3         rounded   flex   items-center   justify-center    '>  <img alt={[]} className='mx-3  w-7' src={googleLogo} />    <p className='  max-sm:hidden  text-sm  dark:text-white group-hover:text-black transition-colors '> {languages[language].auth.googleLogin} </p>     </button>
                                <button className='bg-black transition-colors hover:bg-white  border-2 border-black  hover:border-sky-500  group      p-3    rounded   flex   items-center  justify-center       '>  <img alt={[]} className='  mx-3 w-7' src={facebookLogo} />    <p className=' max-sm:hidden text-sm dark:text-white group-hover:text-black transition-colors '> {languages[language].auth.facebookLogin} </p>     </button>
                                <button className='bg-black transition-colors hover:bg-white  border-2 border-black  hover:border-sky-500  group    p-3     rounded   flex   items-center    justify-center   '>  <img alt={[]} className=' mx-3  w-7 ' src={steamLogo} />    <p className=' max-sm:hidden text-sm dark:text-white group-hover:text-black transition-colors '> {languages[language].auth.steamLogin} </p>     </button>
                                <button className='bg-black transition-colors hover:bg-white  border-2 border-black  hover:border-sky-500  group      gap-3 p-3   rounded   flex   items-center   justify-center     '>  <img alt={[]} className='   w-7' src={discordLogo} />    <p className=' max-sm:hidden text-sm dark:text-white group-hover:text-black transition-colors '> {languages[language].auth.discordLogin} </p>     </button>
                                <p className='col-span-2 max-sm:hidden     '>{languages[language].auth.orEmail}</p>
                                <div className="relative col-span-2"><div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"><svg aria-hidden="true" className="w-5 h-5 dark:text-white " fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path></svg> </div>

                                    <input type="text" id="input-group-1"
                                        name="email"
                                        onChange={handleChange}
                                        className="bg-black  dark:placeholder:text-white dark:text-white  placeholder:text-sky-700 hover:bg-gray-950   hover:text-sky-700 focus:bg-gray-950 focus:text-sky-700    transition-colors text-sm rounded-lg   block w-full pl-10 p-2.5 outline-none"
                                        placeholder={languages[language].auth.email} /> </div>
                                <div className="relative col-span-2"><div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"><svg className="w-5 h-5 dark:text-white " xmlns="http://www.w3.org/2000/svg " width="16" height="16" fill="currentColor" viewBox="0 0 16 16"> <path d="M0 8a4 4 0 0 1 7.465-2H14a.5.5 0 0 1 .354.146l1.5 1.5a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0L13 9.207l-.646.647a.5.5 0 0 1-.708 0L11 9.207l-.646.647a.5.5 0 0 1-.708 0L9 9.207l-.646.647A.5.5 0 0 1 8 10h-.535A4 4 0 0 1 0 8zm4-3a3 3 0 1 0 2.712 4.285A.5.5 0 0 1 7.163 9h.63l.853-.854a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .708 0l.646.647.793-.793-1-1h-6.63a.5.5 0 0 1-.451-.285A3 3 0 0 0 4 5z" /> <path d="M4 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" /> </svg> </div>




                                    <input type="password"
                                        name="pass"
                                        onChange={handleChange}
                                        id="input-group-1"
                                        className=" bg-black dark:placeholder:text-white dark:text-white   placeholder:text-sky-700 hover:bg-gray-950    hover:text-sky-700 focus:bg-gray-950 focus:text-sky-700   transition-colors text-sm rounded-lg   block w-full pl-10 p-2.5      outline-none" placeholder={languages[language].auth.pass} /> </div>
                                <Link to="/forgot" className='border-2 border-black  hover:border-sky-500  bg-black  col-span-1  grid items-center justify-center w-64  max-sm:w-40 p-3 py-3   hover:bg-white hover  dark:hover:text-black  hover:text-black   transition-colors  rounded-xl  max-xl:col-span-2  max-sm:col-span-1 text-center  dark:text-white max-xl:place-self-center'>{languages[language].auth.forgotPassLink}</Link>
                                <button className=' border-2 border-black  hover:border-sky-500  bg-black  col-span-1  flex items-center justify-center w-64 max-sm:w-40  p-3 py-3     hover:bg-white hover   dark:hover:text-black hover:text-black  transition-colors rounded-xl  max-xl:col-span-2 max-sm:col-span-1 text-center dark:text-white max-xl:place-self-center'>{languages[language].auth.signIn}</button>
                            </div>
                        </div>
                    </Form>

                )
            }

        </Formik>
    );
}
export default Login;