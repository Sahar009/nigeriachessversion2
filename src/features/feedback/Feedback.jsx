import { Button } from "../../components/Button"
import leftVideo from '../../assets/image/Animation - 1739886508156 (1).mp4'
import Aos from "aos"
import "aos/dist/aos.css";
import { useEffect } from "react"; 


export const Feedback = () => {
    useEffect(() => {
        Aos.init({
          duration: 1000,
        });
      })
  return (
    <div className="w-full  lg:flex overflow-x-hidden">
        <div
         className="lg:w-1/2 hidden lg:flex items-center justify-center" data-aos="fade-right">
            <iframe className="w-96 h-80" src="https://lottie.host/embed/897666e7-2690-49f6-ad42-e742a62c15d8/MiOyhg9Umc.lottie"></iframe>
          </div>
        <div className="w-full lg:w-1/2 flex flex-col space-y-5 px-4  lg:px-16">
           <div>
            <h1  className="text-3xl font-semibold text-blue-400" data-aos="fade-right">Send us feedback </h1>
            <p  className="text-sm text-medium-gray" data-aos="fade-left">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non,
                 temporibus repudiandae! Perferendis eaque sit quaerat.</p>
           </div>
            <form className="flex flex-col items-start space-y-6">
              <div className="w-full h-12 " data-aos="fade-up">
                <input className="w-full h-full bg-transparent px-5 border-l-2 outline-none border-b-0 border-blue-700" type="text" placeholder="John amos "/>
              </div>
              <div className="w-full h-12 " data-aos="fade-up">
                <input className="w-full h-full bg-transparent px-5 border-l-2 outline-none  border-blue-700" type="email" placeholder="janetwealth@gmail.com"/>
              </div>
              <div className="w-full h-24" data-aos="fade-up">
                <textarea className="w-full h-24 resize-none  bg-transparent px-5 border-l-2 outline-none  border-blue-700" name="" id="" placeholder="write something..."></textarea>
              </div>

             <div data-aos="fade-up"><Button label={'Send Feedback'} /></div> 
            </form>
        </div>
    </div>
  )
}
