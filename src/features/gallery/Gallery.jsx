import { Nav } from "../../components/Nav/Nav"
import { SliderImg } from "../../components/sliderprops"
import { Footer } from "../Footer/Footer"


export const Gallery = () => {
  return (
    <>
    <Nav/>
    <div className="p-6 lg:p-14 mt-24">
    <h1 className="text-2xl font-bold mb-4">Gallery</h1>
    
    <div className="grid gap-4 md:gap-6 grid-cols-[repeat(auto-fit,minmax(150px,1fr))]">
      {SliderImg.map((src, index) => (
        <img key={index}  src={src} alt={`Gallery item ${index + 1}`} className="w-full h-48 object-cover rounded-lg shadow-md" />
      ))}
    </div>
  </div>
  <Footer/>
  </>
  )
}
