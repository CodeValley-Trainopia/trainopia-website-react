import { useState } from 'react';
import { IGallery } from './GalleryData.Interface';
import GalleryContent from './GalleryContent';
import GallerySideBar from './GallerySideBar';

const Gallery = () => {
  const [gallery, setGallery] = useState<IGallery[]>([]);
  const [galleryTitle, setGalleryTitle] = useState('');
  const handle = (g: IGallery[], t: string) => {
    setGallery(g);
    setGalleryTitle(t);
  };

  return (
    <div>
      <GalleryContent title={galleryTitle} gallery={gallery} />
      <GallerySideBar handle={handle} />
    </div>
  );
};
export default Gallery;
