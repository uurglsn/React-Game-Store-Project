
import appstoreLogo from "./images/appstore_logo.png"
import bluetvLogo from "./images/blutv_logo.png"
import googleplayLogo from "./images/googleplay_logo.png"
import netflixLogo from "./images/netflix_logo.png"
import pubgLogo from "./images/pubg_logo.jpeg"
import appleMusicLogo from "./images/appleMusic_logo.jpg"

const Epin = () => {

    return (
        <>
            <h2 className="text-center  mt-10  text-2xl">E-PIN</h2>
            <div className=" max-xl:grid-cols-5 max-xl:gap-6 max-lg:grid-cols-3 max-md:grid-cols-3 max-sm:grid-cols-2 grid grid-cols-6 gap-x-3 mt-5">
                <div style={{ backgroundImage: `url(${appleMusicLogo})`, boxShadow: "rgba(0, 0, 0, 0.35) 0px -50px 36px 1px inset" }} className="grid   dark:opacity-100  cursor-pointer   content-end justify-center   bg-cover    rounded-2xl  hover:rounded-xl  opacity-70 hover:opacity-100 transition-all  w-48 h-48">
                    <h3 className="  mb-1 text-white">
                        APPLE MUSIC
                    </h3>
                </div>
                <div style={{ backgroundImage: `url(${appstoreLogo})`, boxShadow: "rgba(0, 0, 0, 0.35) 0px -50px 36px 1px inset" }} className="grid    dark:opacity-100 cursor-pointer   content-end justify-center   bg-cover    rounded-2xl  hover:rounded-xl  opacity-70 hover:opacity-100 transition-all  w-48 h-48">
                    <h3 className="  mb-1 text-white">
                        APPSTORE
                    </h3>
                </div>
                <div style={{ backgroundImage: `url(${bluetvLogo})`, boxShadow: "rgba(0, 0, 0, 0.35) 0px -50px 36px 1px inset" }} className="grid    dark:opacity-100 cursor-pointer   content-end justify-center   bg-cover    rounded-2xl  hover:rounded-xl  opacity-70 hover:opacity-100 transition-all  w-48 h-48">
                    <h3 className="  mb-1 text-white">
                        BLUTV
                    </h3>
                </div>
                <div style={{ backgroundImage: `url(${googleplayLogo})`, boxShadow: "rgba(0, 0, 0, 0.35) 0px -50px 36px 1px inset" }} className="grid    dark:opacity-100 cursor-pointer   content-end justify-center   bg-cover    rounded-2xl  hover:rounded-xl  opacity-70 hover:opacity-100 transition-all  w-48 h-48">
                    <h3 className="  mb-1 text-white">
                        GOOGLE PLAY
                    </h3>
                </div>
                <div style={{ backgroundImage: `url(${netflixLogo})`, boxShadow: "rgba(0, 0, 0, 0.35) 0px -50px 36px 1px inset" }} className="grid   dark:opacity-100  cursor-pointer   content-end justify-center   bg-cover    rounded-2xl  hover:rounded-xl  opacity-70 hover:opacity-100 transition-all  w-48 h-48">
                    <h3 className="  mb-1 text-white">
                        NETFLIX
                    </h3>
                </div>
                <div style={{ backgroundImage: `url(${pubgLogo})`, boxShadow: "rgba(0, 0, 0, 0.35) 0px -50px 36px 1px inset" }} className="grid   dark:opacity-100  cursor-pointer   content-end justify-center   bg-cover    rounded-2xl  hover:rounded-xl  opacity-70 hover:opacity-100 transition-all  w-48 h-48">
                    <h3 className="  mb-1 text-white">
                        PUBG UC
                    </h3>
                </div>

            </div>
        </>

    );
}

export default Epin;
