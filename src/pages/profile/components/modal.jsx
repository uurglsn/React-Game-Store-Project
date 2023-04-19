import { Dialog, Transition } from '@headlessui/react'

import { Formik, Form } from 'formik';
import {  useSelector } from 'react-redux';
import languages from "../../../jsons/languages/languages.json"
import { reAuth } from '../../../firebase/auth';
import { toast } from 'react-hot-toast';

const Modal = ({ isOpen, Fragment, closeModal }) => {
   
    const { language } = useSelector((state) => state.theme);

    return (
        <div>
            <Transition appear show={isOpen} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={closeModal}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-black bg-opacity-25" />
                    </Transition.Child>

                    <div className="fixed inset-0 overflow-y-auto">
                        <div className="flex min-h-full items-center justify-center p-4 text-center">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-black p-6 text-left align-middle shadow-xl transition-all">
                                    <Formik
                                        initialValues={{
                                            pass: ""
                                        }}
                                        onSubmit={(values) => {
                                            reAuth(values.pass)
                                                .then(() => {
                                                    closeModal()
                                                    toast.success('Şifre Doğrulandı')
                                                }).catch((error) => {
                                                    toast.error(error.code)
                                                })
                                            console.log(values.pass)
                                        }}
                                    >
                                        {
                                            ({ handleSubmit, handleChange }) => (
                                                <Form onSubmit={handleSubmit}>
                                                    <div className='flex justify-center gap-10  '>
                                                        <label className='text-sky-700 text-center  text-lg'>Şifrenizi Doğrulayınız</label>
                                                        <input type="password"
                                                            name="pass"
                                                            onChange={handleChange}
                                                            id="input-group-1"
                                                            className="   transition-colors text-sm rounded-lg   block w-full  p-2.5      outline-none" placeholder={languages[language].auth.pass} /> </div>
                                                </Form>
                                            )
                                        }
                                    </Formik>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </div>
    );
}

export default Modal;
