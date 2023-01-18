import { FC } from "react";

interface Props {
    href: string;
}

const ButtonInformation:FC<Props> = ({ href }) => {
  return (
    <div className="mt-10 md:mt-20 mx-auto">
      <a href={href} target="_blank">
        <button className="w-[150px] h-10 text-xs md:text-lg md:w-[300px] md:h-12 bg-gradient-to-r from-purple-500 to-indigo-400 rounded-2xl text-white uppercase font-bold shadow-xl">
          More Information
        </button>
      </a>
    </div>
  );
};

export default ButtonInformation;
