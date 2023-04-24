import IEvent from './UpcomingEventsData.Interface';
import EventTarget from './EventTarget';
import EventDetails from './EventDetails';
import EventPrev from './EventPrev';

interface Props {
  event: IEvent;
}
const UpcomingEvents = ({ event }: Props) => {
  return (
    <>
      <div id="carouselExampleCaptions" className="carousel slide relative" data-bs-ride="carousel">
        <div className="carousel-inner relative w-full overflow-hidden">
          <div style={{ maxHeight: '500px' }} className="carousel-item active  relative float-left w-full">
            <img src={event.mainImage} className="block w-full" alt="..." />
          </div>
        </div>
        <div
          className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed"
          style={{ backgroundColor: 'rgba(0, 0, 0, 0.7)' }}
        >
          <div className="flex mr-3 md:mr-7 lg:mr-10 items-center h-3/4">
            <div className="text-white">
              <h2 className="font-semibold text-xs sm:text-xl md:text-2xl lg:text-4xl mb-4">{event.name}</h2>
              <h4 className="w-9/12 font-light text-xs sm:text-xl md:text-xl lg:text-xl mb-6">{event.short_desc}</h4>
            </div>
          </div>
        </div>
      </div>
      <EventDetails event={event}></EventDetails>
      <EventTarget event={event}></EventTarget>
      <EventPrev event={event} />
    </>
  );
};
export default UpcomingEvents;
