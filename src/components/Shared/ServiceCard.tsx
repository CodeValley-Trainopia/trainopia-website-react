import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
interface Props {
  img: string;
  title: string;
  content: string;
  color: string;
  logo?: string;

  animation: string;
}
const ServiceCard = ({ img, title, content, color, logo, animation }: Props) => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="mb-6 px-6 mx-auto " data-aos={animation} data-aos-duration={500} data-aos-once={true}>
      <div className="block rounded-lg shadow-lg">
        <div className="flex flex-wrap ">
          <div className="hidden md:flex grow-0 shrink-0 basis-auto md:w-4/12">
            <img src={img} className="w-full rounded-lg lg:rounded-lg" />
          </div>
          <div className={`grow-0 shrink-0 basis-auto w-full md:w-8/12 ${color} rounded-lg`}>
            {/* //TODO add logo to the background */}
            <div className="px-4 py-3 md:px-12 flex flex-col h-full justify-center">
              <div className="flex flex-row">
                {logo ? <img src={logo} className="h-16 w-16 " /> : <></>}
                <h2 className="text-lg sm:text-2xl 2xl:text-3xl my-auto text-gray-100 drop-shadow-lg shadow-black font-bold mb-4">
                  {title}
                </h2>
              </div>
              <p className="text-black text-sm sm:text-xl 2xl:text-2xl mb-6">{content}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ServiceCard;
