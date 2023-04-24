import EventCard from '../Shared/EventCard';
import { HomeData } from './HomeData';
import '../../css/testimonial.css';
import EventData from '../upcomingEvents/UpcomingEventsData';
import Bar from '../Shared/Bar';

const HomeEventCards = () => {
  return (
    <>
      <Bar title={HomeData.events.events_title.ar} symbol={'event'} color={'text-red-600'}></Bar>
      <br></br>
      <div className="grid w-4/5 grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-2 mx-auto mb-4">
        {Object.values(EventData).map((e, index) => (
          <EventCard
            key={index}
            image={e.mainImage}
            text={e.short_desc}
            title={e.name}
            link={e.link}
            animationDelay={index * 200}
          />
        ))}
      </div>
    </>
  );
};
export default HomeEventCards;
