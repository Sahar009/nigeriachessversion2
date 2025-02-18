import { Link } from "react-router-dom";
import { UsefulProps } from "./footerprops";
import { ContactProps } from "./footerprops";
import footerimage from '../../assets/image/Chess Championship-02.webp'

export const Footer = () => {
  return (
    <div className="w-full bg-black p-6 py-14">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 auto-fit gap-6">


        <div>
        <div>
            <img src={footerimage} alt="image" className="mx-auto w-full" />
          </div>
        </div>
        
      


        {/* Useful Links */}
        <div>
          <h1 className="text-lg text-white font-semibold underline">Useful Links</h1>
          <div className="space-y-1">
            {UsefulProps.map((data, index) => (
              <div key={index}>
                <Link href={data.link} className="text-white hover:underline hover:text-blue-400">
                  {data.label}
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Us */}
        <div>
          <h1 className="text-lg text-white font-semibold underline ">Contact Us</h1>
          <div className="space-y-1 flex items-center space-x-2">
            {ContactProps.map((data, index) => (
              <div key={index} className="flex items-center "> 
                <Link href={data.link} className="text-white hover:underline">
                  <img className="w-8 " src={data.icon} alt="" /> 
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* Logo & Copyright */}
        <div className="">
        <div className="w-full flex items-center justify-center ">
  <input
    type="text"
    placeholder="Enter your email"
    className="p-2 border rounded-l-lg w-64 outline-none text-dark-gray"
  />
  <button className="bg-blue-600 text-white py-2 px-4 rounded-r-lg">
    Subscribe
  </button>
</div>
          <p className="text-sm text-white">
            © 2024 nationalschoolschess.com
          </p>
        </div>
      </div>
    </div>
  );
};
