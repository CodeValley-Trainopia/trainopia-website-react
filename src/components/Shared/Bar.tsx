import React from 'react';

function Bar({ title, symbol, color }: { title: string; symbol: string; color: string }) {
  return (
    <div className="justify-center items-center  w-11/12 mx-auto border-b-4  mt-5 flex border-tr_secondary">
      <h1 className=" text-gray-600 text-2xl sm:text-4xl md:text-6xl">{title} &nbsp;</h1>
      <span className={`material-symbols-outlined  ${color} text-2xl sm:text-4xl md:text-6xl`}>{symbol}</span>
    </div>
  );
}

export default Bar;
