import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect, useState } from 'react';
interface Props {
  image?: string;
  title?: string;
  text: string;
  link?: string;
  animationDelay: number;
}
const EventCard = ({ link, image, text, title, animationDelay }: Props) => {
  const [hovered, setHovered] = useState(false);
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div
      className="flex flex-col items-center m-5 data-aos-once relative"
      data-aos="slide-up"
      data-aos-duration={500}
      data-aos-delay={animationDelay}
      onMouseEnter={() => setHovered((prev) => !prev)}
      onMouseLeave={() => setHovered((prev) => !prev)}
    >
      <div className={`rounded-lg shadow-lg bg-white w-full h-full 2xl:w-auto `}>
        <div className={`${hovered ? 'opacity-25' : 'opacity-100'}`}>
          {image && link ? (
            <Link to={link}>
              <img className="rounded-t-lg sm:h-48 lg:h-72 xl:h-80 2xl:h-96 w-full" src={image} alt="" />
            </Link>
          ) : (
            <></>
          )}
        </div>
        <div className={`p-2 sm:p-3 xl:p-6   ${hovered ? 'block absolute top-0' : 'hidden'} `}>
          {title ? (
            <h5 className="text-sky-600  w-max font-bold  text-lg sm:text-base md:text-xl 2xl:text-3xl mb-2">
              {title}
            </h5>
          ) : (
            <></>
          )}
          <p className="text-gray-700 text-[14px] sm:text-sm md:text-base lg:text-lg 2xl:text-xl mb-4">{text}</p>
        </div>
      </div>
    </div>
  );
};
export default EventCard;
