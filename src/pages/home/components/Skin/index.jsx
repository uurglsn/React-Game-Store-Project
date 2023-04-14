import csGoSkinIMG from "./images/csgo_skin.jpg"
import pubgSkinIMG from "./images/pubg_skin.jpg"
import rustSkinIMG from "./images/rust_skin.jpeg"
import dotaSkinIMG from "./images/dota_skin.jpg"
import riseOnlineIMG from "./images/riseonlineItem.jpg"
import csgoLogo from "./images/csgoLogo.png"
import pubgLogo from "./images/pubgLogo.png"
import rustLogo from "./images/rustLogo.png"
import dotaLogo from "./images/dota2Logo.png"
import riseOnlineLogo from "./images/riseonlineLogo.png"
import languages from "../../../../jsons/languages/languages.json"
import { useSelector } from "react-redux";
const Index = () => {
    const { language } = useSelector((state) => state.appRedux);
    return (
        <>
            <h1 className=" flex justify-center  text-3xl  mt-16">{languages[language].categories.skinsHeader}</h1>
            <div className="grid grid-cols-5 max-lg:grid-cols-2    mt-10        mx-auto  gap-10    w-5/6   h-[750px]">
                <div style={{ backgroundImage: `url(${csGoSkinIMG})` }} className=" group flex justify-center   dark:opacity-100   transition duration-300 ease-in-out hover:scale-110  hover:cursor-pointer   shadow-skinCategories  opacity-70 hover:opacity-100    rounded-3xl     bg-center bg-cover col-span-2 row-span-2">
                    <div className=" hidden   group-hover:flex     w-4/6 flex-col justify-center justify-items-center transition-all">
                        <img className=" transition-all  w-full group-hover:animate-pulse " src={csgoLogo}  />
                    </div>

                </div>
                <div style={{ backgroundImage: `url(${pubgSkinIMG})`, }} className="  group flex justify-center   dark:opacity-100 shadow-skinCategories  duration-300 ease-in-out hover:scale-110 hover:opacity-100 transition-all hover:cursor-pointer opacity-50 rounded-3xl bg-center  bg-cover col-span-2">
                    <div className="   invisible group-hover:visible flex    w-56 flex-col justify-center justify-items-center transition-all">
                        <img className=" transition-all  w-full group-hover:animate-pulse" src={pubgLogo} />
                    </div>
                </div>
                <div style={{ backgroundImage: `url(${dotaSkinIMG})`, }} className="  group  flex justify-center  dark:opacity-100 shadow-skinCategories  duration-300 ease-in-out hover:scale-110 hover:opacity-100 transition-all hover:cursor-pointer opacity-50 rounded-3xl  bg-center bg-cover col-span-1">
                <div className=" invisible group-hover:visible flex   w-56 flex-col justify-center justify-items-center transition-all">
                        <img className="  transition-all  w-full group-hover:animate-pulse" src={dotaLogo} />
                    </div>
                </div>
                <div style={{ backgroundImage: `url(${riseOnlineIMG})`, }} className="  group  flex justify-center  dark:opacity-100 shadow-skinCategories  duration-300 ease-in-out hover:scale-110 hover:opacity-100 transition-all hover:cursor-pointer opacity-50 rounded-3xl  bg-center bg-cover col-span-1">
                <div className=" invisible group-hover:visible flex   w-56 flex-col justify-center justify-items-center transition-all">
                        <img className="  transition-all  w-full group-hover:animate-pulse" src={riseOnlineLogo} />
                    </div>
                </div>
                <div style={{ backgroundImage: `url(${rustSkinIMG})`, }} className="  group  flex justify-center  dark:opacity-100 shadow-skinCategories  duration-300 ease-in-out hover:scale-110 hover:opacity-100 transition-all hover:cursor-pointer opacity-50 rounded-3xl  bg-center bg-cover col-span-2">
                <div className=" invisible group-hover:visible flex   w-56 flex-col justify-center justify-items-center transition-all">
                        <img className="  transition-all  w-full group-hover:animate-pulse" src={rustLogo} />
                    </div>
                </div>
            </div>

        </>
    );
}

export default Index;

