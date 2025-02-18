import { useEffect, useState } from "react";
import { About } from "../About/About";
import { Footer } from "../Footer/Footer";
import { Header } from "../header/Header";
import { Slider } from "../Slider/Slider";
import { Sponsor } from "../sponsor/Sponsor";
import { Feedback } from "../feedback/Feedback";

export const Home = () => {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const sections = document.querySelectorAll(".section");

    const observer = new IntersectionObserver(
      (entries) => {
        let visibleSection = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)[0];

        if (visibleSection) {
          setTheme(visibleSection.target.getAttribute("data-theme") || "light");
        }
      },
      {
        threshold: 0.5, // Trigger when 50% of a section is visible
        rootMargin: "-20% 0px -20% 0px", // Detect earlier
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => sections.forEach((section) => observer.unobserve(section));
  }, []);

  return (
    <div className={theme === "dark" ? "dark" : ""}>
      <div className="bg-white text-black dark:bg-black dark:text-white transition-all duration-500 min-h-screen">
        <div className="section h-screen" >
        <Header />
        </div>
        {/* Sections with different themes */}
        <div className="section min-h-screen relative " data-theme="light">
          <About />
        </div>

        <div className="section flex flex-col  min-h-screen" data-theme="dark">
          <Sponsor />
          <Slider />
        </div>

        <div className="section h-screen" data-theme="light">
          <h1>No data </h1>
        </div>
        <div className="section h-screen flex items-center" data-theme='dark' >
           <Feedback/>
        </div>
        

        <Footer />
      </div>
    </div>
  );
};
