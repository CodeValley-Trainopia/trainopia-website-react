import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Pagination } from 'swiper';
import Bar from './../Shared/Bar';
import { HomeData } from './HomeData';
import { AnimatedBtn } from '../Shared/AnimatedBtn';
import { useState } from 'react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { MdOutlineVideocam } from 'react-icons/md';

export const Media = () => {
  const [active, setActive] = useState([0, 1, 0]);
  return (
    <div className="flex flex-col items-center ">
      <Bar title={HomeData.media.mediaTitle.ar} symbol={'movie'} color={'text-blue-500'} />
      <div className="flex m-5 ">
        <AnimatedBtn Id={0} active={active} onClick={() => setActive([1, 0, 0])}>
          {HomeData.media.mediaTypes.audioes.ar}
        </AnimatedBtn>
        <AnimatedBtn Id={1} active={active} onClick={() => setActive([0, 1, 0])}>
          {HomeData.media.mediaTypes.images.ar}
        </AnimatedBtn>
        <AnimatedBtn Id={2} active={active} onClick={() => setActive([0, 0, 1])}>
          {HomeData.media.mediaTypes.videos.ar}
        </AnimatedBtn>
      </div>
      <div className="flex w-full">
        <Swiper
          spaceBetween={10}
          slidesPerView={5}
          freeMode={true}
          pagination={{
            clickable: true
          }}
          modules={[FreeMode, Pagination]}
          className="w-10/12 flex gap-6"
        >
          {active[0] &&
            HomeData.media.content.audioes.map((item, index) => (
              <SwiperSlide key={index} className=" my-14  ">
                <div className="bg-blue-500 opacity-40"></div>
                <img src={item.imagePath} alt="" />
              </SwiperSlide>
            ))}
          {active[1] &&
            HomeData.media.content.images.map((item, index) => (
              <SwiperSlide key={index} className=" my-14 ">
                <img src={item.imagePath} alt="" className="" />
              </SwiperSlide>
            ))}
          {active[2] &&
            HomeData.media.content.videos.map((item, index) => (
              <SwiperSlide key={index} className=" my-14 ">
                <img src={item.imagePath} alt="" />
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
    </div>
  );
};

const MediaComponent = () => {
  return (
    <SwiperSlide>
      <img src="/images/home/header-1.jpg" alt="" />
    </SwiperSlide>
  );
};
