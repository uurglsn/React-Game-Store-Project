import { Link } from "react-router-dom";
import { BsFacebook, BsDiscord, BsInstagram, BsTwitter, BsYoutube } from "react-icons/bs"
import languages from "../../jsons/languages/languages.json"
import { useSelector } from "react-redux";
const Footer = () => {
    const { language } = useSelector((state) => state.theme);
    return (

        <footer className=" mx-16">
            <div className=" w-full  mt-40 p-4 py-6 lg:py-8">
                <div className="md:flex md:justify-between sm:flex    xl:items-center xl:justify-between  py-16  border-y-[1px] border-blue-950  dark:border-white">
                    <div className="mb-6  md:mb-0">
                        <a href="#" className="flex items-center">
                            <span className="     max-lg:hidden self-center text-2xl font-semibold whitespace-nowrap ">UURGLSN</span>
                        </a>
                    </div>
                    
                    <div className="grid grid-cols-2 mr-16 gap-8 sm:gap-6 sm:grid-cols-4">
                    <div>
                            <h2 className="mb-6 text-sm font-semibold  uppercase ">{languages[language].footer.adverts}</h2>
                            <ul className=" font-medium">
                                <li className="mb-4"><a href="#" className="">Cd Key</a> </li>
                                <li className="mb-4"><a href="#" className="">{languages[language].footer.accountSales}</a></li>
                                <li className="mb-4"><a href="#" className="">İtem & Skin</a></li>
                                <li className="mb-4"><a href="#" className="">{languages[language].footer.gameCash}</a></li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-6 text-sm font-semibold  uppercase ">{languages[language].footer.helpCenter}</h2>
                            <ul className="  font-medium">
                                <li className="mb-4">
                                    <a href="https://flowbite.com/" className="">{languages[language].footer.howDoIBuy}</a>
                                </li>
                                <li className="mb-4">
                                    <a href="https://tailwindcss.com/" className="">{languages[language].footer.payment}</a>
                                </li>
                                <li className="mb-4"><a href="">{languages[language].footer.aboutPreOrder}</a></li>
                                <li className="mb-4"><a href="">{languages[language].footer.refundTerms}</a></li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-6 text-sm font-semibold  uppercase ">{languages[language].footer.user}</h2>
                            <ul className="  font-medium">
                                <li className="mb-4">
                                    <a href="https://github.com/themesberg/flowbite" className=" ">{languages[language].footer.signIn}</a>
                                </li>
                                <li className="mb-4">
                                    <Link to="/register">{languages[language].footer.register}</Link>
                                </li>
                                <li className="mb-4">
                                    <a href="https://discord.gg/4eeurUVvTy" className="">{languages[language].footer.forgetPass}</a>
                                </li>
                                <li className="mb-4"><a href="#" className="">{languages[language].footer.contactUs}</a></li>

                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-6 text-sm font-semibold  uppercase ">UURGLSN</h2>
                            <ul className=" font-medium">
                                <li className="mb-4">
                                    <a href="#" className="">{languages[language].footer.aboutUs}</a>
                                </li>
                                <li className="mb-4"><a href="#" className="">{languages[language].footer.membershipTerms}</a></li>
                                <li className="mb-4"><a href="#" className="">{languages[language].footer.confirmationText}</a></li>
                                <li className="mb-4"><a href="#" className="">{languages[language].footer.electronicMsgConfirm}</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="sm:flex py-3   sm:items-center sm:justify-between">
                    <span className="text-sm  sm:text-center ">© 2023 <a href="#" className="">UURGLSN</a> {languages[language].footer.reserved}
                    </span>
                    <div className="flex mt-4 mr-16 space-x-6 sm:justify-center sm:mt-0">
                        <a href="#" className="  hover:text-[#1877f2] transition-colors ">
                            <BsFacebook />
                        </a>
                        <a href="#" className="hover:text-[#5865f2] transition-colors">
                            <BsDiscord />
                        </a>
                        <a href="#" className="hover:text-[#e1306c] transition-colors">
                            <BsInstagram />
                        </a>
                        <a href="#" className="hover:text-[#1da1f2] transition-colors">
                            <BsTwitter />
                        </a>
                        <a href="#" className="  hover:text-[#ff0000] transition-colors">
                            <BsYoutube />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;

