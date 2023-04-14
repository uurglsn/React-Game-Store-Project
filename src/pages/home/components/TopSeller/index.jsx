import languages from "../../../../jsons/languages/languages.json"
import { useSelector } from 'react-redux';
import battleNetLogo from "./images/battleNet_logo.jpg"
import steamLogo from "./images/steam_logo.png"
import csGo2Logo from "./images/csGo2_logo.png"
import epicGamesLogo from "./images/epicGames_logo.png"
import riotGamesLogo from "./images/riotGames_logo.jpg"
import spotifyLogo from "./images/spotify_logo.jpg"

const TopSeller = () => {
    const { language } = useSelector((state) => state.appRedux);
    return (
        <>
            <h2 className="text-center  mt-10  text-2xl">{languages[language].categories.topSeller}</h2>
            <div className=" max-xl:grid-cols-5 max-xl:gap-6 max-lg:grid-cols-3 max-md:grid-cols-3 max-sm:grid-cols-2 grid grid-cols-6 gap-x-3 mt-5">

                <div style={{ backgroundImage: `url(${battleNetLogo})`, boxShadow: "rgba(0, 0, 0, 0.35) 0px -50px 36px 1px inset" }} className="grid   dark:opacity-100 cursor-pointer   content-end justify-center   bg-cover    rounded-2xl  hover:rounded-xl    opacity-70 hover:opacity-100 transition-all  w-48 h-48">
                    <h3 className="  mb-1 text-white">
                        BATTLE.NET
                    </h3>
                </div>
                <div style={{ backgroundImage: `url(${steamLogo})`, boxShadow: "rgba(0, 0, 0, 0.35) 0px -50px 36px 1px inset" }} className="grid  dark:opacity-100  cursor-pointer   content-end justify-center   bg-cover    rounded-2xl  hover:rounded-xl  opacity-70 hover:opacity-100 transition-all  w-48 h-48">
                    <h3 className="  mb-1 text-white">
                        {languages[language].buttons.steamWallet}
                    </h3>
                </div>
                <div style={{ backgroundImage: `url(${csGo2Logo})`, boxShadow: "rgba(0, 0, 0, 0.35) 0px -50px 36px 1px inset" }} className="grid  dark:opacity-100  cursor-pointer   content-end justify-center   bg-cover    rounded-2xl  hover:rounded-xl  opacity-70 hover:opacity-100 transition-all  w-48 h-48">
                    <h3 className="  mb-1 text-white">
                        CSGO SKIN
                    </h3>
                </div>
                <div style={{ backgroundImage: `url(${epicGamesLogo})`, boxShadow: "rgba(0, 0, 0, 0.35) 0px -50px 36px 1px inset" }} className="grid   dark:opacity-100 cursor-pointer   content-end justify-center   bg-cover    rounded-2xl  hover:rounded-xl  opacity-70 hover:opacity-100 transition-all  w-48 h-48">
                    <h3 className="  mb-1 text-white">
                        EPIC GAMES
                    </h3>
                </div>
                <div style={{ backgroundImage: `url(${riotGamesLogo})`, boxShadow: "rgba(0, 0, 0, 0.35) 0px -50px 36px 1px inset" }} className="grid   dark:opacity-100 cursor-pointer   content-end justify-center   bg-cover    rounded-2xl  hover:rounded-xl  opacity-70 hover:opacity-100 transition-all  w-48 h-48">
                    <h3 className="  mb-1 text-white">
                        RIOT POINTS
                    </h3>
                </div>
                <div style={{ backgroundImage: `url(${spotifyLogo})`, boxShadow: "rgba(0, 0, 0, 0.35) 0px -50px 36px 1px inset" }} className="grid  dark:opacity-100  cursor-pointer   content-end justify-center   bg-cover    rounded-2xl  hover:rounded-xl  opacity-70 hover:opacity-100 transition-all  w-48 h-48">
                    <h3 className="  mb-1 text-white">
                        SPOTIFY
                    </h3>
                </div>
            </div>
        </>

    );
}

export default TopSeller;
