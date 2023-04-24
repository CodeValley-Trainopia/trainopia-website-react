import { IGallery } from './GalleryData.Interface';
import 'photoswipe/dist/photoswipe.css';
import { GrGallery } from 'react-icons/gr';
interface Props {
  gallery: IGallery[];
  title: string;
}

const GalleryContent = ({ gallery, title }: Props) => {
  return (
    <>
      <div className="items-center w-11/12 mx-auto border-b-4 bg-white my-5 flex">
        <button
          className="h-8 w-10 rounded-md mx-5 text-white border-white bg-green-700 "
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasExample"
          aria-controls="offcanvasExample"
        >
          <GrGallery className="mx-auto text-xl" />
        </button>
        <h1 className="text-2xl sm:text-7xl basis-full text-center text-gray-600">{title} &nbsp;</h1>
      </div>
      <div className="w-11/12 mx-auto">
        <div className="first:mx-8 last:mx-8 sm:first:mx-16 sm:last:mx-16  grid grid-cols-1 lg:grid-cols-2  sm:mb-5 gap-4">
          {gallery.map((image, index) => (
            <img
              key={index}
              src={image.src}
              className={`h-full w-full rounded-lg`}
              height={Number(image.height)}
              width={Number(image.width)}
              loading="lazy"
            />
          ))}
        </div>
      </div>
    </>
  );
};
export default GalleryContent;
