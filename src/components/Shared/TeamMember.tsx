interface Props {
  img: string;
  desc: string;
  name: string;
}
const TeamMember = ({ desc, img, name }: Props) => {
  return (
    <div className="flex flex-col items-center rounded-lg  2xl:w-auto my-5 bg-gradient-to-b from-from_clearsky to-to_clearsky">
      <img src={img} className="w-16 h-16 md:w-32 md:h-32 lg:w-44 lg:h-44 rounded-full -mt-8 border-zinc-300 border" />
      <div className="p-2 sm:p-3 xl:p-6 items-center flex flex-col">
        <h5 className="text-white w-max font-bold  text-lg sm:text-base md:text-xl 2xl:text-4xl mb-2">{name}</h5>
        <p className="text-black text-[14px] sm:text-sm md:text-base lg:text-xl 2xl:text-2xl mb-4 text-center">
          {desc}
        </p>
      </div>
    </div>
  );
};
export default TeamMember;
