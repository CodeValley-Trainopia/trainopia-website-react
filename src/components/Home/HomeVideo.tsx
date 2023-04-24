import { useRef } from 'react';
import { HiChevronRight, HiChevronLeft } from 'react-icons/hi';
import { Autoplay } from 'swiper';
import type SwiperCore from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
const HomeVideo = () => {
  const swiperRef1 = useRef<SwiperCore>();
  return (
    <>
      <div className="relative mx-auto h-full w-11/12">
        <button className="absolute top-1/2 right-0 z-20">
          <HiChevronRight
            className="lg:text-7xl text-2xl sm:text-4xl text-gray-500 "
            onClick={() => swiperRef1.current?.slidePrev()}
          ></HiChevronRight>
        </button>
        <Swiper
          onBeforeInit={(swiper) => {
            swiperRef1.current = swiper;
          }}
          modules={[Autoplay]}
          slidesPerView={1}
          className="w-full h-full"
          loop={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: true,
            pauseOnMouseEnter: true
          }}
        >
          <SwiperSlide key={0}>
            <div className="w-[90%] mx-auto ">
              <div className="rounded-lg border-2 sm:border-4 border-sky-600  embed-responsive my-3 aspect-ratio-4/3 sm:aspect-ratio-16/9">
                <iframe className="embed-responsive-item" src="https://www.youtube.com/embed/n13nhRymvPQ"></iframe>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide key={1}>
            <div className="w-[90%] mx-auto ">
              <div className="rounded-lg border-2 sm:border-4 border-sky-600  embed-responsive my-3 aspect-ratio-4/3 sm:aspect-ratio-16/9">
                <iframe className="embed-responsive-item" src="https://www.youtube.com/embed/kEI0ZcFXDy0"></iframe>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
        <button className="absolute top-1/2 left-0 z-20">
          <HiChevronLeft
            className="lg:text-7xl text-2xl sm:text-4xl text-gray-500 "
            onClick={() => swiperRef1.current?.slideNext()}
          ></HiChevronLeft>
        </button>
      </div>
    </>
  );
};
export default HomeVideo;
