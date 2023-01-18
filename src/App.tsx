import { useState, useEffect } from "react";
import { ISetData, ISetError } from "./interfaces";

import Title from "./components/Title";
import Loader from "./components/Loader";
import ParagraphInfo from "./components/ParagraphInfo";
import ButtonInformation from "./components/ButtonInformation";

import { criptoCurrency } from "./utils";
import platform from "../public/platform.svg";

const App = () => {
  const [data, setData] = useState<
    | ISetData
    | {
        name: "";
        iconUrl: "";
        price: "";
        coinrankingUrl: "";
        change: "";
      }
  >({
    name: "",
    iconUrl: "",
    price: "",
    coinrankingUrl: "",
    change: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<ISetError | any>("");
  const [currency, setCurrency] = useState("Qwsogvtv82FCd");

  useEffect(() => {
    const api = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          `https://coinranking1.p.rapidapi.com/coin/${currency}`,
          {
            method: "GET",
            headers: {
              "X-RapidAPI-Key":
                "003896da6dmshaa2b82df3143a6ep11ce54jsnf30c848f45a9",
              "X-RapidAPI-Host": "coinranking1.p.rapidapi.com",
            },
          }
        );
        const cripto = await response.json();
        setData({
          ...data,
          name: cripto.data.coin.name,
          iconUrl: cripto.data.coin.iconUrl,
          price: cripto.data.coin.price,
          coinrankingUrl: cripto.data.coin.coinrankingUrl,
          change: cripto.data.coin.change,
        });
      } catch (error: any) {
        setError(error.message);
        // console.log(error)
      }
      setLoading(false);
    };
    api();
  }, [currency]);

  const handleCurrency = (uid: string) => setCurrency(uid);

  return (
    <main className="bg-gradient-to-tl from-indigo-500 via-purple-300 to-pink-400 w-max-full h-screen grid grid-rows-[2%_auto_auto] md:grid-rows-[5%_auto_auto]">
      <div className="grid mx-auto">
        <select
          onChange={(e) => handleCurrency(e.target.value)}
          className={`w-[200px] rounded-2xl h-7 md:h-10 text-center shadow-xl ${
            loading && "hidden"
          }`}
        >
          {criptoCurrency.map((currency) => (
            <option key={currency.name} value={currency.uid}>
              {currency.fullName}
            </option>
          ))}
        </select>
      </div>

      {!loading && !error ? (
        <div className="grid lg:grid-cols-[40%_60%]">
          <div className="grid my-auto">
            <Title name={data.name} />
            <ButtonInformation href={data.coinrankingUrl} />
          </div>
          <div className="grid lg:grid-cols-[65%_25%] mt-10 md:mt-32">
            <div className="my-auto">
              <img
                src={data.iconUrl}
                alt={`logo de ${data.name}`}
                className="w-7/12 md:w-5/12 lg:w-8/12 mx-auto animate-bounce -mb-5"
              />
              <img
                src={platform}
                alt={`logo de ${data.name}`}
                className="w-8/12 md:w-6/12 lg:w-8/12 mx-auto"
              />
            </div>
            <div className="lg:grid lg:m-auto flex justify-between w-10/12 items-center mx-auto">
              <div>
                <ParagraphInfo
                  price={data.price.slice(0, 2)}
                  additional={"K+"}
                  currency={true}
                  classes={"text-white text-4xl md:text-5xl lg:text-4xl"}
                />
                <ParagraphInfo
                  price={Number(data.price).toFixed(2)}
                  additional={"USD"}
                  currency={true}
                  classes={"text-white text-xs md:text-lg lg:text-md"}
                />
              </div>
              <ParagraphInfo
                price={data.change}
                additional={""}
                currency={false}
                classes={`
                  ${
                    data.change.indexOf("-") > -1
                      ? "text-red-600"
                      : "text-green-600"
                  }
                  text-3xl md:text-4xl lg:text-3xl
                `}
              />
            </div>
          </div>
        </div>
      ) : (
        <Loader />
      )}
    </main>
  );
};

export default App;
