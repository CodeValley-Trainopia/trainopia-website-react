//import OurTeam from './OurTeam'
import { ourVisionData, ourMsgData, ourValuesData, ourGoalsData } from './AboutUsData';
import WhoAreWe from './WhoAreWe';

const AboutUs = () => {
  return (
    <div className="">
      <WhoAreWe />
      <div className="grid grid-cols-1 w-9/12 mx-auto gap-y-8 md:gap-y-12">
        <div className="">
          <h2 className="text-tr_secondary text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-2 text-center">
            {ourVisionData.title.ar}
          </h2>
          <p className="text-black text-base sm:text-2xl mr-3 mb-6 text-center">{ourVisionData.data.ar}</p>
        </div>
        <div>
          <h2 className="text-tr_secondary text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 text-center">
            {ourMsgData.title.ar}
          </h2>
          <p className="text-black text-base sm:text-2xl mr-3 mb-6 text-center">{ourMsgData.data.ar}</p>
        </div>
        <div>
          <h2 className="text-tr_secondary text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 text-center">
            {ourValuesData.title.ar}
          </h2>
          <div className="grid grid-cols-3 gap-4 mb-5">
            {ourValuesData.data.map((i, index) => (
              <p key={index} className="text-black text-base sm:text-2xl text-center">
                {i.ar}
              </p>
            ))}
          </div>
        </div>
        <div>
          <h2 className="text-tr_secondary text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 text-center">
            {ourGoalsData.title.ar}
          </h2>
          <div className="">
            <ul className="list-disc">
              {ourGoalsData.data.map((i, index) => (
                <li key={index}>
                  <p className="text-black text-base sm:text-2xl text-center mb-4">{i.ar}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      {/* <OurTeam /> */}
    </div>
  );
};
export default AboutUs;
