import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";
import slide01 from '../assets/Images/slide01.jpg'
import slide02 from '../assets/Images/slide02.jpg'
import slide03 from '../assets/Images/slide03.jpg'
import slide04 from '../assets/Images/slide04.jpg'
import '../Css/Slider.css'


const Slider = () => {
  return (
    <div>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div>
            <span className="w-full h-full justify-center items-start flex-col bgColor absolute z-50 flex  md:p-24 p-16">
              <h1 className="md:text-5xl text-2xl font-bold text-white">Discovering the Art and <br />Science of Photography <br />at our Summer Camp</h1>
              <p className="text-base md:my-5 my-2 text-white">Discover your love for photography and immerse yourself <br />in a dynamic summer camp experience that will ignite <br />your creativity and expand your technical <br />skills behind the lens.</p>
              <button className="btn bg-green-500 text-white hover:text-green-500 border-none">Explore More</button>
            </span>
            <img className="w-full relative" src={slide01} alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <span className="w-full h-full justify-center items-start flex-col bgColor absolute z-50 flex  md:p-24 p-16">
              <h1 className="md:text-5xl text-2xl font-bold text-white">Exploring Photography <br />Through Nature and Culture</h1>
              <p className="text-base md:my-5 my-2 text-white">Explore Nature and Culture Through Photography": Embark on an exciting <br />photography adventure where you'll capture the beauty of nature and <br />immerse yourself in different cultures, guided by seasoned <br />photographers and surrounded by fellow enthusiasts.</p>
              <button className="btn btn-sm md:btn-lg bg-green-500 text-white hover:text-green-500 border-none">Explore More</button>
            </span>
            <img className="w-full relative" src={slide02} alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <span className="w-full h-full justify-center items-start flex-col bgColor absolute z-50 flex  md:p-24 p-16">
              <h1 className="md:text-5xl text-2xl font-bold text-white">Immersive Photography <br />Journey at Summer Camp</h1>
              <p className="text-base md:my-5 my-2 text-white">Join our intensive bootcamp and gain a comprehensive understanding of <br />photography, from camera basics to advanced techniques, empowering <br />you to capture stunning images and unleash your artistic vision.</p>
              <button className="btn btn-sm md:btn-lg bg-green-500 text-white hover:text-green-500 border-none">Explore More</button>
            </span>
            <img className="w-full relative" src={slide03} alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <span className="w-full h-full justify-center items-start flex-col bgColor absolute z-50 flex  md:p-24 p-16">
              <h1 className="md:text-5xl text-2xl font-bold text-white">A Summer Camp for <br />Aspiring Shutterbugs</h1>
              <p className="text-base md:my-5 my-2 text-white">Develop your storytelling skills through the lens as you learn to <br/>communicate powerful narratives with your photographs <br/>guided by industry professionals in a supportive and <br/>inspiring summer camp environment.</p>
              <button className="btn btn-sm md:btn-lg bg-green-500 text-white hover:text-green-500 border-none">Explore More</button>
            </span>
            <img className="w-full relative" src={slide04} alt="" />
          </div>
        </SwiperSlide>

      </Swiper>
    </div>
  );
};

export default Slider;