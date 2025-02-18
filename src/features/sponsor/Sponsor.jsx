import ReactPlayer from "react-player";
import Eco from '../../assets/image/ecobank-white-01-1024x1024.png';
import Aos from "aos"
import "aos/dist/aos.css";
import { useEffect } from "react";



export const Sponsor = () => {
  useEffect(() => {
      Aos.init({
        duration: 1000,
      });
    })
  return (
    <div className="w-full h-screen lg:h-96 bg-blue-500 lg:flex lg:flex-row flex-col lg:p-14 p-4 py-14 space-y-10 lg:space-y-0">
      <div  className="lg:w-1/2 w-full flex flex-col py-7 lg:py-0 justify-center items-center" >
        <h2 className="text-xl text-white" data-aos="fade-right">Our sponsor</h2>
        <p className="text-2xl text-white" data-aos="fade-left">Sponsor & Partners</p>
        <div className="w-40 hover:bg-blue-800 border-2 bg-blue-600 border-blue-700 p-5 rounded-full" data-aos="fade-up">
          <img src={Eco} alt="sponsor logo" />
        </div>
      </div>

      <div className="lg:w-1/2 w-full m-0 h-1/2 lg:h-full flex items-center justify-center" data-aos="fade-up">
        <div 
        className="w-full h-full">
          <ReactPlayer
            className="w-full h-full"
            url="https://youtube.com/shorts/kSTyCl9dEO4?feature=share"
            controls
            width="100%"
            height="100%"
          />
        </div>
      </div>
    </div>
  );
};
