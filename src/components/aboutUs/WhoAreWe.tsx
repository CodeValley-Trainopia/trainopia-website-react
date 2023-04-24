import { whoAreWeData } from './AboutUsData';

//export interface IWhoAreWeProps {}

export default function WhoAreWe() {
  return (
    <div>
      <h2 className="text-tr_secondary text-3xl sm:text-4xl md:text-5xl lg:text-6xl mt-3 font-bold mb-5 text-center">
        {whoAreWeData.title.ar}
      </h2>
      <div className="grid grid-cols-1">
        {whoAreWeData.data.map((i, index) => (
          <div
            className="container mb-6 px-3 mx-auto
             "
            key={index}
          >
            <div className="block rounded-lg shadow-2xl bg-white">
              <div className={index % 2 ? 'flex flex-wrap' : 'flex flex-wrap flex-row-reverse'}>
                <div className="hidden lg:flex grow-0 shrink-0 basis-auto lg:w-6/12 xl:w-4/12">
                  <img src={i.img} className="w-full rounded-lg " />
                </div>
                <div className={'grow-0 shrink-0 basis-auto w-full lg:w-6/12 xl:w-8/12'}>
                  <div className="px-6 py-6 md:px-12">
                    <h2 className="text-3xl sm:text-4xl md:text-6xl text-tr_green drop-shadow-lg shadow-black font-bold mb-4">
                      {i.title.ar}
                    </h2>

                    <p className="text-black text-base sm:text-xl md:text-2xl mb-6">{i.text.ar}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
