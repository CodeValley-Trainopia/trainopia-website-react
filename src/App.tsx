import { Route, Routes } from 'react-router-dom';
import Gallery from './components/Gallery/Gallery';
import HomeComponent from './components/Home/Home';
import Footer from './components/Shared/Footer';
import Navbar from './components/Shared/Navbar';
import 'tw-elements';
import ContactUs from './components/contactUs/ContactUs';
import UpcomingEvents from './components/upcomingEvents/UpcomingEvents';
import EventsData from './components/upcomingEvents/UpcomingEventsData';
import 'swiper/css';
import ScrollToTop from './ScrollTop';
import AboutUs from './components/aboutUs/AboutUs';
import { useState } from 'react';

function App() {
  const [home, setHome] = useState(false);
  const IsRTL = 'true';
  return (
    <>
      <ScrollToTop />
      {!home && <Navbar IsRTL={IsRTL} SpecialNav={home} />}
      <Routes>
        <Route path="/" element={<HomeComponent IsRTL={IsRTL} ShowSpecialNav={(x) => setHome(x)} />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contactus" element={<ContactUs />} />
        {EventsData.map((event, index) => (
          <Route key={index} path={event.link} element={<UpcomingEvents event={event} />} />
        ))}
        <Route path="/aboutus" element={<AboutUs />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
