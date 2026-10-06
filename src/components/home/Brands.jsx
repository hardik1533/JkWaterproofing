import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

const Brands = () => {
  const brands = [
    { name: "Dr Fixit", logo: "https://via.placeholder.com/150x80/ffffff/000000?text=Dr+Fixit" },
    { name: "Sika", logo: "https://via.placeholder.com/150x80/ffffff/000000?text=Sika" },
    { name: "Pidilite", logo: "https://via.placeholder.com/150x80/ffffff/000000?text=Pidilite" },
    { name: "BASF", logo: "https://via.placeholder.com/150x80/ffffff/000000?text=BASF" },
    { name: "Sunanda", logo: "https://via.placeholder.com/150x80/ffffff/000000?text=Sunanda" },
    { name: "STP", logo: "https://via.placeholder.com/150x80/ffffff/000000?text=STP" },
    { name: "Nilobit", logo: "https://via.placeholder.com/150x80/ffffff/000000?text=Nilobit" }
  ];

  const clients = [
    { name: "Larsen & Toubro", logo: "https://via.placeholder.com/150x80/ffffff/000000?text=L&T" },
    { name: "UltraTech", logo: "https://via.placeholder.com/150x80/ffffff/000000?text=UltraTech" },
    { name: "GVK", logo: "https://via.placeholder.com/150x80/ffffff/000000?text=GVK" },
    { name: "Reliance", logo: "https://via.placeholder.com/150x80/ffffff/000000?text=Reliance" },
    { name: "Tata Projects", logo: "https://via.placeholder.com/150x80/ffffff/000000?text=Tata" },
    { name: "Shapoorji Pallonji", logo: "https://via.placeholder.com/150x80/ffffff/000000?text=Shapoorji" }
  ];

  return (
    <section className="py-16 bg-white dark:bg-[#0b1120] border-y border-gray-200 dark:border-white/5 transition-colors duration-300">
      <div className="container-custom">
        {/* Brands Section */}
        <div className="mb-16">
          <div className="text-center mb-10">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white transition-colors duration-300">Premium Materials We Use</h3>
          </div>
          <Swiper
            modules={[Autoplay]}
            spaceBetween={30}
            slidesPerView={2}
            loop={true}
            speed={3000}
            autoplay={{ delay: 0, disableOnInteraction: false }}
            breakpoints={{
              640: { slidesPerView: 3 },
              768: { slidesPerView: 4 },
              1024: { slidesPerView: 6 },
            }}
            className="continuous-slider"
          >
            {brands.map((brand, index) => (
              <SwiperSlide key={index}>
                <div className="h-20 flex items-center justify-center p-4 grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all duration-300 mix-blend-multiply dark:mix-blend-normal">
                  <img src={brand.logo} alt={brand.name} className="max-h-full max-w-full object-contain dark:invert opacity-70 hover:opacity-100 transition-opacity" />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Clients Section */}
        <div>
          <div className="text-center mb-10">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white transition-colors duration-300">Trusted By Industry Leaders</h3>
          </div>
          <Swiper
            modules={[Autoplay]}
            spaceBetween={30}
            slidesPerView={2}
            loop={true}
            speed={3500}
            autoplay={{ delay: 0, disableOnInteraction: false, reverseDirection: true }}
            breakpoints={{
              640: { slidesPerView: 3 },
              768: { slidesPerView: 4 },
              1024: { slidesPerView: 5 },
            }}
            className="continuous-slider"
          >
            {clients.map((client, index) => (
              <SwiperSlide key={index}>
                <div className="h-20 flex items-center justify-center p-4 grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all duration-300 mix-blend-multiply dark:mix-blend-normal">
                  <img src={client.logo} alt={client.name} className="max-h-full max-w-full object-contain dark:invert opacity-70 hover:opacity-100 transition-opacity" />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      
      {/* Add custom CSS for smooth continuous swiper */}
      <style dangerouslySetInnerHTML={{__html: `
        .continuous-slider .swiper-wrapper {
          transition-timing-function: linear !important;
        }
      `}} />
    </section>
  );
};

export default Brands;
