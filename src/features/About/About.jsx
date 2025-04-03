import { Button } from "../../components/Button"
import { FeatureList } from "./aboutProps"
import featuresImage from '../../assets/image/ad8.jpg'
import { FaRegArrowAltCircleDown } from "react-icons/fa"
import { useEffect } from "react"
import Aos from "aos"
import "aos/dist/aos.css";

export const About = () => {
  useEffect(() => {
    Aos.init({
      duration: 1000,
    });
  })
  return (
    <div className="w-full  min-h-screen flex flex-col p-4 space-y-5 py-16 lg:px-44 px-4 overflow-x-hidden">
      <div className="text-center">
        <h1 className="text-3xl font-bold" data-aos="fade-right">Overview</h1>
        <p  className="text-lg " data-aos="fade-up">The National Schools Team Chess Championships is the 
          flagship Nigeria Chess Federation (NCF) competition among 
          the teams of general educational institutions 
          (hereinafter referred to as “NSTCC”). The event shall 
          be governed by the General Regulations for FIDE 
          Competitions. NSTCC is organized under the aegis of 
          the Nigeria Chess Federation. Teams of chess academies, 
          chess clubs, chess departments of junior physical training clubs, 
          specialized sports schools, Olympic reserve schools, or those 
          that combine players from more than one general educational 
          institution are not allowed to participate
        </p>
      </div>

      <div className="flex flex-col lg:flex-row items-center lg:space-x-6 space-y-4">
        <div className="lg:w-1/2 lg:p-16 flex flex-col items-start space-y-5">
          <div data-aos="fade-up"><img className="rounded-2xl" src={featuresImage} alt="" /></div>
         <div data-aos="fade-left"> <Button  label={'download Tournament Regulations'} icon={<FaRegArrowAltCircleDown color="#fff" size={20} />}/> </div>
        </div>
        
        <div className="flex flex-col space-y-5 lg:w-1/2">
        {FeatureList.map((data,index)=>(
          <div className="" key={index} data-aos="fade-right">
          <div className="">
          {/* <div className="">{data.icon}</div> */}
      </div>
       <div className="">
          <h3 className="text-xl font-semibold text-blue-500">{data.heading}</h3>
             <p className="text-sm text-medium-gray">{data.text}</p>
       </div> 
     </div>
        ))
        }  
        
        </div>
      </div>
    </div>
  )
}
