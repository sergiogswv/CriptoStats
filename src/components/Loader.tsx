import { FC } from "react";

const Loader: FC = () => {
  return (
    <div className="w-full h-full grid">
        <span className="animate-ping inline-flex h-20 w-20 rounded-full bg-sky-400 opacity-95 m-auto"></span>
    </div>
  );
};

export default Loader;
