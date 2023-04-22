import { Link } from "react-router-dom";
import { BsFacebook, BsDiscord, BsInstagram, BsTwitter, BsYoutube } from "react-icons/bs"
import languages from "../../jsons/languages/languages.json"
import { useSelector } from "react-redux";
const Footer = () => {
    const { language } = useSelector((state) => state.theme);
    return (

        <footer className="     max-sm:mx-0 mx-16">
            <div className=" w-full  mt-40 p-4 py-6 lg:py-8">
                <div className="md:flex md:justify-between sm:flex    xl:items-center xl:justify-between  py-16  border-y-[1px] border-blue-950  dark:border-white">
                    <div className="mb-6  md:mb-0">
                        <Link to="#" className="flex items-center max-lg:hidden">
                            <span className="     max-lg:hidden self-center text-2xl font-semibold whitespace-nowrap ">UURGLSN</span>
                        </Link>
                    </div>
                    
                    <div className="grid grid-cols-2 mr-16 gap-8 sm:gap-6 sm:grid-cols-4">
                    <div >
                            <h2 className="mb-6 text-sm font-semibold  uppercase ">{languages[language].footer.adverts}</h2>
                            <ul className=" font-medium">
                                <li className="mb-4"><Link to="#" className="">Cd Key</Link> </li>
                                <li className="mb-4"><Link to="#" className="">{languages[language].footer.accountSales}</Link></li>
                                <li className="mb-4"><Link to="#" className="">İtem & Skin</Link></li>
                                <li className="mb-4"><Link to="#" className="">{languages[language].footer.gameCash}</Link></li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-6 text-sm font-semibold  uppercase ">{languages[language].footer.helpCenter}</h2>
                            <ul className="  font-medium">
                                <li className="mb-4">
                                    <Link to="#" className="">{languages[language].footer.howDoIBuy}</Link>
                                </li>
                                <li className="mb-4">
                                    <Link to="https://tailwindcss.com/" className="">{languages[language].footer.payment}</Link>
                                </li>
                                <li className="mb-4"><Link to="">{languages[language].footer.aboutPreOrder}</Link></li>
                                <li className="mb-4"><Link to="">{languages[language].footer.refundTerms}</Link></li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-6 text-sm font-semibold  uppercase ">{languages[language].footer.user}</h2>
                            <ul className="  font-medium">
                                <li className="mb-4">
                                    <Link to="https://github.com/themesberg/#" className=" ">{languages[language].footer.signIn}</Link>
                                </li>
                                <li className="mb-4">
                                    <Link to="/register">{languages[language].footer.register}</Link>
                                </li>
                                <li className="mb-4">
                                    <Link to="https://discord.gg/4eeurUVvTy" className="">{languages[language].footer.forgetPass}</Link>
                                </li>
                                <li className="mb-4"><Link to="#" className="">{languages[language].footer.contactUs}</Link></li>

                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-6 text-sm font-semibold  uppercase ">UURGLSN</h2>
                            <ul className=" font-medium">
                                <li className="mb-4">
                                    <Link to="#" className="">{languages[language].footer.aboutUs}</Link>
                                </li>
                                <li className="mb-4"><Link to="#" className="">{languages[language].footer.membershipTerms}</Link></li>
                                <li className="mb-4"><Link to="#" className="">{languages[language].footer.confirmationText}</Link></li>
                                <li className="mb-4"><Link to="#" className="">{languages[language].footer.electronicMsgConfirm}</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="sm:flex py-3   sm:items-center sm:justify-between">
                    <span className="text-sm  sm:text-center ">© 2023 <Link to="#" className="">UURGLSN</Link> {languages[language].footer.reserved}
                    </span>
                    <div className="flex mt-4 mr-16 space-x-6 sm:justify-center sm:mt-0">
                        <Link to="#" className="  hover:text-[#1877f2] transition-colors ">
                            <BsFacebook />
                        </Link>
                        <Link to="#" className="hover:text-[#5865f2] transition-colors">
                            <BsDiscord />
                        </Link>
                        <Link to="#" className="hover:text-[#e1306c] transition-colors">
                            <BsInstagram />
                        </Link>
                        <Link to="#" className="hover:text-[#1da1f2] transition-colors">
                            <BsTwitter />
                        </Link>
                        <Link to="#" className="  hover:text-[#ff0000] transition-colors">
                            <BsYoutube />
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;

