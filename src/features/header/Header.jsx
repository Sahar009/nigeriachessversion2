import { Button } from "../../components/Button"
import { Nav } from "../../components/Nav/Nav"
import bgimage from '../../assets/image/bg-1.jpg'
import { motion } from "framer-motion"
import { fadeIn } from "../../components/FramerVariant"
import Eco from '../../assets/image/ecobank-white-01-1024x1024.png';



export const Header = () => {
  return (
    <div className="relative h-screen">
       <Nav/>
     <div className="w-full lg:flex">
     <div className="relative h-full lg:w-1/2 lg:p-10">
     <div className="w-full  lg:hidden absolute top-0 z-10   h-screen object-cover"><img className="h-full object-cover" src={bgimage} alt="image" /></div>
     <motion.div
      variants={fadeIn('down', 0.1)}
      initial="hidden"
      whileInView={'show'}
      viewport={{once: false}}
      className="absolute z-20 mt-40 p-4 space-y-4 lg:p-12">
      <div className="w-24 hover:bg-blue-800 button-blink bg-blue-600  p-5 rounded-full">
                <img src={Eco} alt="sponsor logo" />
              </div>
     <h1 className="text-4xl text-white lg:text-black font-bold text-left ">Ecobank National Schools Team Chess Championship 2024</h1>
     <p className="text-left text-white lg:text-black font-thin text-xl ">Date: 24th - 28th May, 2024</p>
     <p className="text-xl text-white lg:text-black text-left font-thin ">Venue: Pan African Centre, Ecobank HQ, Victoria Island, Lagos State.</p>
     <Button label={'Register'} />
     </motion.div>
     <div>
     
     </div>
     </div>
    <div className="hidden lg:w-1/2 lg:flex lg:h-screen">
    <div className="w-full   h-full object-cover"><img className="h-full object-cover" src={bgimage} alt="image" /></div>
    </div>
       
      </div>
      <div>
      </div>
     </div>
  )
}
