import { useState, useEffect } from "react";
import navlogo from "../../assets/image/Chess Championship-02.png";
import { Button } from "../Button";
import { Link } from "react-router-dom";
import { HiBarsArrowDown, HiBarsArrowUp } from "react-icons/hi2";

export const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    // ✅ Detect Scroll to Fix Header
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`w-full fixed top-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <div className="h-24 flex px-6 md:px-20 justify-between items-center">
        {/* Logo */}
        <Link to='/'>
        <div className="w-36">
          <img src={navlogo} alt="logo" />
        </div>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-9">
          <ul className="flex space-x-9 text-lg font-medium">
            <li className="cursor-pointer text-black"><Link to={'/'}>Home</Link></li>
            <li className="cursor-pointer text-black"><Link to={'about'}>About</Link></li>
            <li className="cursor-pointer text-black"> <Link to={'/gallery'}>Gallery</Link></li>
          </ul>
          <Button label={"Contact Us"} />
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <HiBarsArrowUp  className="text-dark-gray" size={24} /> : <HiBarsArrowDown className="text-dark-gray" size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
{/* Mobile Menu */}
<div
  className={`md:hidden flex flex-col items-start space-y-10 bg-white transition-all duration-300 ease-in-out overflow-hidden ${
    isOpen ? "max-h-[500px] opacity-100 translate-y-0  p-6" : "max-h-0 opacity-0 -translate-y-4 "
  }`}
>
  <ul className="text-lg font-medium space-y-10">
    <li className="cursor-pointer text-blue-600"><Link to={'/'}>Home</Link></li>
    <li className="cursor-pointer text-blue-600"><Link to={'/about'}>About</Link></li>
    <li className="cursor-pointer text-blue-600"><Link to={'/gallery'}>Gallery</Link></li>
  </ul>
  <Button label={"Contact Us"} />
</div>

    </nav>
  );
};
