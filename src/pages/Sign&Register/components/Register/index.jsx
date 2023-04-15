import { AiOutlineForm, AiOutlineUser, AiOutlinePhone } from "react-icons/ai"
import { GiConsoleController } from "react-icons/gi"
import { FaBirthdayCake } from "react-icons/fa"
import { Formik } from "formik"
import languages from "../../../../jsons/languages/languages.json"
import { useSelector } from "react-redux"
const Registry = () => {
    const { language } = useSelector((state) => state.appRedux);
    return (

        <div >

            <Formik
                initialValues={{
                    userName: '',
                    phoneNumber: '',
                    nameLastName: '',
                    birthDay: '',
                    email: '',
                    reEmail: '',
                    pass: '',
                    rePass: ''
                }}
                onSubmit={(values) => {
                    alert(JSON.stringify(values));
                }}
            >
                {
                    ({ handleSubmit, handleChange }) => (


                        <form onSubmit={handleSubmit}>


                            <div className='flex justify-center '>




                                <div className='grid max-sm:gap-x-3    gap-4    grid-cols-2'>
                                    <AiOutlineForm className='  max-sm:hidden col-span-2 text-2xl ' />
                                    <label htmlFor="input-group-1" className='col-span-2 text-2xl grid  max-sm:place-self-center '> {languages[language].auth.register} </label>
                                    <div className="relative max-sm:col-span-2   col-span-1">
                                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                            <GiConsoleController />
                                        </div>
                                        <input
                                            name="userName"
                                            onChange={handleChange}
                                            type="text"
                                            id="input-group-1"
                                            className=" bg-black dark:placeholder:text-white dark:text-white   placeholder:text-sky-700 hover:bg-gray-950    hover:text-sky-700 focus:bg-gray-950 focus:text-sky-700   transition-colors text-sm rounded-lg   block w-full pl-10 p-2.5      outline-none"
                                            placeholder={languages[language].auth.userId} />

                                    </div>

                                    <div className="relative max-sm:col-span-2   col-span-1"><div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                        <AiOutlinePhone />
                                    </div>
                                        <input
                                            name="phoneNumber"
                                            onChange={handleChange}
                                            type="text"
                                            id="input-group-1"
                                            className=" bg-black dark:placeholder:text-white dark:text-white   placeholder:text-sky-700 hover:bg-gray-950    hover:text-sky-700 focus:bg-gray-950 focus:text-sky-700   transition-colors text-sm rounded-lg   block w-full pl-10 p-2.5      outline-none"
                                            placeholder={languages[language].auth.phoneNumber} />
                                    </div>

                                    <div className="relative  max-sm:col-span-2  col-span-1"><div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                        <AiOutlineUser />
                                    </div>
                                        <input
                                            name="nameLastName"
                                            onChange={handleChange}
                                            type="text"
                                            id="input-group-1"
                                            className=" bg-black dark:placeholder:text-white dark:text-white   placeholder:text-sky-700 hover:bg-gray-950    hover:text-sky-700 focus:bg-gray-950 focus:text-sky-700   transition-colors text-sm rounded-lg   block w-full pl-10 p-2.5      outline-none"
                                            placeholder={languages[language].auth.nameLastName} />
                                    </div>
                                    <div className="relative max-sm:col-span-2   col-span-1"><div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                        <FaBirthdayCake />
                                    </div>
                                        <input
                                            name="birthDay"
                                            onChange={handleChange}
                                            type="date"
                                            id="input-group-1"
                                            className=" bg-black dark:placeholder:text-white dark:text-white   placeholder:text-sky-700 hover:bg-gray-950    hover:text-sky-700 focus:bg-gray-950 focus:text-sky-700   transition-colors text-sm rounded-lg   block w-full pl-10 p-2.5      outline-none"
                                            placeholder={languages[language].auth.birthDay} />
                                    </div>
                                    <div className="relative max-sm:col-span-2   col-span-1">
                                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                            <svg aria-hidden="true" className="w-5 h-5 dark:text-white " fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z">
                                                </path>
                                                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z">
                                                </path>
                                            </svg>
                                        </div>
                                        <input
                                            name="email"
                                            onChange={handleChange}
                                            type="email"
                                            id="input-group-1"
                                            className="bg-black  dark:placeholder:text-white dark:text-white  placeholder:text-sky-700 hover:bg-gray-950   hover:text-sky-700 focus:bg-gray-950 focus:text-sky-700    transition-colors text-sm rounded-lg   block w-full pl-10 p-2.5 outline-none"
                                            placeholder={languages[language].auth.email} />
                                    </div>
                                    <div className="relative max-sm:col-span-2   col-span-1">
                                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                            <svg aria-hidden="true" className="w-5 h-5 dark:text-white " fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z">
                                                </path>
                                                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z">
                                                </path>
                                            </svg>
                                        </div>
                                        <input
                                            name="reEmail"
                                            onChange={handleChange}
                                            type="email"
                                            id="input-group-1"
                                            className="bg-black  dark:placeholder:text-white dark:text-white  placeholder:text-sky-700 hover:bg-gray-950   hover:text-sky-700 focus:bg-gray-950 focus:text-sky-700    transition-colors text-sm rounded-lg   block w-full pl-10 p-2.5 outline-none"
                                            placeholder={languages[language].auth.reEmail} />
                                    </div>
                                    <div className="relative max-sm:col-span-2   col-span-1">
                                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                            <svg className="w-5 h-5 dark:text-white " xmlns="http://www.w3.org/2000/svg " width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                                <path d="M0 8a4 4 0 0 1 7.465-2H14a.5.5 0 0 1 .354.146l1.5 1.5a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0L13 9.207l-.646.647a.5.5 0 0 1-.708 0L11 9.207l-.646.647a.5.5 0 0 1-.708 0L9 9.207l-.646.647A.5.5 0 0 1 8 10h-.535A4 4 0 0 1 0 8zm4-3a3 3 0 1 0 2.712 4.285A.5.5 0 0 1 7.163 9h.63l.853-.854a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .708 0l.646.647.793-.793-1-1h-6.63a.5.5 0 0 1-.451-.285A3 3 0 0 0 4 5z" />

                                                <path d="M4 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
                                            </svg>
                                        </div>
                                        <input
                                            name="pass"
                                            onChange={handleChange}
                                            type="password"
                                            id="input-group-1"
                                            className=" bg-black dark:placeholder:text-white dark:text-white   placeholder:text-sky-700 hover:bg-gray-950    hover:text-sky-700 focus:bg-gray-950 focus:text-sky-700   transition-colors text-sm rounded-lg   block w-full pl-10 p-2.5      outline-none"
                                            placeholder={languages[language].auth.pass} />
                                    </div>
                                    <div className="relative max-sm:col-span-2   col-span-1">
                                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                            <svg className="w-5 h-5 dark:text-white " xmlns="http://www.w3.org/2000/svg " width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                                <path d="M0 8a4 4 0 0 1 7.465-2H14a.5.5 0 0 1 .354.146l1.5 1.5a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0L13 9.207l-.646.647a.5.5 0 0 1-.708 0L11 9.207l-.646.647a.5.5 0 0 1-.708 0L9 9.207l-.646.647A.5.5 0 0 1 8 10h-.535A4 4 0 0 1 0 8zm4-3a3 3 0 1 0 2.712 4.285A.5.5 0 0 1 7.163 9h.63l.853-.854a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .708 0l.646.647.793-.793-1-1h-6.63a.5.5 0 0 1-.451-.285A3 3 0 0 0 4 5z" />

                                                <path d="M4 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
                                            </svg>
                                        </div>

                                        <input
                                            name="rePass"
                                            onChange={handleChange}
                                            type="password"
                                            id="input-group-1"
                                            className=" bg-black dark:placeholder:text-white dark:text-white   placeholder:text-sky-700 hover:bg-gray-950    hover:text-sky-700 focus:bg-gray-950 focus:text-sky-700   transition-colors text-sm rounded-lg   block w-full pl-10 p-2.5      outline-none"
                                            placeholder={languages[language].auth.rePass} />
                                    </div>
                                    <button
                                        type="submit"
                                        className='  bg-black  flex items-center justify-center w-64 max-sm:w-40  p-3 py-3     hover:bg-white hover   dark:hover:text-black hover:text-black  transition-colors rounded-xl  col-span-2 dark:text-white place-self-center'
                                    >{languages[language].auth.register}
                                    </button>

                                    <div class="p-4 flex  justify-center  col-span-2 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">Change a few things up and try submitting again.</div>
                                </div>

                            </div>
                        </form>

                    )
                }

            </Formik>







        </div >



    );
}

export default Registry;
