import IEvent from './UpcomingEventsData.Interface';
import { AiOutlineCalendar } from 'react-icons/ai';
import { GoLocation, GoPerson } from 'react-icons/go';
import { IoPricetagOutline } from 'react-icons/io5';
interface Props {
  event: IEvent;
}
const EventDetails = ({ event }: Props) => {
  return (
    <>
      <div className="w-11/12 mx-auto flex flex-col">
        <div className="my-3 font-bold text-blue-500 text-3xl md:text-4xl lg:text-7xl">
          <p>تفاصيل</p>
        </div>
        <div className="flex flex-col whitespace-pre-line box-border text-base sm:text-lg md:text-2xl">
          {event.long_desc.map((i, index) => (
            <div className="my-3" key={index}>
              {i}
            </div>
          ))}
        </div>
        <div className="w-full border-black border-b-2 my-2"></div>
        <div className="flex flex-col gap-3 ">
          <div className="flex flex-row items-center sm:text-2xl">
            <AiOutlineCalendar className="text-blue-600" /> {event.event_info.date}
          </div>
          <div className="flex flex-row items-center sm:text-2xl">
            <GoLocation className="text-red-600" /> {event.event_info.location}
          </div>
          <div className="flex flex-row items-center sm:text-2xl">
            <IoPricetagOutline className="text-teal-600" /> {event.event_info.cost}
          </div>
          <div className="flex flex-row items-center sm:text-2xl">
            <GoPerson /> {event.event_info.age}
          </div>
        </div>
      </div>
    </>
  );
};
export default EventDetails;
