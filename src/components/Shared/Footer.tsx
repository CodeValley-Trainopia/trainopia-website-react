import { FaInstagram, FaFacebook } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer id="footer" className="p-2 sm:p-6 dark:bg-gray-900 w-full ">
      <hr className="my-3 border-gray-900 sm:mx-auto dark:border-gray-700 lg:my-4" />
      <div className="flex flex-col items-center bg-yellow-500">
        <div className="flex gap-5 sm:justify-center m-5 ">
          <a href="https://www.facebook.com/TrainopiaT.D">
            <FaFacebook color="white" size="2em"></FaFacebook>
          </a>
          <a href="https://www.instagram.com/trainopia_td/">
            <FaInstagram color="white" size="2em"></FaInstagram>
          </a>
        </div>
        <span className="text-sm  text-white  sm:text-center">
          © 2022{' '}
          <a href="#" className="hover:underline">
            Trainopia™
          </a>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
};
export default Footer;
