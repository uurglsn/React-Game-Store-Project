import BannerlordBg from "./images/bannerlord.jpg"
import battlefield2042Bg from "./images/battlefield2042.jpeg"
import cyberpunkBg from "./images/cyberpunk2077.jpg"
import dayzBg from "./images/dayz.jpg"
import dyingLight2Bg from "./images/dyingLight2.jpeg"
import fifa23Bg from "./images/fifa23.jpeg"
import forest2Bg from "./images/forest2.png"
import gta5Bg from "./images/gta5.jpg"
import huntBg from "./images/hunt.jpg"
import jediBg from "./images/jediFallenOrder.jpg"
import mw2Bg from "./images/mw2.jpg"
import newWorldBg from "./images/newWorld.jpg"
import noManSkyBg from "./images/noManSky.png"
import rdr2Bg from "./images/redDead2.jpg"
import rustBg from "./images/rust.jpeg"
import { BsGraphDownArrow, BsSteam } from "react-icons/bs"
import { SiOrigin, SiEpicgames, SiBattledotnet } from "react-icons/si"
import languages from "../../../../jsons/languages/languages.json"
import { useSelector } from "react-redux";





const Discount = () => {
    const { language } = useSelector((state) => state.appRedux);
    return (
        <>
            <h2 className="text-center  mt-10  text-2xl">{languages[language].categories.discounts}</h2>

            <div className=" max-xl:grid-cols-4 max-xl:gap-6 max-lg:grid-cols-3 max-md:grid-cols-3  max-sm:grid-cols-2 grid grid-cols-5 gap-x-3 gap-y-6 mt-5 max-md:gap-x-3 max-md:mt-5">



                <div style={{ backgroundImage: `url(${noManSkyBg})`, boxShadow: "rgba(0, 0, 0, 0.35) 0px -50px 36px 1px inset" }}
                    className="  cursor-pointer max-lg:h-48 max-lg:w-48     bg-cover  bg-center   rounded-2xl  dark:opacity-100 hover:rounded-xl  opacity-70 hover:opacity-100 transition-all w-60  h-48 flex flex-col     gap-y-11">
                    <div className=" flex   justify-between   mx-5 mt-2">
                        <div className="bg-green-100 text-green-800 text-xs font-medium  rounded dark:bg-gray-700 dark:text-green-400 border border-green-400 flex items-center px-2">
                            <BsGraphDownArrow />%50  </div>
                        <BsSteam className="text-white     text-2xl " />
                    </div>
                    <div className="flex flex-col shadow-skinCategories  text-center mt-2  gap-y-2 text-white">
                        <del >200,00</del>
                        <p  > ₺100,00</p>
                        <p >No Man's Sky</p>
                    </div>
                </div>

                <div style={{ backgroundImage: `url(${rustBg})`, boxShadow: "rgba(0, 0, 0, 0.35) 0px -50px 36px 1px inset" }}
                    className="  cursor-pointer  max-lg:h-48 max-lg:w-48   bg-cover  bg-center   rounded-2xl  hover:rounded-xl  dark:opacity-100 opacity-70 hover:opacity-100 transition-all w-60  h-48 flex flex-col     gap-y-11">
                    <div className=" flex   justify-between   mx-5 mt-2">
                        <div className="bg-green-100 text-green-800 text-xs font-medium  rounded dark:bg-gray-700 dark:text-green-400 border border-green-400 flex items-center px-2">
                            <BsGraphDownArrow />%50  </div>
                        <BsSteam className="text-white     text-2xl " />
                    </div>
                    <div className="flex flex-col shadow-skinCategories  text-center mt-2  gap-y-2 text-white">
                        <del >200,00</del>
                        <p  > ₺100,00</p>
                        <p >Rust</p>
                    </div>
                </div>





                <div style={{ backgroundImage: `url(${rdr2Bg})`, boxShadow: "rgba(0, 0, 0, 0.35) 0px -50px 36px 1px inset" }}
                    className="  cursor-pointer  max-lg:h-48 max-lg:w-48   bg-cover  bg-center   rounded-2xl  hover:rounded-xl  dark:opacity-100 opacity-70 hover:opacity-100 transition-all w-60  h-48 flex flex-col     gap-y-11">
                    <div className=" flex   justify-between   mx-5 mt-2">
                        <div className="bg-green-100 text-green-800 text-xs font-medium  rounded dark:bg-gray-700 dark:text-green-400 border border-green-400 flex items-center px-2">
                            <BsGraphDownArrow />%35  </div>
                        <SiEpicgames className="text-white     text-2xl " />
                    </div>
                    <div className="flex flex-col shadow-skinCategories  text-center mt-2  gap-y-2 text-white">
                        <del >₺400,00</del>
                        <p  > ₺200,00</p>
                        <p > Red Dead Redemption 2</p>
                    </div>
                </div>









                <div style={{ backgroundImage: `url(${newWorldBg})`, boxShadow: "rgba(0, 0, 0, 0.35) 0px -50px 36px 1px inset" }}
                    className="  cursor-pointer max-lg:h-48 max-lg:w-48    bg-cover  bg-center   rounded-2xl  hover:rounded-xl  dark:opacity-100 opacity-70 hover:opacity-100 transition-all w-60  h-48 flex flex-col     gap-y-11">
                    <div className=" flex   justify-between   mx-5 mt-2">
                        <div className="bg-green-100 text-green-800 text-xs font-medium  rounded dark:bg-gray-700 dark:text-green-400 border border-green-400 flex items-center px-2">
                            <BsGraphDownArrow />%50  </div>
                        <BsSteam className="text-white     text-2xl " />
                    </div>
                    <div className="flex flex-col shadow-skinCategories  text-center mt-2  gap-y-2 text-white">
                        <del >200,00</del>
                        <p  > ₺100,00</p>
                        <p > New World</p>
                    </div>
                </div>
                <div style={{ backgroundImage: `url(${BannerlordBg})`, boxShadow: "rgba(0, 0, 0, 0.35) 0px -50px 36px 1px inset" }}
                    className="  cursor-pointer max-lg:h-48 max-lg:w-48     bg-cover  bg-center   rounded-2xl  hover:rounded-xl  dark:opacity-100 opacity-70 hover:opacity-100 transition-all w-60  h-48 flex flex-col     gap-y-11">
                    <div className=" flex   justify-between   mx-5 mt-2">
                        <div className="bg-green-100 text-green-800 text-xs font-medium  rounded dark:bg-gray-700 dark:text-green-400 border border-green-400 flex items-center px-2">
                            <BsGraphDownArrow />%15  </div>
                        <BsSteam className="text-white     text-2xl " />
                    </div>
                    <div className="flex flex-col shadow-skinCategories  text-center mt-2  gap-y-2 text-white">
                        <del >₺1200,00</del>
                        <p  > ₺999,00</p>
                        <p > Mount & Blade II: Bannerlord</p>
                    </div>
                </div>

                <div style={{ backgroundImage: `url(${battlefield2042Bg})`, boxShadow: "rgba(0, 0, 0, 0.35) 0px -50px 36px 1px inset" }}
                    className="  cursor-pointer max-lg:h-48 max-lg:w-48    bg-cover  bg-center   rounded-2xl  hover:rounded-xl  dark:opacity-100 opacity-70 hover:opacity-100 transition-all w-60  h-48 flex flex-col     gap-y-11">
                    <div className=" flex   justify-between   mx-5 mt-2">
                        <div className="bg-green-100 text-green-800 text-xs font-medium  rounded dark:bg-gray-700 dark:text-green-400 border border-green-400 flex items-center px-2">
                            <BsGraphDownArrow />%55  </div>
                        <SiOrigin className="text-white     text-2xl " />
                    </div>
                    <div className="flex flex-col shadow-skinCategories  text-center mt-2  gap-y-2 text-white">
                        <del >₺600,00</del>
                        <p  > ₺245,00</p>
                        <p > Battlefield 2042</p>
                    </div>
                </div>

                <div style={{ backgroundImage: `url(${cyberpunkBg})`, boxShadow: "rgba(0, 0, 0, 0.35) 0px -50px 36px 1px inset" }}
                    className="  cursor-pointer  max-lg:h-48 max-lg:w-48   bg-cover  bg-center   rounded-2xl  hover:rounded-xl  dark:opacity-100 opacity-70 hover:opacity-100 transition-all w-60  h-48 flex flex-col     gap-y-11">
                    <div className=" flex   justify-between   mx-5 mt-2">
                        <div className="bg-green-100 text-green-800 text-xs font-medium  rounded dark:bg-gray-700 dark:text-green-400 border border-green-400 flex items-center px-2">
                            <BsGraphDownArrow />%35  </div>
                        <SiEpicgames className="text-white     text-2xl " />
                    </div>
                    <div className="flex flex-col shadow-skinCategories  text-center mt-2  gap-y-2 text-white">
                        <del >₺400,00</del>
                        <p  > ₺200,00</p>
                        <p > Cyberpunk 2077</p>
                    </div>
                </div>
                <div style={{ backgroundImage: `url(${dayzBg})`, boxShadow: "rgba(0, 0, 0, 0.35) 0px -50px 36px 1px inset" }}
                    className="  cursor-pointer   max-lg:h-48 max-lg:w-48  bg-cover  bg-center   rounded-2xl  hover:rounded-xl  dark:opacity-100 opacity-70 hover:opacity-100 transition-all w-60  h-48 flex flex-col     gap-y-11">
                    <div className=" flex   justify-between   mx-5 mt-2">
                        <div className="bg-green-100 text-green-800 text-xs font-medium  rounded dark:bg-gray-700 dark:text-green-400 border border-green-400 flex items-center px-2">
                            <BsGraphDownArrow />%14  </div>
                        <BsSteam className="text-white     text-2xl " />
                    </div>
                    <div className="flex flex-col shadow-skinCategories  text-center mt-2  gap-y-2 text-white">
                        <del >₺300,00</del>
                        <p  > ₺150,00</p>
                        <p > DayZ</p>
                    </div>
                </div>
                <div style={{ backgroundImage: `url(${dyingLight2Bg})`, boxShadow: "rgba(0, 0, 0, 0.35) 0px -50px 36px 1px inset" }}
                    className="  cursor-pointer  max-lg:h-48 max-lg:w-48   bg-cover  bg-center   rounded-2xl  hover:rounded-xl  dark:opacity-100 opacity-70 hover:opacity-100 transition-all w-60  h-48 flex flex-col     gap-y-11">
                    <div className=" flex   justify-between   mx-5 mt-2">
                        <div className="bg-green-100 text-green-800 text-xs font-medium  rounded dark:bg-gray-700 dark:text-green-400 border border-green-400 flex items-center px-2">
                            <BsGraphDownArrow />%22  </div>
                        <SiEpicgames className="text-white     text-2xl " />
                    </div>
                    <div className="flex flex-col shadow-skinCategories  text-center mt-2  gap-y-2 text-white">
                        <del >₺400,00</del>
                        <p  > ₺200,00</p>
                        <p >
                            Dying Light 2</p>
                    </div>
                </div>


                <div style={{ backgroundImage: `url(${fifa23Bg})`, boxShadow: "rgba(0, 0, 0, 0.35) 0px -50px 36px 1px inset" }}
                    className="  cursor-pointer  max-lg:h-48 max-lg:w-48 bg-cover  bg-center   rounded-2xl  hover:rounded-xl  dark:opacity-100 opacity-70 hover:opacity-100 transition-all w-60  h-48 flex flex-col     gap-y-11">
                    <div className=" flex   justify-between   mx-5 mt-2">
                        <div className="bg-green-100 text-green-800 text-xs font-medium  rounded dark:bg-gray-700 dark:text-green-400 border border-green-400 flex items-center px-2">
                            <BsGraphDownArrow />%23  </div>
                        <SiOrigin className="text-white     text-2xl " />
                    </div>
                    <div className="flex flex-col shadow-skinCategories  text-center mt-2  gap-y-2 text-white">
                        <del >₺600,00</del>
                        <p  > ₺245,00</p>
                        <p > Fifa 2023</p>
                    </div>
                </div>


                <div style={{ backgroundImage: `url(${forest2Bg})`, boxShadow: "rgba(0, 0, 0, 0.35) 0px -50px 36px 1px inset" }}
                    className="  cursor-pointer max-lg:h-48 max-lg:w-48  bg-cover  bg-center   rounded-2xl  hover:rounded-xl  dark:opacity-100 opacity-70 hover:opacity-100 transition-all w-60  h-48 flex flex-col     gap-y-11">
                    <div className=" flex   justify-between   mx-5 mt-2">
                        <div className="bg-green-100 text-green-800 text-xs font-medium  rounded dark:bg-gray-700 dark:text-green-400 border border-green-400 flex items-center px-2">
                            <BsGraphDownArrow />%15  </div>
                        <BsSteam className="text-white     text-2xl " />
                    </div>
                    <div className="flex flex-col shadow-skinCategories  text-center mt-2  gap-y-2 text-white">
                        <del >₺1200,00</del>
                        <p  > ₺999,00</p>
                        <p > Sons of the Forest</p>
                    </div>
                </div>
                <div style={{ backgroundImage: `url(${gta5Bg})`, boxShadow: "rgba(0, 0, 0, 0.35) 0px -50px 36px 1px inset" }}
                    className="  cursor-pointer max-lg:h-48 max-lg:w-48   bg-cover  bg-center   rounded-2xl  hover:rounded-xl  dark:opacity-100 opacity-70 hover:opacity-100 transition-all w-60  h-48 flex flex-col     gap-y-11">
                    <div className=" flex   justify-between   mx-5 mt-2">
                        <div className="bg-green-100 text-green-800 text-xs font-medium  rounded dark:bg-gray-700 dark:text-green-400 border border-green-400 flex items-center px-2">
                            <BsGraphDownArrow />%30  </div>
                        <BsSteam className="text-white     text-2xl " />
                    </div>
                    <div className="flex flex-col shadow-skinCategories  text-center mt-2  gap-y-2 text-white">
                        <del >200,00</del>
                        <p  > ₺123,00</p>
                        <p >Grand Theft Auto V</p>
                    </div>
                </div>

                <div style={{ backgroundImage: `url(${huntBg})`, boxShadow: "rgba(0, 0, 0, 0.35) 0px -50px 36px 1px inset" }}
                    className="  cursor-pointer  max-lg:h-48 max-lg:w-48   bg-cover  bg-center   rounded-2xl  hover:rounded-xl  dark:opacity-100 opacity-70 hover:opacity-100 transition-all w-60  h-48 flex flex-col     gap-y-11">
                    <div className=" flex   justify-between   mx-5 mt-2">
                        <div className="bg-green-100 text-green-800 text-xs font-medium  rounded dark:bg-gray-700 dark:text-green-400 border border-green-400 flex items-center px-2">
                            <BsGraphDownArrow />%50  </div>
                        <BsSteam className="text-white     text-2xl " />
                    </div>
                    <div className="flex flex-col shadow-skinCategories  text-center mt-2  gap-y-2 text-white">
                        <del >100,00</del>
                        <p  > ₺50,00</p>
                        <p >Hunt: Showdown</p>
                    </div>
                </div>


                <div style={{ backgroundImage: `url(${jediBg})`, boxShadow: "rgba(0, 0, 0, 0.35) 0px -50px 36px 1px inset" }}
                    className="  cursor-pointer   max-lg:h-48 max-lg:w-48  bg-cover  bg-center   rounded-2xl  hover:rounded-xl  dark:opacity-100 opacity-70 hover:opacity-100 transition-all w-60  h-48 flex flex-col     gap-y-11">
                    <div className=" flex   justify-between   mx-5 mt-2">
                        <div className="bg-green-100 text-green-800 text-xs font-medium  rounded dark:bg-gray-700 dark:text-green-400 border border-green-400 flex items-center px-2">
                            <BsGraphDownArrow />%55  </div>
                        <SiOrigin className="text-white     text-2xl " />
                    </div>
                    <div className="flex flex-col shadow-skinCategories  text-center mt-2  gap-y-2 text-white">
                        <del >₺600,00</del>
                        <p  > ₺245,00</p>
                        <p > Star Wars Jedi: Fallen Order</p>
                    </div>
                </div>

                <div style={{ backgroundImage: `url(${mw2Bg})`, boxShadow: "rgba(0, 0, 0, 0.35) 0px -50px 36px 1px inset" }}
                    className="  cursor-pointer  max-lg:h-48 max-lg:w-48   bg-cover  bg-center   rounded-2xl  hover:rounded-xl  dark:opacity-100 opacity-70 hover:opacity-100 transition-all w-60  h-48 flex flex-col     gap-y-11">
                    <div className=" flex   justify-between   mx-5 mt-2">
                        <div className="bg-green-100 text-green-800 text-xs font-medium  rounded dark:bg-gray-700 dark:text-green-400 border border-green-400 flex items-center px-2">
                            <BsGraphDownArrow />%5  </div>
                        <SiBattledotnet className="text-white     text-2xl " />
                    </div>
                    <div className="flex flex-col shadow-skinCategories  text-center mt-2  gap-y-2 text-white">
                        <del >₺1200,00</del>
                        <p  > ₺925,00</p>
                        <p > Call of Duty Modern Warfare II</p>
                    </div>
                </div>



            </div>
        </>

    );
}

export default Discount;
