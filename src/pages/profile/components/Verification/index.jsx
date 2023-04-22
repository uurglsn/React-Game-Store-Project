import { currentEmailVerification } from "../../../../firebase/auth"
import { toast } from "react-hot-toast"
import { useSelector } from "react-redux"
const Verification = () => {
    const { user } = useSelector((state) => state.auth);
    const handleVerification = () => {
        currentEmailVerification()
            .then(() => {
                toast.success(`Doğrulama Maili ${user.email} Adresine Gönderildi`)
            }).catch(() => {
                toast.error('Doğrulama Maili GÖnderilemedi')
            })
    }
    return (
        <>
            {!user.emailVerified ?
                <div onClick={handleVerification} className="flex justify-center cursor-pointer px-px bg-red-200 text-red-800 text-sm">
                    Hesabınız Doğrulanmamış Doğrulama Mailini almak istiyorsanız tıklayınız
                </div> : ""
            }
        </>

    );
}
export default Verification;