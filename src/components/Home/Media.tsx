import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Pagination, Autoplay } from 'swiper';
import Bar from './../Shared/Bar';
import { HomeData } from './HomeData';
import { AnimatedBtn } from '../Shared/AnimatedBtn';
import { useState } from 'react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { AiOutlineAudio } from 'react-icons/ai';

export const Media = () => {
  const [active, setActive] = useState([1, 0]);
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
        {/* <AnimatedBtn Id={2} active={active} onClick={() => setActive([0, 0, 1])}>
          {HomeData.media.mediaTypes.videos.ar}
        </AnimatedBtn> */}
      </div>
      <div className="flex w-full">{active[0] ? <AudiosComponent /> : active[1] ? <ImagesComponent /> : <></>}</div>
    </div>
  );
};

const AudiosComponent = () => {
  return (
    <Swiper
      spaceBetween={10}
      breakpoints={{
        640: { slidesPerView: 2 },
        780: { slidesPerView: 3 },
        1024: { slidesPerView: 4 }
      }}
      freeMode={true}
      pagination={{
        clickable: true
      }}
      dir="rtl"
      autoplay={{ delay: 1500, pauseOnMouseEnter: true, disableOnInteraction: false }}
      modules={[FreeMode, Pagination, Autoplay]}
      className="w-10/12 flex gap-6"
    >
      {HomeData.media.content.audios.map((item, index) => (
        <SwiperSlide key={index} className="my-10">
          <div className=" relative group">
            <img src={item.imagePath} alt="" className="" />
            <div className="absolute top-0 bottom-0 left-0 right-0 invisible opacity-0 transition-all duration-500 group-hover:opacity-100 group-hover:visible  ">
              <a href={item.audioURL} target="_blank">
                <div className="  bg-blue-600 opacity-60 w-full h-full "></div>

                <AiOutlineAudio className="text-white  text-4xl absolute top-1/2 right-1/2   translate-x-1/2 -translate-y-1/2" />
              </a>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
const ImagesComponent = () => {
  return (
    <Swiper
      spaceBetween={10}
      breakpoints={{
        640: { slidesPerView: 1 },
        780: { slidesPerView: 2 },
        1024: { slidesPerView: 3 }
      }}
      freeMode={true}
      pagination={{
        clickable: true
      }}
      dir="rtl"
      autoplay={{ delay: 1500, pauseOnMouseEnter: true, disableOnInteraction: false }}
      modules={[FreeMode, Pagination, Autoplay]}
      className="w-10/12 flex gap-6"
    >
      {HomeData.media.content.images.map((item, index) => (
        <SwiperSlide key={index} className="my-10">
          <div className=" relative group aspect-[3/2]">
            <img src={item.imagePath} alt="" className="w-full h-full object-contain" loading="lazy" />
            {/* <div className="absolute top-0 bottom-0 left-0 right-0 invisible opacity-0 transition-all duration-500 group-hover:opacity-100 group-hover:visible  ">
              <a href={item.audioURL} target="_blank">
                <div className="  bg-blue-600 opacity-60 w-full h-full "></div>

                <AiOutlineAudio className="text-white  text-4xl absolute top-1/2 right-1/2   translate-x-1/2 -translate-y-1/2" />
              </a>
            </div> */}
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
// const VideosComponent = () => {
//   return (
//     <Swiper
//       spaceBetween={10}
//       breakpoints={{
//         640: { slidesPerView: 2 },
//         780: { slidesPerView: 3 },
//         1024: { slidesPerView: 4 }
//       }}
//       freeMode={true}
//       pagination={{
//         clickable: true
//       }}
//       modules={[FreeMode, Pagination]}
//       className="w-10/12 flex gap-6"
//     >
//       {HomeData.media.content.audios.map((item, index) => (
//         <SwiperSlide key={index} className="my-14">
//           <div className=" relative group">
//             <img src={item.imagePath} alt="" className="" />
//             <div className="absolute top-0 bottom-0 left-0 right-0 invisible opacity-0 transition-all duration-500 group-hover:opacity-100 group-hover:visible  ">
//               <a href={item.audioURL} target="_blank">
//                 <div className="  bg-blue-600 opacity-60 w-full h-full "></div>

//                 <AiOutlineAudio className="text-white  text-4xl absolute top-1/2 right-1/2   translate-x-1/2 -translate-y-1/2" />
//               </a>
//             </div>
//           </div>
//         </SwiperSlide>
//       ))}
//     </Swiper>
//   );
// };
