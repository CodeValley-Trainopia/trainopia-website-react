import React, { useState } from 'react';
import { HomeData } from './HomeData';
const Hero = () => {
  const [playVideo, setPlayVideo] = useState(false);
  return (
    <div className=" wavy relative w-full flex flex-col items-center  nav:flex-row nav:justify-between    bg-bottom  px-6 nav:px-36  pb-[10%] h-[87vh] text-white ">
      {/* bio content */}
      <div className="nav:w-[50%] w-[80%] my-10 text-center flex flex-col justify-center items-center">
        <h1 className="text-2xl 2xl:text-6xl lg:text-4xl  ">فقط أن نظل نقاط نور</h1>
        <p className="text-xl py-12 ">{HomeData.hero.ar.des}</p>
        {/* <button className="text-2xl btn-sty w-32">اعرف اكتر</button> */}
      </div>
      {/* video container */}
      <div className="curve border-8 grow nav:grow-0 flex w-[70%] nav:w-[40%] h-[50%] sm:max-h-[350px] max-h-[150px] ">
        {/* player */}
        <div className={`relative curve w-full  ${playVideo ? 'hidden' : 'flex'}`}>
          <div
            className=" bg-cover bg-no-repeat bg-[url('/images/home/header-1.jpg')] 
            grow curve bg-[#fff]"
          ></div>
          <button
            onClick={() => setPlayVideo((prev) => !prev)}
            className="absolute top-0 bottom-0  right-[44%] hover:opacity-50 "
          >
            <img src="/images/home/playButton.png" className="hover:bg-[#900f0f] w-12 h-12 rounded-full" alt="" />
          </button>
        </div>
        {/* playedVideo */}
        {playVideo && (
          <div className="fixed w-full h-full left-0 top-[15%] flex justify-center ">
            <div className="popUp" onClick={() => setPlayVideo((prev) => !prev)}></div>
            <iframe
              allow="autoplay"
              src={`https://www.youtube.com/embed/n13nhRymvPQ?rel=0&modestbranding&${
                playVideo ? 'autoplay=1' : 'autoplay=0'
              }`}
              className={`absolute h-[80vh] w-[80vw] right-[10%] top-0 aspect-16/9`}
            ></iframe>
            <span
              onClick={() => {
                setPlayVideo((prev) => !prev);
              }}
              className="text-white cursor-pointer text-9xl font-bold opacity-80 border-2 leading-[0.5] pt-3 rounded-full absolute right-[5%] "
            >
              &times;
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

export default Hero;
