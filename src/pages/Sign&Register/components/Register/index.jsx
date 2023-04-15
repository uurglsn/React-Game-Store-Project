import { AiOutlineForm, AiOutlineUser, AiOutlinePhone } from "react-icons/ai"
import { GiConsoleController } from "react-icons/gi"
import { FaBirthdayCake } from "react-icons/fa"
import { Formik, Field, Form } from 'formik';
import * as Yup from "yup";
import { Animated } from "react-animated-css";
import languages from "../../../../jsons/languages/languages.json"
import { useSelector } from "react-redux"
import { register } from "../../../../firebase";
import { useNavigate } from "react-router-dom";



const Registry = () => {
    const navigate = useNavigate();
    const { language } = useSelector((state) => state.appRedux);
    const SignupSchema = Yup.object().shape({
        userName: Yup.string()
            .min(3, languages[language].registerErrors.userNameTooShort)
            .max(20, languages[language].registerErrors.userNameTooLong)
            .required(languages[language].registerErrors.userNameRequired),

        phoneNumber: Yup.string()
            .min(10, languages[language].registerErrors.phoneNumberError)
            .max(10, languages[language].registerErrors.phoneNumberError)
            .required(languages[language].registerErrors.phoneRequired),

        nameLastName: Yup.string()
            .min(6, languages[language].registerErrors.nameLastNameTooShort)
            .max(50, languages[language].registerErrors.nameLastNameTooLong)
            .required(languages[language].registerErrors.nameLastNameRequired),

        birthDay: Yup.string()
            .required(languages[language].registerErrors.birthDayRequired),

        email: Yup.string()
            .email(languages[language].registerErrors.emailError)
            .required(languages[language].registerErrors.emailRequired),

        reEmail: Yup.string()
            .email(languages[language].registerErrors.reEmailError)
            .required(languages[language].registerErrors.reEmailRequired)
            .oneOf([Yup.ref('email'), null], languages[language].registerErrors.emailsPair),

        pass: Yup.string()
            .min(8, languages[language].registerErrors.passToShort)
            .max(30, languages[language].registerErrors.passToLong)
            .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])/, languages[language].registerErrors.strongPass)
            .required(languages[language].registerErrors.passRequired),

        rePass: Yup.string()
            .required(languages[language].registerErrors.rePassRequired)
            .oneOf([Yup.ref('pass'), null], languages[language].registerErrors.passPair),
        terms: Yup.bool()
            .oneOf([true], languages[language].registerErrors.termsRequired),

    });
    const initialValues = {
        userName: '',
        phoneNumber: '',
        nameLastName: '',
        birthDay: '',
        email: '',
        reEmail: '',
        pass: '',
        rePass: '',
        terms: false
    }

    return (

        <div >

            <Formik
                initialValues={initialValues}
                validationSchema={SignupSchema}

                onSubmit={(values) => {
                    register(values.email, values.pass)
                        .then((user) => {
                            console.log(user);
                            navigate('/', { state: { success: true } });
                        })
                        .catch((error) => {
                            console.log(error);
                        });
                }}
            >
                {
                    ({ errors, touched, handleSubmit, handleChange, isValid }) => (


                        <Form onSubmit={handleSubmit}>


                            <div className='flex justify-center '>




                                <div className='grid max-sm:gap-x-3    gap-4    grid-cols-2'>

                                    <AiOutlineForm className='  max-sm:hidden col-span-2 text-2xl ' />
                                    <label htmlFor="input-group-1" className='col-span-2 text-2xl grid  max-sm:place-self-center '> {languages[language].auth.register} </label>
                                    {
                                        errors.userName && touched.userName ?
                                            (<Animated animationIn="fadeIn" animationOut="fadeOut" className="  p-4 flex  justify-center  col-span-2 mb-4 text-sm text-red-800 rounded-lg bg-red-50  dark:text-red-400"  >
                                                {errors.userName}        </Animated>) : ""}
                                    {
                                        errors.phoneNumber && touched.phoneNumber ?
                                            (<Animated animationIn="fadeIn" animationOut="fadeOut" className="p-4 flex  justify-center  col-span-2 mb-4 text-sm text-red-800 rounded-lg bg-red-50  dark:text-red-400"  >
                                                {errors.phoneNumber}        </Animated>) : ""}
                                    {
                                        errors.nameLastName && touched.nameLastName ?
                                            (<Animated animationIn="fadeIn" animationOut="fadeOut" className="  p-4 flex  justify-center  col-span-2 mb-4 text-sm text-red-800 rounded-lg bg-red-50  dark:text-red-400"  >
                                                {errors.nameLastName}        </Animated>) : ""}


                                    {
                                        errors.birthDay && touched.birthDay ?
                                            (<Animated animationIn="fadeIn" animationOut="fadeOut" className="  p-4 flex  justify-center  col-span-2 mb-4 text-sm text-red-800 rounded-lg bg-red-50  dark:text-red-400"  >
                                                {errors.birthDay}        </Animated>) : ""}
                                    {
                                        errors.email && touched.email ?
                                            (<Animated animationIn="fadeIn" animationOut="fadeOut" className="  p-4 flex  justify-center  col-span-2 mb-4 text-sm text-red-800 rounded-lg bg-red-50  dark:text-red-400"  >
                                                {errors.email}        </Animated>) : ""}

                                    {
                                        errors.reEmail && touched.reEmail ?
                                            (<Animated animationIn="fadeIn" animationOut="fadeOut" className="  p-4 flex  justify-center  col-span-2 mb-4 text-sm text-red-800 rounded-lg bg-red-50  dark:text-red-400"  >
                                                {errors.reEmail}        </Animated>) : ""}
                                    {
                                        errors.pass && touched.pass ?
                                            (<Animated animationIn="fadeIn" animationOut="fadeOut" className="  p-4 flex  justify-center  col-span-2 mb-4 text-sm text-red-800 rounded-lg bg-red-50  dark:text-red-400"  >
                                                {errors.pass}        </Animated>) : ""}

                                    {
                                        errors.rePass && touched.rePass ?
                                            (<Animated animationIn="fadeIn" animationOut="fadeOut" className="  p-4 flex  justify-center  col-span-2 mb-4 text-sm text-red-800 rounded-lg bg-red-50  dark:text-red-400"  >
                                                {errors.rePass}        </Animated>) : ""}
                                    {
                                        errors.terms && touched.terms ?
                                            (<Animated animationIn="fadeIn" animationOut="fadeOut" className="  p-4 flex  justify-center  col-span-2 mb-4 text-sm text-red-800 rounded-lg bg-red-50  dark:text-red-400"  >
                                                {errors.terms}        </Animated>) : ""}


                                    <div className="relative max-sm:col-span-2   col-span-1">
                                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                            <GiConsoleController className="dark:text-white" />
                                        </div>
                                        <Field
                                            name="userName"
                                            onChange={handleChange}
                                            type="text"
                                            id="input-group-1"
                                            className=" bg-black    border-sky-500 border dark:placeholder:text-white dark:text-white   placeholder:text-sky-700 hover:bg-gray-950    hover:text-sky-700 focus:bg-gray-950 focus:text-sky-700   transition-colors text-sm rounded-lg   block w-full pl-10 p-2.5      outline-none"
                                            placeholder={languages[language].auth.userId} />

                                    </div>

                                    <div className="relative max-sm:col-span-2   col-span-1"><div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                        <AiOutlinePhone className="dark:text-white" />
                                    </div>
                                        <Field
                                            name="phoneNumber"
                                            onChange={handleChange}
                                            type="text"
                                            id="input-group-1"
                                            className=" bg-black border-sky-500 border dark:placeholder:text-white dark:text-white   placeholder:text-sky-700 hover:bg-gray-950    hover:text-sky-700 focus:bg-gray-950 focus:text-sky-700   transition-colors text-sm rounded-lg   block w-full pl-10 p-2.5      outline-none"
                                            placeholder={languages[language].auth.phoneNumber} />
                                    </div>

                                    <div className="relative  max-sm:col-span-2  col-span-1"><div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                        <AiOutlineUser className="dark:text-white" />
                                    </div>
                                        <Field
                                            name="nameLastName"
                                            onChange={handleChange}
                                            type="text"
                                            id="input-group-1"
                                            className=" bg-black border-sky-500 border dark:placeholder:text-white dark:text-white   placeholder:text-sky-700 hover:bg-gray-950    hover:text-sky-700 focus:bg-gray-950 focus:text-sky-700   transition-colors text-sm rounded-lg   block w-full pl-10 p-2.5      outline-none"
                                            placeholder={languages[language].auth.nameLastName} />
                                    </div>
                                    <div className="relative max-sm:col-span-2   col-span-1"><div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                        <FaBirthdayCake className="dark:text-white" />
                                    </div>
                                        <Field
                                            name="birthDay"
                                            onChange={handleChange}
                                            type="date"
                                            id="input-group-1"
                                            className=" bg-black border-sky-500 border dark:placeholder:text-white dark:text-white   placeholder:text-sky-700 hover:bg-gray-950    hover:text-sky-700 focus:bg-gray-950 focus:text-sky-700   transition-colors text-sm rounded-lg   block w-full pl-10 p-2.5      outline-none"
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
                                        <Field
                                            name="email"
                                            onChange={handleChange}
                                            type="email"
                                            id="input-group-1"
                                            className="bg-black border-sky-500 border  dark:placeholder:text-white dark:text-white  placeholder:text-sky-700 hover:bg-gray-950   hover:text-sky-700 focus:bg-gray-950 focus:text-sky-700    transition-colors text-sm rounded-lg   block w-full pl-10 p-2.5 outline-none"
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
                                        <Field
                                            name="reEmail"
                                            onChange={handleChange}
                                            type="email"
                                            id="input-group-1"
                                            className="bg-black border-sky-500 border  dark:placeholder:text-white dark:text-white  placeholder:text-sky-700 hover:bg-gray-950   hover:text-sky-700 focus:bg-gray-950 focus:text-sky-700    transition-colors text-sm rounded-lg   block w-full pl-10 p-2.5 outline-none"
                                            placeholder={languages[language].auth.reEmail} />
                                    </div>
                                    <div className="relative max-sm:col-span-2   col-span-1">
                                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                            <svg className="w-5 h-5 dark:text-white " xmlns="http://www.w3.org/2000/svg " width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                                <path d="M0 8a4 4 0 0 1 7.465-2H14a.5.5 0 0 1 .354.146l1.5 1.5a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0L13 9.207l-.646.647a.5.5 0 0 1-.708 0L11 9.207l-.646.647a.5.5 0 0 1-.708 0L9 9.207l-.646.647A.5.5 0 0 1 8 10h-.535A4 4 0 0 1 0 8zm4-3a3 3 0 1 0 2.712 4.285A.5.5 0 0 1 7.163 9h.63l.853-.854a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .708 0l.646.647.793-.793-1-1h-6.63a.5.5 0 0 1-.451-.285A3 3 0 0 0 4 5z" />

                                                <path d="M4 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
                                            </svg>
                                        </div>
                                        <Field
                                            name="pass"
                                            onChange={handleChange}
                                            type="password"
                                            id="input-group-1"
                                            className=" bg-black border-sky-500 border dark:placeholder:text-white dark:text-white   placeholder:text-sky-700 hover:bg-gray-950    hover:text-sky-700 focus:bg-gray-950 focus:text-sky-700   transition-colors text-sm rounded-lg   block w-full pl-10 p-2.5      outline-none"
                                            placeholder={languages[language].auth.pass} />
                                    </div>
                                    <div className="relative max-sm:col-span-2   col-span-1">
                                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                            <svg className="w-5 h-5 dark:text-white " xmlns="http://www.w3.org/2000/svg " width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                                <path d="M0 8a4 4 0 0 1 7.465-2H14a.5.5 0 0 1 .354.146l1.5 1.5a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0L13 9.207l-.646.647a.5.5 0 0 1-.708 0L11 9.207l-.646.647a.5.5 0 0 1-.708 0L9 9.207l-.646.647A.5.5 0 0 1 8 10h-.535A4 4 0 0 1 0 8zm4-3a3 3 0 1 0 2.712 4.285A.5.5 0 0 1 7.163 9h.63l.853-.854a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .708 0l.646.647.793-.793-1-1h-6.63a.5.5 0 0 1-.451-.285A3 3 0 0 0 4 5z" />

                                                <path d="M4 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
                                            </svg>
                                        </div>

                                        <Field
                                            name="rePass"
                                            onChange={handleChange}
                                            type="password"
                                            id="input-group-1"
                                            className=" bg-black border-sky-500 border dark:placeholder:text-white dark:text-white   placeholder:text-sky-700 hover:bg-gray-950    hover:text-sky-700 focus:bg-gray-950 focus:text-sky-700   transition-colors text-sm rounded-lg   block w-full pl-10 p-2.5      outline-none"
                                            placeholder={languages[language].auth.rePass} />
                                    </div>
                                    <label htmlFor='terms' className=' border-2 border-black  hover:border-sky-500  text-sm gap- text-center bg-black    flex items-center justify-center w-64  max-sm:w-40  p-3 py-3     hover:bg-white hover   dark:hover:text-black hover:text-black  transition-colors rounded-xl  col-span-1 dark:text-white place-self-center'>
                                        <Field
                                            onChange={handleChange}
                                            type="checkbox"
                                            className='   mr-1'
                                            name='terms'
                                            id='terms' />
                                        {languages[language].auth.acceptTerms} </label>
                                    <button
                                        disabled={!isValid}
                                        type="submit"
                                        className=' border-2   disabled:opacity-50   disabled:hover:bg-red-50 disabled:border-red-50 cursor-pointer disabled:cursor-default disabled:bg-red-50 disabled:text-red-400 border-black  hover:border-sky-500   bg-black  flex items-center justify-center w-64 max-sm:w-40  p-3 py-3     hover:bg-white hover   dark:hover:text-black hover:text-black  transition-colors rounded-xl  col-span-1 dark:text-white place-self-center'
                                    >{languages[language].auth.register}
                                    </button>


                                </div>

                            </div>
                        </Form>

                    )
                }

            </Formik>







        </div >



    );
}

export default Registry;
