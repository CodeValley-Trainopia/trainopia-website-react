import { ourTeamData } from './AboutUsData';
import TeamMember from '../Shared/TeamMember';
const OurTeam = () => {
  return (
    <div className="mt-20">
      <h2 className="text-blue-600 text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-10 text-center">
        {ourTeamData.title.ar}
      </h2>
      <div className="">
        <div className="grid w-10/12 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-5 mx-auto">
          {ourTeamData.data.map((i, index) => (
            <TeamMember desc={i.desc.ar} img={i.img} name={i.name.ar} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
};
export default OurTeam;
