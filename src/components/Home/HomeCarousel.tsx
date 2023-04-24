import { useRef } from 'react';
import { HiChevronRight, HiChevronLeft } from 'react-icons/hi';
import { Autoplay } from 'swiper';
import type SwiperCore from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { HomeData } from './HomeData';
interface Props {
  IsRTL: string;
}
const HomeCarousel = ({ IsRTL }: Props) => {
  const swiperRef1 = useRef<SwiperCore>();
  return (
    <div className="relative h-full w-full">
      <button className="absolute top-1/2 right-0 z-20">
        <HiChevronRight
          className="text-2xl text-gray-500 sm:text-4xl lg:text-7xl "
          onClick={() => swiperRef1.current?.slidePrev()}
        ></HiChevronRight>
      </button>
      <Swiper
        onBeforeInit={(swiper) => {
          swiperRef1.current = swiper;
        }}
        modules={[Autoplay]}
        slidesPerView={1}
        className="h-full w-full"
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
          pauseOnMouseEnter: true
        }}
      >
        {HomeData.carousels.map((i, index) => (
          <SwiperSlide key={index}>
            <div className="relative h-full w-full overflow-hidden">
              <div className="h-56 sm:h-72 md:h-96 lg:h-[34rem] xl:h-[40rem] 2xl:h-[45rem]">
                {/* //TODO change to w-full if needed */}
                <img src={i.image} className="w-full" />
              </div>
              <div
                className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed"
                style={{
                  backgroundColor: 'rgba(0, 0, 0, 0.6)'
                }}
              >
                <div className="flex h-full flex-1 justify-center">
                  <div className="mb-2 self-end text-center text-white">
                    <h2 className="text-xl font-semibold md:mb-4 md:text-4xl">مرحبا بكم في ترينوبيا</h2>
                    <h4 className="text-xs font-semibold md:mb-6 md:text-xl">نقاط نور</h4>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <button className="absolute top-1/2 left-0 z-20">
        <HiChevronLeft
          className="text-2xl text-gray-500 sm:text-4xl lg:text-7xl "
          onClick={() => swiperRef1.current?.slideNext()}
        ></HiChevronLeft>
      </button>
    </div>
  );
};
export default HomeCarousel;
