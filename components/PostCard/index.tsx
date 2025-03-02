import React from "react";

interface IPostCardProps {
  title: string;
  summary: string;
}

export const PostCard = ({ title, summary }: IPostCardProps) => {
  return (
    <div className="cursor-pointer w-max py-3 pr-3 opacity-60 hover:opacity-100 transition-all duration-300 ease-in-out flex flex-col gap-1">
      <p className="text-2xl font-bold"> {title} </p>
      <p className="text-sm"> {summary} </p>
    </div>
  );
};
