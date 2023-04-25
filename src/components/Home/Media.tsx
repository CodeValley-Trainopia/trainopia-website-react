import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Pagination } from 'swiper';
import Bar from './../Shared/Bar';
import { HomeData } from './HomeData';
import { AnimatedBtn } from '../Shared/AnimatedBtn';
import { useState } from 'react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
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
      <div className="flex">
        <Swiper
          slidesPerView={3}
          freeMode={true}
          pagination={{
            clickable: true
          }}
          modules={[FreeMode, Pagination]}
          className=""
        >
          <MediaComponent />
          <MediaComponent />
          <MediaComponent />
          <MediaComponent />
        </Swiper>
      </div>
    </div>
  );
};

const MediaComponent = () => {
  return <SwiperSlide>Slide 1</SwiperSlide>;
};
