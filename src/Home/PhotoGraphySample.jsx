import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/pagination";
import { EffectCube, Pagination } from "swiper";
import useClasses from "../hooks/useClasses";

const PhotoGraphySample = () => {
    const { classes } = useClasses()
    return (
        <div className="md:flex">
            <div className="md:w-1/2 w-full md:p-20 p-10">
                <Swiper
                    effect={"cube"}
                    grabCursor={true}
                    cubeEffect={{
                        shadow: true,
                        slideShadows: true,
                        shadowOffset: 20,
                        shadowScale: 0.94,
                    }}
                    pagination={true}
                    modules={[EffectCube, Pagination]}
                    className="mySwiper"
                >
                    {
                        classes.map(image => (
                            <SwiperSlide key={image._id}>
                                <img className="rounded-xl" src={image.image} alt="" />
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
            </div>
            <div className="md:w-1/2 w-full flex items-center justify-center md:p-20 p-10">
                <div className="join join-vertical w-full">
                    <div className="collapse collapse-arrow join-item border border-base-300">
                        <input type="radio" name="my-accordion-4" checked="checked" />
                        <div className="collapse-title text-xl font-medium">
                            Q1. What are the key benefits of enrolling in a photography school?
                        </div>
                        <div className="collapse-content">
                            <p>Comprehensive education, hands-on experience, expert guidance, and networking opportunities.</p>
                        </div>
                    </div>
                    <div className="collapse collapse-arrow join-item border border-base-300">
                        <input type="radio" name="my-accordion-4" />
                        <div className="collapse-title text-xl font-medium">
                            Q2. What sets your photography school apart from others in the industry?
                        </div>
                        <div className="collapse-content">
                            <p>Specialized focus, industry-experienced faculty, diverse learning opportunities, and career support.</p>
                        </div>
                    </div>
                    <div className="collapse collapse-arrow join-item border border-base-300">
                        <input type="radio" name="my-accordion-4" />
                        <div className="collapse-title text-xl font-medium">
                            Q3. Do I need any prior photography experience to join your school?
                        </div>
                        <div className="collapse-content">
                            <p>No prior experience required. All skill levels welcome.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PhotoGraphySample;