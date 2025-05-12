import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useDarkMode } from '../context/DarkModeContext';
import { FaTimes, FaChessKing } from 'react-icons/fa';

export const Gallery = () => {
  const { isDarkMode } = useDarkMode();
  const [selectedImage, setSelectedImage] = useState(null);
  const [isIntersecting, setIsIntersecting] = useState({});

  const galleryItems = [
    {
      id: 1,
      title: "Chess Tournament",
      image: "https://res.cloudinary.com/do537qymc/image/upload/v1747035027/_DSC5818_cex3vq.jpg"
    },
     {
      id: 2,
      title: "Chess Tournament",
      image: "https://res.cloudinary.com/do537qymc/image/upload/v1747035031/_DSC5848_fxg3tm.jpg"
    },
      {
      id: 3,
      title: "Chess Tournament",
      image: "https://res.cloudinary.com/do537qymc/image/upload/v1747035031/_DSC5871_xbtacx.jpg"
    },
    {
      id: 4,
      title: "Chess Tournament",
      image: "https://res.cloudinary.com/do537qymc/image/upload/v1747035032/_DSC5892_lvw7pv.jpg"
    },
    {
      id: 5,
      title: "Chess Tournament",
      image: "https://res.cloudinary.com/do537qymc/image/upload/v1747035033/_DSC5830_bls70s.jpg"
    },
    {
      id: 6,
      title: "Chess Tournament",
      image: "https://res.cloudinary.com/do537qymc/image/upload/v1747037755/_DSC6130_z8zsov.jpg"
    },
    {
      id: 7,
      title: "Chess Tournament",
      image: "https://res.cloudinary.com/do537qymc/image/upload/v1747037735/_DSC6221_ckssji.jpg"
    },
    {
      id: 8,
      title: "Chess Tournament",
      image: "https://res.cloudinary.com/do537qymc/image/upload/v1747037733/_DSC6216_ryqbar.jpg"
    },
    {
      id: 9,
      title: "Chess Tournament",
      image: "https://res.cloudinary.com/do537qymc/image/upload/v1747037734/_DSC6139_qvptdd.jpg"
    },
    {
      id: 10,
      title: "Chess Tournament",
      image: "    https://res.cloudinary.com/do537qymc/image/upload/v1747037724/_DSC6087_vb31is.jpg"
    },

    {
      id: 11,
      title: "Chess Tournament",
      image: "https://res.cloudinary.com/do537qymc/image/upload/v1747037245/WhatsApp_Image_2025-05-11_at_23.06.23_4951be2c_o796tn.jpg"
    },
    {
      id: 12,
      title: "Chess Tournament",
      image: "https://res.cloudinary.com/do537qymc/image/upload/v1747037243/WhatsApp_Image_2025-05-11_at_23.06.21_57ba36dc_rwcpin.jpg"
    },
    {
      id: 13,
      title: "Chess Tournament",
      image: "https://res.cloudinary.com/do537qymc/image/upload/v1747037242/WhatsApp_Image_2025-05-11_at_23.06.20_10befe14_eilctm.jpg"
    },
    {
      id: 14,
      title: "Chess Tournament",
      image: "https://res.cloudinary.com/do537qymc/image/upload/v1747037164/IMG-20250512-WA0089_d0yydr.jpg"
    },
    {
      id: 15,
      title: "Chess Tournament",
      image: "https://res.cloudinary.com/do537qymc/image/upload/v1747037163/IMG-20250512-WA0090_bepqqz.jpg"
    },
    {
      id: 16,
      title: "Chess Tournament",
      image: "https://res.cloudinary.com/do537qymc/image/upload/v1747037194/WhatsApp_Image_2025-05-11_at_23.06.12_7598f757_req782.jpg"
    },
    {
      id: 17,
      title: "Chess Tournament",
      image: "https://res.cloudinary.com/do537qymc/image/upload/v1747037116/IMG-20250512-WA0074_rbt08l.jpg"
    },
    {
      id: 18,
      title: "Chess Tournament",
      image: "https://res.cloudinary.com/do537qymc/image/upload/v1747037091/IMG-20250512-WA0066_gddcv0.jpg"
    },
    {
      id: 19,
      title: "Chess Tournament",
      image: "https://res.cloudinary.com/do537qymc/image/upload/v1747037088/IMG-20250512-WA0060_ssbbds.jpg"
    },
    {
      id: 20,
      title: "Chess Tournament",
      image: "https://res.cloudinary.com/do537qymc/image/upload/v1747037036/IMG-20250512-WA0030_lmg1dg.jpg"
    },
    {
      id: 21,
      title: "Chess Tournament",
      image: "https://res.cloudinary.com/do537qymc/image/upload/v1747035078/_DSC6196_gdp0xs.jpg"
    },
    {
      id: 22,
      title: "Chess Tournament",
      image: "https://res.cloudinary.com/do537qymc/image/upload/v1747035025/_DSC5841_qlvbou.jpg"
    }
    ,
      {
      id: 23,
      title: "Chess Tournament",
      image: "https://res.cloudinary.com/do537qymc/image/upload/v1747035025/_DSC5841_qlvbou.jpg"
    },
    {
      id: 24,
      title: "Chess Tournament",
      image: "https://res.cloudinary.com/do537qymc/image/upload/v1747037722/_DSC6144_rrzpkq.jpg"
    },
    {
      id: 41,
      title: "Chess Tournament",
      image: "https://res.cloudinary.com/do537qymc/image/upload/v1747037718/_DSC6128_x3yofg.jpg"
    },
    {
      id: 25,
      title: "Chess Tournament",
      image: "https://res.cloudinary.com/do537qymc/image/upload/v1747037722/_DSC6144_rrzpkq.jpg"
    },
    {
      id: 26,
      title: "Chess Tournament",
      image: "https://res.cloudinary.com/do537qymc/image/upload/v1747037721/_DSC6098_q9mhzy.jpg"
    },
    {
      id: 27,
      title: "Chess Tournament",
      image: "https://res.cloudinary.com/do537qymc/image/upload/v1747037710/_DSC6114_v93a0c.jpg"
    },
    {
      id: 28,
      title: "Chess Tournament",
      image: "https://res.cloudinary.com/do537qymc/image/upload/v1747037365/_DSC5810_wgd3jm.jpg"
    },
    {
      id: 29,
      title: "Chess Tournament",
      image: "https://res.cloudinary.com/do537qymc/image/upload/v1747037360/_DSC5797_nrmuw6.jpg"
    },
    {
      id: 30,
      title: "Chess Tournament",
      image: "https://res.cloudinary.com/do537qymc/image/upload/v1747037359/_DSC5801_par0yt.jpg"
    },
    {
      id: 42,
      title: "Chess Tournament",
      image: "https://res.cloudinary.com/do537qymc/image/upload/v1747037300/WhatsApp_Image_2025-05-11_at_23.06.29_81cb335e_ypjglz.jpg"
    },
    {
      id: 31,
      title: "Chess Tournament",
      image: "https://res.cloudinary.com/do537qymc/image/upload/v1747037298/WhatsApp_Image_2025-05-11_at_23.06.29_9e1a07ba_tazekn.jpg"
    },
    {
      id: 32,
      title: "Chess Tournament",
      image: "https://res.cloudinary.com/do537qymc/image/upload/v1747037296/WhatsApp_Image_2025-05-11_at_23.06.27_44e66cc2_gcpry4.jpg"
    },
    {
      id: 33,
      title: "Chess Tournament",
      image: "https://res.cloudinary.com/do537qymc/image/upload/v1747037297/WhatsApp_Image_2025-05-11_at_23.06.28_3481e4ee_lljdkn.jpg"
    },
    {
      id: 34,
      title: "Chess Tournament",
      image: "https://res.cloudinary.com/do537qymc/image/upload/v1747037241/WhatsApp_Image_2025-05-11_at_23.06.17_ca4530bf_oh3khv.jpg"
    },
    {
      id: 35,
      title: "Chess Tournament",
      image: "https://res.cloudinary.com/do537qymc/image/upload/v1747037241/WhatsApp_Image_2025-05-11_at_23.06.20_828fffbc_yklmnx.jpg"
    },
    {
      id: 36,
      title: "Chess Tournament",
      image: "https://res.cloudinary.com/do537qymc/image/upload/v1747037194/WhatsApp_Image_2025-05-11_at_23.04.39_b8ec3b18_rrgtww.jpg"
    },
    {
      id: 37,
      title: "Chess Tournament",
      image: "https://res.cloudinary.com/do537qymc/image/upload/v1747037166/WhatsApp_Image_2025-05-11_at_23.04.28_ade758dc_citfxt.jpg"
    },
    {
      id: 38,
      title: "Chess Tournament",
      image: "https://res.cloudinary.com/do537qymc/image/upload/v1747037165/WhatsApp_Image_2025-05-11_at_23.03.57_f694b0c3_psuoit.jpg"
    },
    {
      id: 39,
      title: "Chess Tournament",
      image: "https://res.cloudinary.com/do537qymc/image/upload/v1747037114/IMG-20250512-WA0072_pi15f2.jpg"
    },
    {
      id: 40,
      title: "Chess Tournament",
      image: "https://res.cloudinary.com/do537qymc/image/upload/v1747035081/IMG-20250512-WA0006_fqklav.jpg"
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsIntersecting(prev => ({
            ...prev,
            [entry.target.dataset.id]: entry.isIntersecting
          }));
        });
      },
      {
        rootMargin: '50px',
        threshold: 0.1
      }
    );

    const images = document.querySelectorAll('.gallery-image');
    images.forEach((img) => observer.observe(img));

    return () => {
      images.forEach((img) => observer.unobserve(img));
    };
  }, []);

  return (
    <div className={`min-h-screen pt-20 ${isDarkMode ? "bg-gray-900 text-white" : "bg-gray-50 text-gray-800"}`}>
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <FaChessKing className={`mx-auto text-5xl mb-4 ${isDarkMode ? "text-blue-400" : "text-blue-600"}`} />
          <h1 className="text-4xl font-bold mb-4">Championship Gallery</h1>
          <p className={`${isDarkMode ? "text-gray-300" : "text-gray-600"}`}>
            Capturing moments of excellence in Nigerian school chess
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryItems.map((item) => (
            <motion.div
              key={item.id}
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className={`rounded-lg overflow-hidden shadow-lg ${
                isDarkMode ? "bg-gray-800" : "bg-white"
              }`}
            >
              <div 
                className="relative h-64 cursor-pointer overflow-hidden"
                onClick={() => setSelectedImage(item)}
              >
                <div
                  className="gallery-image w-full h-full"
                  data-id={item.id}
                >
                  {isIntersecting[item.id] && (
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
                      loading="lazy"
                      width="400"
                      height="300"
                      onLoad={(e) => {
                        e.target.classList.add('loaded');
                      }}
                    />
                  )}
                  {!isIntersecting[item.id] && (
                    <div className="w-full h-full bg-gray-200 dark:bg-gray-700 animate-pulse" />
                  )}
                </div>
                <div className={`absolute bottom-0 left-0 right-0 p-4 ${
                  isDarkMode 
                    ? "bg-gradient-to-t from-gray-900 to-transparent"
                    : "bg-gradient-to-t from-black/60 to-transparent"
                }`}>
                  <h3 className="text-white text-lg font-semibold">{item.title}</h3>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal for enlarged image */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.5 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.5 }}
              className="relative max-w-4xl w-full"
              onClick={e => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute -top-10 right-0 text-white text-2xl hover:text-gray-300"
              >
                <FaTimes />
              </button>
              <img
                src={selectedImage.image}
                alt={selectedImage.title}
                className="w-full h-auto rounded-lg"
                loading="eager"
                width="800"
                height="600"
              />
              <div className="mt-4 text-white">
                <h3 className="text-xl font-bold">{selectedImage.title}</h3>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};