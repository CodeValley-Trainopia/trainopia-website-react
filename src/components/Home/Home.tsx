import HomeEventCards from './HomeEventCards';
import HomeTestimonial from './HomeTestimonial';
import HomeService from './HomeService';
import Hero from './Hero';
import NavBar from '../Shared/Navbar';
import { useEffect } from 'react';
import { Achievements } from './Achievements';
import Footer from '../Shared/Footer';
import { Media } from './Media';
interface Props {
  IsRTL: string;
  ShowSpecialNav: (x: boolean) => void;
}
const HomeComponent = ({ IsRTL, ShowSpecialNav }: Props) => {
  useEffect(() => {
    ShowSpecialNav(true);

    return () => {
      ShowSpecialNav(false);
    };
  }, []);

  return (
    <div>
      <div className="bg-[url('/images/home/main_bg.png')] bg-tr_secondary bg-center">
        <NavBar IsRTL={IsRTL} SpecialNav={true} />
        <Hero />
      </div>
      <Achievements />
      <Media />
      <HomeEventCards />
      <HomeService />
      <HomeTestimonial />
      <Footer />
    </div>
  );
};
export default HomeComponent;
