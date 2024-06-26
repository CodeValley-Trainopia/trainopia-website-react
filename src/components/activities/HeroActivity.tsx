import { useTranslation } from 'react-i18next';
import { ITitle } from '@/@types/activity';
import { activityImages } from '@/data/activityPage/activitiesImages';
const HeroActivity = ({ title }: ITitle) => {
  const { t } = useTranslation(title);
  return (
    <div className='bg-whatere relative h-[40vh] text-white'>
      <div className='absolute h-full w-full bg-black opacity-45'></div>
      <img loading='lazy' src={`/${activityImages[title][0]}`} className='h-full w-full object-cover' alt='' />
      <div className='absolute top-1/2 mx-10 flex -translate-y-1/2 flex-col'>
        <h1 className='  self-start py-2 md:text-2xl lg:text-4xl'>{t('title')}</h1>
        <hr className=' w-[60px] border-accent' />
        <h3 className='mx-10 self-end md:text-lg lg:text-2xl'>{t('slogun')}</h3>
      </div>
    </div>
  );
};

export default HeroActivity;
