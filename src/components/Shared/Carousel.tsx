import { useState } from 'react';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';

interface Props {
  children?: React.ReactNode;
  id: string;
  moving?: boolean;
  data?: Idata[];
}
interface Idata {
  img: string;
  title?: string;
  desc?: string;
}
const Carousel = ({ moving = false, id, children, data }: Props) => {
  const [currSlide, setCurrSlide] = useState(0);
  const handleSlide = (dire: string) => {
    if (moving) {
      const slider = document.getElementById(id);
      if (slider != null) {
        if (dire === 'right') {
          slider.scrollLeft = slider.scrollLeft + 200;
        } else {
          slider.scrollLeft = slider.scrollLeft - 200;
        }
      }
    } else {
      if (dire == 'right') {
        setCurrSlide((currSlide + 1) % (data ? data?.length : 0));
        console.log(currSlide);
      } else {
        const i = currSlide === 0 ? (data ? data?.length - 1 : 0) : currSlide - 1;
        setCurrSlide(i);
        console.log(currSlide);
      }
    }
  };

  return (
    <>
      <div className="relative flex items-center justify-center w-11/12 mx-auto md:mt-10  ">
        <HiChevronRight className="text-7xl" onClick={() => handleSlide('right')}></HiChevronRight>
        {moving ? (
          <div id={id} className="flex overflow-x-scroll  scroll-smooth  scrollbar-hide  motion-safe:scroll-smooth">
            {children}
          </div>
        ) : data?.length != 0 ? (
          <div className="relative w-full overflow-hidden">
            <div style={{ maxHeight: '500px' }}>
              <img src={data ? data[currSlide].img : ''} className="block w-full" />
            </div>
            <div
              className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed"
              style={{
                backgroundColor: 'rgba(0, 0, 0, 0.6)'
              }}
            >
              <div className="flex flex-1 justify-center h-full">
                <div className="text-white self-end text-center mb-2">
                  <h2 className="font-semibold text-xl md:text-4xl md:mb-4">{data ? data[currSlide].title : ''}</h2>
                  <h4 className="font-semibold text-xs md:text-xl md:mb-6">{data ? data[currSlide].desc : ''}</h4>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <></>
        )}

        <HiChevronLeft className="text-7xl" onClick={() => handleSlide('left')}></HiChevronLeft>
      </div>
    </>
  );
};
export default Carousel;
