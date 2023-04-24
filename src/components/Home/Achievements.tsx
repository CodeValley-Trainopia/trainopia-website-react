import React from 'react';
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';
import { HomeData } from './HomeData';
export const Achievements = () => {
  return (
    <div className="flex flex-col  text-[#4b5563] ">
      <h1 className="text-7xl text-center pt-10 ">انجازاتنا</h1>
      <div className="flex justify-around flex-wrap  my-16  px-[10%] text-white ">
        {HomeData.achievements.map((e, index) => (
          <div className="flex flex-col justify-between items-center px-20 py-10 my-2 rounded-2xl  h-[250px] bg-[#21212d] border-b-8 border-[#3fb855]">
            <img src={e.image} className="w-10" />
            <h1 className="text-6xl">
              <Counter Start={0} End={parseInt(e.score)} Duration={2} />
            </h1>
            <p>{e.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

interface counterProps {
  Start: number;
  End: number;
  Duration: number;
}
const Counter = ({ Start, End, Duration }: counterProps) => {
  return (
    <CountUp start={Start} end={End} duration={Duration}>
      {({ countUpRef, start }) => (
        <VisibilitySensor onChange={start}>
          <span ref={countUpRef} />
        </VisibilitySensor>
      )}
    </CountUp>
  );
};
