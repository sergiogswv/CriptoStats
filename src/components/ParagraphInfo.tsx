import { FC } from "react";

interface Props {
  price: string;
  additional: string;
  classes: string;
  currency: boolean;
}

const ParagraphInfo:FC<Props> = ({ price, additional, classes, currency }) => {
  return (
    <p className={`text-center ${classes} text-white font-bold`}>{currency && '$'}{price} {additional}</p>
  )
}

export default ParagraphInfo