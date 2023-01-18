import { FC } from "react"

interface Props {
  name: string;
}

const Title: FC<Props> = ({ name }) => {
  return (
    <h1 className="text-5xl md:text-7xl lg:text-7xl text-white mx-10">
      <span className="text-indigo-700 font-bold">Discover</span>{" "}
      {`collect, and
      sell ${name}.`}
    </h1>
  );
};

export default Title