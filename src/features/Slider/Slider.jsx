
import Marquee from "../../components/framerMarquee";
import { SliderImg } from "../../components/sliderprops";


export const Slider = () => {
    // const handleOnclick = () => {
    //     console.log("hello");
    //   };
      
    return (
        <div className="w-full lg:odd:last:mx-5 h-1/2 flex items-center justify-center  p-14 overflow-x-hidden">
        <Marquee >
        <div className="w-full  flex justify-around items-center space-x-5">
        {SliderImg.map((image, index) => (
        <div className="w-60 h-48" key={index}>
       <img className="w-full h-full object-cover rounded-xl" src={image} alt={`slider-${index}`} />
       </div>
  ))}
</div>
        </Marquee>
        </div>
      );
}

