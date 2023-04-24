import ServiceCard from '../Shared/ServiceCard';
import { HomeData } from './HomeData';
import Bar from '../Shared/Bar';
const HomeService = () => {
  return (
    <div className="mx-auto">
      <Bar title={HomeData.services.services_title.ar} symbol={'school'} color={'text-blue-600'}></Bar>
      <br></br>
      <div className="w-11/12 mx-auto">
        {HomeData.services.services_data.map((e, index) => (
          <ServiceCard
            key={index}
            content={e.content}
            title={e.title.ar}
            img={e.img}
            color={e.color}
            logo={e.logo}
            animation={index == 1 ? 'zoom-in-up' : 'zoom-in-down'}
          />
        ))}
      </div>
    </div>
  );
};
export default HomeService;
