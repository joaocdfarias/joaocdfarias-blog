"use client";

import Image from "next/image";

interface IPopoverProps {
  show: boolean;
}

export const Popover = ({ show }: IPopoverProps) => {
  return (
    <div className={`${show ? 'opacity-100 scale-100' : 'opacity-0 scale-0'} cursor-default transition-all duration-300 ease-in-out absolute bottom-10 left-[-50px] backdrop-blur bg-black/70 w-max p-4 rounded-2xl flex flex-col items-center gap-2 border-[0.5px] border-solid border-gray-800 shadow-[0px_10px_20px_0px_#1681CF1A,0px_4px_4px_0px_#00000040]`}>
      <Image
        src="/salvador.png"
        width={213}
        height={127}
        alt="Image of Elevador Lacerda in Salvador"
      />
      <p className="font-normal text-sm">📍 Salvador, Bahia, Brazil</p>
    </div>
  );
};
