"use client";
import { useFilter } from "@/app/hooks/useFilter";
import localFont from "next/font/local";
import Image from "next/image";
const gothamBold = localFont({
  src: "../../fonts/gotham-bold.woff2",
});
export default function Form() {
  const { hourFilter, setHourFilter } = useFilter();
  const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value);
    setHourFilter(parseInt(event.target.value, 10));
    console.log(hourFilter);
  };
  return (
    <form className="flex flex-col min-w-60 gap-4 border-4 border-grey-100 rounded-lg p-6 text-gray-400">
      <div className="flex gap-2 items-center">
        <Image
          src="/images/icon-hour.png"
          width={25}
          height={25}
          alt="Horário"
        />{" "}
        <h2>Horário</h2>
      </div>
      <h3>Qual período quer treinar?</h3>
      <div>
        <div className="flex gap-2 items-center py-2 border-y-2">
          <input
            type="radio"
            name="hour"
            value={1}
            id=""
            className="w-4 h-4"
            onChange={handleRadioChange}
          />
          <label htmlFor="morning">Manhã</label>
          <p className="ml-auto">06:00 às 12:00</p>
        </div>
        <div className="flex gap-2 items-center py-2 border-b-2">
          <input
            type="radio"
            name="hour"
            value={2}
            id=""
            className="w-4 h-4"
            onChange={handleRadioChange}
          />
          <label htmlFor="afternoon">Tarde</label>
          <p className="ml-auto">12:01 às 18:00</p>
        </div>
        <div className="flex gap-2 items-center py-2 border-b-2">
          <input
            type="radio"
            name="hour"
            value={3}
            id=""
            className="w-4 h-4"
            onChange={handleRadioChange}
          />
          <label htmlFor="Night">Noite</label>
          <p className="ml-auto">18:01 às 23:00</p>
        </div>
      </div>
      <div className="flex gap-2 items-center m-auto text-dark-grey">
        <input type="checkbox" name="closed" id="" className="w-4 h-4" />
        <label htmlFor="closed">Exibir unidades fechadas</label>
      </div>
      <p className="text-dark-grey m-auto">
        Resultados encontrados:{" "}
        <span className={`${gothamBold.className} text-xl`}>0</span>
      </p>
      <div className="flex flex-col m-auto gap-2 lg:flex-row lg:w-full lg:justify-center">
        <button
          type="button"
          onClick={() => {
            console.log("FILTRAR");
            console.log(`Hora selecionada: ${hourFilter}`);
          }}
          className={`${gothamBold.className} lg:w-1/2 px-8 py-2 rounded-md bg-yellow text-dark-grey uppercase`}
        >
          Encontrar unidade
        </button>
        <button
          type="button"
          onClick={() => {
            console.log("LIMPAR");
            setHourFilter(0);
          }}
          className={`${gothamBold.className} lg:w-1/2 px-8 py-2 rounded-md border-2 text-dark-grey uppercase`}
        >
          LIMPAR
        </button>
      </div>
    </form>
  );
}
