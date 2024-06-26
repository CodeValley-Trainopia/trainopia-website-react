import { useAppSelector } from '@/hooks/reduxHooks';
import { Carousel, CarouselContent, CarouselItem } from '../ui/carousel';
import Autoplay from 'embla-carousel-autoplay';
import Achievements from './Achievements';
import { carouselImages } from '@/data/homePage/carouselImages';
import { activityLogos } from '@/data/shared/activityLogos';
import { useTranslation } from 'react-i18next';
import activities from '@/locales/ar/home/activities.json';
import { useTheme } from '@/state/context/theme-provider';
const Hero = () => {
  const language = useAppSelector((state) => state.language.arabic);
  const { theme } = useTheme();
  const { t } = useTranslation('activities');
  const activitieKeys = Object.keys(activities) as Array<keyof typeof activities>;
  return (
    <div className='relative z-30 h-[100vh]'>
      <Carousel
        className='mx-auto'
        plugins={[
          Autoplay({
            delay: 5000,
          }),
        ]}
        opts={{ loop: true, duration: 50, direction: language ? 'rtl' : 'ltr' }}
      >
        <CarouselContent>
          {activitieKeys.map((activity, key) => (
            <CarouselItem key={key}>
              <div className='relative h-[100vh]'>
                <div className='absolute h-full w-full bg-black opacity-45'></div>
                <img
                  src={carouselImages[activity]}
                  alt=''
                  className='md:object-auto aspect-video h-full w-full object-cover bg-blend-darken'
                />
                <div className=' absolute right-1/2 top-[15%] flex translate-x-[50%] translate-y-1/3 flex-col items-center font-bold '>
                  {theme == 'light' ? (
                    <img loading='lazy' src={activityLogos.light[activity]} className='w-24 md:w-32' alt='' />
                  ) : (
                    <img loading='lazy' src={activityLogos.dark[activity]} className='w-24 md:w-32' alt='' />
                  )}
                  <div className='relative flex w-full flex-col items-center justify-center  p-5 text-center'>
                    <div className='absolute z-[-1] h-full w-full rounded-xl bg-accent opacity-45'></div>
                    <h1 className=' md:text-3xl'>{t(`${activity}.title`)}</h1>
                    <h3 className='text-sm md:text-xl'>{t(`${activity}.slogen`)}</h3>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
      <Achievements />
    </div>
  );
};

export default Hero;
