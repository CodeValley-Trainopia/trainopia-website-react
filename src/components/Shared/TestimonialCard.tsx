import '../../css/testimonial.css';
interface Props {
  name: string;
  content: string;
  job: string;
  isActive: boolean;
}
const TestimonialCard = ({ content, job, name, isActive }: Props) => {
  return (
    <div
      className={`testimonial m-2 transition duration-700 transform ${
        isActive ? 'drop-shadow-[0_35px_35px_rgba(253,184,19,0.5)] w-[80%] right-[10%] z-50 absolute ' : 'z-10 '
      }`}
    >
      <div className="testimonial-content w-full">
        <div className="testimonial-icon   w-8 h-7 sm:w-12 sm:h-11">
          <i className="fa fa-quote-left text-sm" />
        </div>
        <p className="text-lg sm:text-lg text-gray-500 swiper-no-swiping ">{content}</p>
      </div>
      <div className="testo-bottom">
        <h3 className="text-lg sm:text-2xl swiper-no-swiping">{name}</h3>
        <span className="text-sm sm:text-lg text-blue-600 swiper-no-swiping">{job}</span>
      </div>
    </div>
  );
};
export default TestimonialCard;
