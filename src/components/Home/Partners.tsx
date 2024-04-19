import { partnersLogo } from '@/data/homePage/partners';
import { useTranslation } from 'react-i18next';

const Partners = () => {
  const { t } = useTranslation('headLines');
  return (
    <div className='mt-20 flex flex-col items-center'>
      <h1 className='text-3xl lg:text-5xl'>{t('partners')}</h1>
      <div className='my-10 flex w-full flex-wrap justify-center gap-10 md:gap-10'>
        {partnersLogo.map((value, index) => (
          <img src={value} key={index} alt='' className='aspect-[3/2] w-[40%] object-contain sm:w-[25%] md:w-[15%]' />
        ))}
      </div>
    </div>
  );
};

export default Partners;
