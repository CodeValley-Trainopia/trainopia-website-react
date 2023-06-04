import CountUp from 'react-countup';
import { HomeData } from './HomeData';
import Bar from '../Shared/Bar';
import AOS from 'aos';
import { useEffect, useState } from 'react';
import VisibilitySensor from 'react-visibility-sensor';
export const Achievements = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="flex flex-col  text-[#4b5563] ">
      <Bar title={HomeData.achievements.achievementsTitle.ar} symbol={'workspace_premium'} color={'text-red-600'}></Bar>
      <div className="flex justify-around flex-wrap  my-16  px-[10%] text-white ">
        {HomeData.achievements.achievementsData.map((e, index) => (
          <div className="" data-aos="slide-up" data-aos-duration={500} data-aos-once={true}>
            <div className="flex flex-col justify-between items-center px-10 py-5 my-2 rounded-2xl text-center  h-[250px] bg-[#21212d] border-b-8 border-[#3fb855]">
              <p>{e.prevText}</p>
              <h1 className="text-6xl">
                <Counter Start={0} End={e.score} Duration={2} />
              </h1>
              <p>{e.afterText}</p>
            </div>
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
  const [viewPortEntered, setViewPortEntered] = useState(false);
  return (
    <CountUp start={Start} end={End} duration={Duration} redraw>
      {({ countUpRef, start }) => (
        <VisibilitySensor
          active={!viewPortEntered}
          onChange={(isVisible: boolean) => {
            if (isVisible) {
              setViewPortEntered(true);
            }
          }}
          delayedCall
        >
          <span ref={countUpRef} />
        </VisibilitySensor>
      )}
    </CountUp>
  );
};
