import { useEffect } from 'react';
import data from './GalleryData';
import { IGallery } from './GalleryData.Interface';
interface Props {
  handle: (g: IGallery[], t: string) => void;
}
const GallerySideBar = ({ handle }: Props) => {
  const entries = data;
  const handleGallery = (g: IGallery[], title: string) => {
    handle(g, title);
  };
  useEffect(() => {
    handle(data[0].data[0].Gallery, data[0].data[0].name);
  }, []);
  return (
    <div>
      <div>
        <div
          dir="ltr"
          className="offcanvas offcanvas-start fixed bottom-0 flex flex-col w-3/4 sm:w-1/2 md:max-w-full bg-white invisible bg-clip-padding shadow-sm outline-none transition duration-300 ease-in-out text-gray-700 top-0 left-0 border-none "
          tabIndex={-1}
          id="offcanvasExample"
          aria-labelledby="offcanvasExampleLabel"
        >
          <div className="offcanvas-header flex items-center justify-between p-4">
            <p className="mb-0 text-black text-4xl" id="offcanvasExampleLabel">
              Gallery
            </p>
            <button
              type="button"
              className="btn-close box-content w-4 h-4 p-2 -my-5 -mr-2 text-black border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div className="offcanvas-body items-center p-4">
            {entries.map((i, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className="md:space-x-1 space-y-1 md:space-y-0 mb-1">
                  <button
                    className="px-6 text-center text-blue-600 font-medium text-lg sm:text-2xl w-max transition duration-150 ease-in-out"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target={i.data_bs_target}
                    aria-expanded="false"
                    aria-controls={i.aria_controls}
                  >
                    {i.name}
                  </button>
                </div>
                {i.data.map((track, index) => (
                  <ul
                    key={index}
                    className="collapse bg-white rounded-lg border  justify-center border-gray-200 w-full text-gray-900"
                    id={i['id']}
                  >
                    <li className="px-6 text-lg md:text-xl flex justify-center py-2 border-b border-gray-200 w-full rounded-t-lg">
                      <button onClick={() => handleGallery(track.Gallery, track.name)}>{track.name}</button>
                    </li>
                  </ul>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default GallerySideBar;
