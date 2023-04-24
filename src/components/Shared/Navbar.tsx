import { Data } from '../../Data';
import EventsData from '../upcomingEvents/UpcomingEventsData';
import { Link } from 'react-router-dom';
import { useState } from 'react';
interface Props {
  IsRTL: string;
  SpecialNav: boolean;
}
interface NavBarContentProps {
  IsRTL: string;
  active: boolean;
}
const Navbar = ({ IsRTL, SpecialNav }: Props) => {
  const [active, setActive] = useState(false);
  const showMenu = () => {
    setActive(!active);
  };
  return (
    <nav className={`${!SpecialNav ? 'bg-tr_secondary' : ''} flex items-center border-gray-200  py-2.5 `}>
      <div
        className={` 
        relative flex w-full flex-wrap items-center justify-between `}
      >
        <button
          onClick={() => showMenu()}
          data-collapse-toggle="navbar-default"
          type="button"
          className="ml-3 inline-flex items-center rounded-lg p-2 text-sm text-gray-500 nav:hidden "
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="h-6 w-6"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clipRule="evenodd"
            ></path>
          </svg>
        </button>

        <NavBarContent IsRTL={IsRTL} active={active} />
        <Link to="/" className="flex items-center ">
          <img src="/icons/logo.png" className="mr-3 2xl:h-36 h-20  " />
          {/* <span className="pr-4 self-center text-4xl font-semibold whitespace-nowrap">
            {IsRTL === 'true' ? Data.Localization.menu_title.ar : Data.Localization.menu_title.en}
          </span> */}
        </Link>
      </div>
    </nav>
  );
};

const NavBarContent = ({ IsRTL, active }: NavBarContentProps) => {
  return (
    <div
      className={
        active
          ? ' absolute top-[60px]  left-[30%] sm:left-[70%] w-48 h-56 z-50 bg-gray-500 rounded-2xl   nav:w-auto '
          : 'hidden  w-full nav:block nav:w-auto'
      }
      id="navbar-default"
    >
      <ul className="absolute  2xl:text-3xl lg:text-lg  mt-4 top-0 bottom-0 items-center flex flex-col rounded-lg   lg:p-4 text-center   nav:mt-0 nav:flex-row   ">
        <li className="hover:underline">
          <Link
            to="/"
            className="mr-2 block rounded  text-white active:text-tr_primary      py-2 px-2 xl:px-4 xl:border-l-4 lg:border-l-2 border-white"
            aria-current="page"
          >
            {IsRTL === 'true' ? Data.Localization.menu_home.ar : Data.Localization.menu_home.en}
          </Link>
        </li>
        <li className="hover:underline">
          <Link
            to="/gallery"
            aria-current="page"
            className="mr-2 block rounded  text-white active:text-tr_primary  py-2 px-2 xl:px-4 xl:border-l-4 lg:border-l-2 border-white"
          >
            {IsRTL === 'true' ? Data.Localization.menu_gallery.ar : Data.Localization.menu_gallery.en}
          </Link>
        </li>
        <li className="hover:underline">
          <Link
            to={'/aboutus'}
            aria-current="page"
            className="mr-2 block rounded   text-white active:text-tr_primary py-2 px-2 xl:px-4 xl:border-l-4 lg:border-l-2 border-white "
          >
            {IsRTL === 'true' ? Data.Localization.menu_about.ar : Data.Localization.menu_about.en}
          </Link>
        </li>
        <li className="hover:underline">
          <Link
            to="/contactus"
            aria-current="page"
            className="mr-2 block rounded text-white active:text-tr_primary py-2 px-2 xl:px-4 xl:border-l-4 lg:border-l-2 border-white   "
          >
            {IsRTL === 'true' ? Data.Localization.menu_contact.ar : Data.Localization.menu_contact.en}
          </Link>
        </li>
        <li className="hover:underline">
          <div className="relative">
            <button
              className="dropdown-toggle   mr-2 flex flex-row items-center gap-2  text-white   nav:hover:bg-transparent nav:active:text-tr_primary py-2 px-2 xl:px-4 xl:border-l-4 lg:border-l-2 border-white "
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              {IsRTL === 'true'
                ? Data.Localization.upcoming_events_title.ar
                : Data.Localization.upcoming_events_title.en}
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="caret-down"
                className="ml-2 w-2"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 320 512"
              >
                <path
                  fill="currentColor"
                  d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z"
                ></path>
              </svg>
            </button>
            <ul className="dropdown-menu relative   z-50 hidden  list-none rounded-lg bg-white py-2  text-base shadow-lg ">
              {EventsData.map((event, index) => (
                <li key={index}>
                  <Link
                    to={event.link}
                    className="dropdown-item  block w-full whitespace-nowrap  py-2  px-4 text-sm text-gray-700 active:text-tr_primary md:text-lg"
                  >
                    {event.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </li>
      </ul>
    </div>
  );
};
export default Navbar;
