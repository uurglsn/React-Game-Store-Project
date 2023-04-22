import Modal from "../Modal/modal";
import { useSelector, useDispatch } from "react-redux";
import { update, auth, updatePass, firestore, emailUpdate } from "../../../../firebase/auth";
import { toast } from "react-hot-toast";
import loginIn from "../../../../features/auth/authSlice"

import { collection, query, where, getDocs } from 'firebase/firestore';
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import React from 'react';

const Dashboard = () => {
   
    const dispatch = useDispatch()
    const { user } = useSelector((state) => state.auth);
    const localStorageUser = JSON.parse(localStorage.getItem("user"))
    const navigate = useNavigate()
    const [displayName, setnewDisplayName] = useState(user.displayName || '')

    const [newPass, setNewPass] = useState('')
    const [newEmail, setNewEmail] = useState('')
    let [isOpen, setIsOpen] = useState(false)
    const [, setUserData] = useState("");
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
    useEffect(() => {

        const getUserData = async () => {
            const usersCollection = collection(firestore, 'users');
            const userQuery = query(usersCollection, where('userId', '==', user.uid));
            const userSnapshot = await getDocs(userQuery);
            if (!userSnapshot.empty) {
                setUserData(userSnapshot.docs[0].data());
            }
        }
        if (user) {
            getUserData();
        }
    }, [user]);

    const displayNameUpdate = async e => {
        e.preventDefault();
        if (!displayName || displayName.length < 3) {
            return;
        }
        await update({
            displayName,
        })
            .then(() => {
                dispatch(loginIn(auth.currentUser))
                toast.success("Profil Güncellendi")
            }).catch(() => {
                toast.error('hata')
            })
    }

    const handleEmail = async (e) => {
        e.preventDefault()
        await emailUpdate(newEmail)
            .then(() => {
                dispatch(loginIn(auth.currentUser))
                toast.success("Yeni Email Adresinize onay geldi ")
            }).catch((error) => {
                toast.error("hata")
            })
    }
    const updatePassHandle = async () => {
        await updatePass(newPass)
            .then((res) => {
                setNewPass('')
                if (newPass === '') {
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
                    toast.error("hata")
                }

            })
    }


    useEffect(() => {

        const getUserData = async () => {
            const usersCollection = collection(firestore, 'users');
            const userQuery = query(usersCollection, where('userId', '==', user.uid));
            const userSnapshot = await getDocs(userQuery);
            if (!userSnapshot.empty) {
                setUserData(userSnapshot.docs[0].data());
            }
        }
        if (user) {
            getUserData();
        }
    }, [user]);

    return (
        <>
            <Modal isOpen={isOpen} closeModal={closeModal} setIsOpen={setIsOpen} />
            <div className="flex flex-col gap-4 ">
                <div class="flex flex-col items-center gap-2">
                    <label className=' text-xl'>Parola Güncelle</label>
                    <div className='flex'>
                        <input value={newPass} onChange={(e) => setNewPass(e.target.value)} type="password" class="w-36 px-3 py-2 rounded-l-md  bg-black border-sky-500  dark:placeholder:text-white dark:text-white   placeholder:text-sky-700 hover:bg-gray-950    hover:text-sky-700 focus:bg-gray-950 focus:text-sky-700   transition-colors text-sm       outline-none" placeholder="Parola" />
                        <button onClick={updatePassHandle} type="button" class="py-2 px-4  bg-sky-700 text-white hover:bg-white hover   dark:hover:text-black hover:text-black transition-colors" >Gönder</button>
                    </div>
                </div>

                <div class="flex flex-col items-center gap-2">
                    <label className=' text-center text-xl'>Kullanıcı Adını Değiştir</label>
                    <div className='flex'>
                        <input onChange={(e) => setnewDisplayName(e.target.value)} type="text" class="w-36 px-3 py-2 rounded-l-md  bg-black border-sky-500  dark:placeholder:text-white dark:text-white   placeholder:text-sky-700 hover:bg-gray-950    hover:text-sky-700 focus:bg-gray-950 focus:text-sky-700   transition-colors text-sm       outline-none" placeholder="Kullanıcı Adı" />
                        <button onClick={displayNameUpdate} type="button" class="py-2 px-4  bg-sky-700 text-white hover:bg-white hover   dark:hover:text-black hover:text-black transition-colors" >Gönder</button>
                    </div>

                </div>

                <div class="flex flex-col items-center gap-2">
                    <label className=' text-center text-xl'>E-Posta Değiştir</label>
                    <div className='flex'>
                        <input onChange={(e) => setNewEmail(e.target.value)} type="text" class="w-36 px-3 py-2 rounded-l-md  bg-black border-sky-500  dark:placeholder:text-white dark:text-white   placeholder:text-sky-700 hover:bg-gray-950    hover:text-sky-700 focus:bg-gray-950 focus:text-sky-700   transition-colors text-sm       outline-none" placeholder="E-Posta" />
                        <button onClick={handleEmail} type="button" class="py-2 px-4  bg-sky-700 text-white hover:bg-white hover   dark:hover:text-black hover:text-black transition-colors" >Gönder</button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Dashboard;
