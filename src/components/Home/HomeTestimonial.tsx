import TestimonialCard from '../Shared/TestimonialCard';
import { HomeData } from './HomeData';
import type SwiperCore from 'swiper';
import { Navigation, Scrollbar, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';
import { useRef } from 'react';
import Bar from '../Shared/Bar';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';
const HomeTestimonial = () => {
  const swiperRef1 = useRef<SwiperCore>();
  return (
    <div>
      <Bar title={HomeData.testimonials.testimonials_title.ar} symbol={'star'} color={'text-yellow-400'}></Bar>
      <br />
      <div className="flex flex-row items-center w-11/12 mx-auto">
        <button>
          <HiChevronRight
            className="text-3xl md:text-7xl"
            onClick={() => swiperRef1.current?.slidePrev()}
          ></HiChevronRight>
        </button>
        <Swiper
          onBeforeInit={(swiper) => {
            swiperRef1.current = swiper;
          }}
          centeredSlides={true}
          dir="rtl"
          modules={[Navigation, Scrollbar, Autoplay]}
          scrollbar={{ draggable: true }}
          breakpoints={{
            640: { slidesPerView: 1 },
            1024: { slidesPerView: 2 }
          }}
          className="w-11/12"
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
            pauseOnMouseEnter: true
          }}
        >
          {Object.values(HomeData.testimonials.testimonials_data).map((e, index) => (
            <SwiperSlide key={index} className="px-5 mb-24">
              {({ isActive }) => (
                <TestimonialCard content={e.content} job={e.job} name={e.name} key={index} isActive={isActive} />
              )}
            </SwiperSlide>
          ))}
        </Swiper>
        <button>
          <HiChevronLeft
            className="text-3xl md:text-7xl"
            onClick={() => swiperRef1.current?.slideNext()}
          ></HiChevronLeft>
        </button>
      </div>
    </div>
  );
};
export default HomeTestimonial;
