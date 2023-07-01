import { FiTarget } from 'react-icons/fi';
import IEvent from './UpcomingEventsData.Interface';
import type SwiperCore from 'swiper';
import { Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';
import { useRef } from 'react';

interface Props {
  event: IEvent;
}
interface CardProps {
  text: string;
}

const EventTarget = ({ event }: Props) => {
  const swiperRef1 = useRef<SwiperCore>();
  return (
    <>
      <div className="justify-center items-center w-11/12 mx-auto border-b-4 bg-white mt-5 flex text-2xl sm:text-4xl md:text-7xl">
        <h1 className=" text-gray-600">الاهداف &nbsp;</h1>
        <FiTarget color="red"></FiTarget>
      </div>

      <div className="flex flex-row items-center w-11/12 mx-auto">
        <button>
          <HiChevronRight className="text-7xl" onClick={() => swiperRef1.current?.slidePrev()}></HiChevronRight>
        </button>
        bu
        <Swiper
          onBeforeInit={(swiper) => {
            swiperRef1.current = swiper;
          }}
          modules={[Autoplay]}
          slidesPerView={1}
          className="w-11/12"
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1280: { slidesPerView: 4 }
          }}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
            pauseOnMouseEnter: true
          }}
        >
          {event.event_goals.map((i, index) => (
            <SwiperSlide key={index}>
              <EventTargetCard key={index} text={i}></EventTargetCard>
            </SwiperSlide>
          ))}
        </Swiper>
        <button>
          <HiChevronLeft className="text-7xl" onClick={() => swiperRef1.current?.slideNext()}></HiChevronLeft>
        </button>
      </div>
    </>
  );
};

const EventTargetCard = ({ text }: CardProps) => {
  return (
    <div className="flex justify-center m-5">
      <div className="rounded-lg shadow-md md:shadow-lg bg-white w-max h-min sm:h-20 md:h-auto  md:w-56 xl:w-96 2xl:w-auto border-2 ">
        <div className="p-2 sm:p-3 xl:p-6 w-full h-full ">
          <p className="text-black   text-lg lg:text-xl 2xl:text-2xl ">{text}</p>
        </div>
      </div>
    </div>
  );
};

export default EventTarget;
