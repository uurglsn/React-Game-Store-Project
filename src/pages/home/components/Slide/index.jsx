import { Slide } from 'react-slideshow-image';
import './styles.css'
import languages from "../../../../jsons/languages/languages.json"
import { useSelector } from 'react-redux';




import bgVideo2 from "./videos/slideVideo_1.mp4"
import bgVideo1 from "./videos/slideVideo_2.mp4"
import bgVideo3 from "./videos/slideVideo_3.mp4"
import bgVideo4 from "./videos/slideVideo_4.mp4"




const properties = {
  duration: 15000,
  transitionDuration: 500,
  infinite: false,
  indicators: true,
  arrows: false
}





const Index = () => {
  const { language } = useSelector((state) => state.theme);
  return (

    <Slide   {...properties}>
      <div className=' rounded-3xl -z-50   h-[65vh]' >
        <video className='-z-50  w-full h-full    object-cover   rounded-3xl' disablePictureInPicture  autoPlay muted="muted" loop="loop" id="myVideo">
          <source src={bgVideo1} type="video/mp4  " />
        </video>
        <div className=' flex flex-col items-center gap-5 z-50 absolute max-xl:left-[13%]  max-md:left-[5%]  max-lg:left-[5%]    max-sm:left-[5%] left-[15.3%] bottom-[7%]'>
          <h3 style={{ fontSize: "25px", background: "linear-gradient(to right, rgb(96, 165, 250), rgb(52, 211, 153))", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", }}>
            Call Of Duty MW2</h3>
          <div className='flex items-center  gap-x-2'>
            <p className=' max-iphoneSE:hidden  max-galaxyS:hidden max-iphone:hidden max-galaxyNote:hidden max-ultraPhone:hidden  max-iphone13:hidden text-sky-500' style={{ fontSize: "25px", }}> %15 İNDİRİM</p>
            <del className=' max-iphoneSE:hidden  max-galaxyS:hidden max-iphone:hidden max-galaxyNote:hidden max-ultraPhone:hidden  max-iphone13:hidden text-sky-500' style={{ fontSize: "25px", }}>  ₺1200,00</del>
            <p style={{ fontSize: "25px", background: "linear-gradient(to right, rgb(96, 165, 250), rgb(52, 211, 153))", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", }} >
              ₺999,00 </p>
          </div>
          <button type="button" className=" px-10  transition-all   text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm py-2.5 text-center mr-2 mb-2">{languages[language].buttons.buy}</button>
        </div>
      </div>





      <div className='rounded-3xl -z-50   h-[65vh]' >
        <video className='-z-50  w-full h-full    object-cover   rounded-3xl' disablePictureInPicture autoPlay muted="muted" loop="loop" id="myVideo">
          <source src={bgVideo4} type="video/mp4  " />
        </video>
        <div className=' flex flex-col items-center gap-5 z-50 absolute max-xl:left-[38%] max-sm:left-[31%] max-lg:left-[31%] max-md:left-[31%] left-[41%] bottom-[7%]'>
          <h3 style={{ fontSize: "25px", background: "linear-gradient(to right, rgb(96, 165, 250), rgb(52, 211, 153))", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", }}>
          Battlefield 2042  </h3>
          <div className='flex items-center  gap-x-2'>
            <p className=' max-iphoneSE:hidden  max-galaxyS:hidden max-iphone:hidden max-galaxyNote:hidden max-ultraPhone:hidden  max-iphone13:hidden text-sky-500' style={{ fontSize: "25px", }}> %15 İNDİRİM</p>
            <del className=' max-iphoneSE:hidden  max-galaxyS:hidden max-iphone:hidden max-galaxyNote:hidden max-ultraPhone:hidden  max-iphone13:hidden text-sky-500' style={{ fontSize: "25px", }}>  ₺660,00</del>
            <p style={{ fontSize: "25px", background: "linear-gradient(to right, rgb(96, 165, 250), rgb(52, 211, 153))", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", }} >
              ₺599,00 </p>
          </div>
          <button type="button" className=" px-10  transition-all   text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm py-2.5 text-center mr-2 mb-2">{languages[language].buttons.buy}</button>
        </div>
      </div>



      <div className='rounded-3xl -z-50   h-[65vh]' >
        <video className='-z-50  w-full h-full    object-cover   rounded-3xl' disablePictureInPicture autoPlay muted="muted" loop="loop" id="myVideo">
          <source src={bgVideo3} type="video/mp4  " />
        </video>
        <div className=' flex flex-col items-center gap-5 z-50 absolute max-xl:left-[63%] max-sm:left-[52%] max-lg:left-[52%] max-md:left-[52%] right-[28%] bottom-[7%]'>
          <h3 style={{ fontSize: "25px", background: "linear-gradient(to right, rgb(96, 165, 250), rgb(52, 211, 153))", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", }}>
            The Legend of Zelda</h3>
          <div className='flex items-center  gap-x-2'>
            <p className=' max-iphoneSE:hidden  max-galaxyS:hidden max-iphone:hidden max-galaxyNote:hidden max-ultraPhone:hidden  max-iphone13:hidden text-sky-500' style={{ fontSize: "25px", }}> %6 İNDİRİM</p>
            <del className=' max-iphoneSE:hidden  max-galaxyS:hidden max-iphone:hidden max-galaxyNote:hidden max-ultraPhone:hidden  max-iphone13:hidden text-sky-500' style={{ fontSize: "25px", }}>  ₺860,00</del>
            <p style={{ fontSize: "25px", background: "linear-gradient(to right, rgb(96, 165, 250), rgb(52, 211, 153))", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", }} >
              ₺731,00 </p>
          </div>
          <button type="button" className=" px-10  transition-all   text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm py-2.5 text-center mr-2 mb-2">{languages[language].buttons.buy}</button>
        </div>
      </div>



      <div className=' rounded-3xl -z-50   h-[65vh]' >
        <video className='-z-50  w-full h-full    object-cover   rounded-3xl' disablePictureInPicture autoPlay muted="muted" loop="loop" id="myVideo">
          <source src={bgVideo2} type="video/mp4  " />
        </video>
        <div className=' flex flex-col items-center gap-5 z-50 max-md:left-[77%] max-xl:right-[2%]  max-sm:left-[77%] max-lg:left-[77%] absolute right-[2%] bottom-[7%]'>
          <h3 style={{ fontSize: "25px", background: "linear-gradient(to right, rgb(96, 165, 250), rgb(52, 211, 153))", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", }}>
          Hogwarts Legacy </h3>
          <div className='flex items-center  gap-x-2'>
            <p className=' max-iphoneSE:hidden  max-galaxyS:hidden max-iphone:hidden max-galaxyNote:hidden max-ultraPhone:hidden  max-iphone13:hidden text-sky-500' style={{ fontSize: "25px", }}> %9 İNDİRİM</p>
            <del className=' max-iphoneSE:hidden  max-galaxyS:hidden max-iphone:hidden max-galaxyNote:hidden max-ultraPhone:hidden  max-iphone13:hidden text-sky-500' style={{ fontSize: "25px", }}>  ₺460,00</del>
            <p style={{ fontSize: "25px", background: "linear-gradient(to right, rgb(96, 165, 250), rgb(52, 211, 153))", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", }} >
              ₺331,00 </p>
          </div>
          <button type="button" className=" px-10  transition-all   text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm py-2.5 text-center mr-2 mb-2">{languages[language].buttons.buy}</button>
        </div>
      </div>























    </Slide >
  );
}

export default Index;
