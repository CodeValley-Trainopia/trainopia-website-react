import '../../css/btnAnimation.css';
interface AnimatedBtnProps {
  active: number[];
  children: string;
  onClick: () => void;
  Id: number;
}
export const AnimatedBtn = ({ children, active, onClick, Id }: AnimatedBtnProps) => {
  const id = Id;
  return (
    <div className="wrapper nav:m-5 m-2 " onClick={() => onClick()}>
      <div className="nav:p-6 p-3 text-xl nav:text-3xl">{children}</div>
      <div className={`${active[id] ? 'topActive' : 'top'} `}></div>
      <div className={`${active[id] ? 'bottomActive' : 'bottom'} `}></div>
      <div className={`${active[id] ? 'leftActive' : 'left'} `}></div>
      <div className={`${active[id] ? 'rightActive' : 'right'} `}></div>
    </div>
  );
};
{
  /* <div className="wrapper btn">
<div className="button">{children}</div>
<div className={`${active ? 'border top' : 'hidden '}`}></div>
<div className={`${active ? 'border left' : 'hidden'}`}></div>
<div className={`${active ? 'border right' : 'hidden'}`}></div>
<div className={`${active ? 'border bottom-left' : 'hidden'}`}></div>
<div className={`${active ? 'border bottom-right' : 'hidden'}`}></div>
</div> */
}
