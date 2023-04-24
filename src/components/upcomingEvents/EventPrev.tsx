import IEvent from './UpcomingEventsData.Interface';
import type SwiperCore from 'swiper';
import { Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';
import { useRef } from 'react';
interface Props {
  event: IEvent;
}
const EventPrev = ({ event }: Props) => {
  const swiperRef1 = useRef<SwiperCore>();
  return (
    <div className="mx-auto mt-5">
      <div className="justify-center w-11/12 mx-auto border-b-4 bg-white  py-3 flex text-2xl sm:text-4xl md:text-5xl">
        <h1 className=" text-gray-600">{event.prev.title}</h1>
      </div>

      <div className="relative items-center w-11/12 mx-auto mt-3">
        <button className="absolute top-1/2 right-0 z-20">
          <HiChevronRight
            className="text-7xl text-gray-500 "
            onClick={() => swiperRef1.current?.slidePrev()}
          ></HiChevronRight>
        </button>
        <Swiper
          onBeforeInit={(swiper) => {
            swiperRef1.current = swiper;
          }}
          modules={[Autoplay]}
          slidesPerView={1}
          className="w-full rounded-xl "
          loop={true}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
            pauseOnMouseEnter: true
          }}
        >
          {event.prev.data.map((i, index) => (
            <SwiperSlide key={index}>
              <div className="relative w-full overflow-hidden">
                <div style={{ height: '500px', maxHeight: '500px' }}>
                  <img src={i.image} className="w-full h-full" />
                </div>
                <div
                  className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed"
                  style={{
                    backgroundColor: 'rgba(0, 0, 0, 0.6)'
                  }}
                >
                  <div className="flex flex-1 justify-center h-full">
                    <div className="text-white self-end text-center mb-2">
                      <h2 className="font-semibold text-xl md:text-4xl md:mb-4">{i.name}</h2>
                      <h4 className="font-semibold text-xs md:text-xl md:mb-6">{i.short_desc}</h4>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <button className="absolute top-1/2 left-0 z-20">
          <HiChevronLeft
            className="text-7xl text-gray-500 "
            onClick={() => swiperRef1.current?.slideNext()}
          ></HiChevronLeft>
        </button>
      </div>
    </div>
  );
};
export default EventPrev;
