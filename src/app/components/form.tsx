"use client";
import { LocationType } from "@/types/types";
import localFont from "next/font/local";
import Image from "next/image";
import React, { useState } from "react";
const gothamBold = localFont({
  src: "../../fonts/gotham-bold.woff2",
});
export default function Form({
  locations,
  locationsList,
  setlocationsList,
}: {
  locations: LocationType[] | undefined;
  locationsList: LocationType[] | undefined;
  setlocationsList: React.Dispatch<
    React.SetStateAction<LocationType[] | undefined>
  >;
}) {
  const [hourFilter, setHourFilter] = useState(0);
  const [closed, setClosed] = useState(false);
  const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setHourFilter(parseInt(event.target.value, 10));
  };

  const handleCheckBoxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setClosed(event.target.checked);
  };
  const handleFilter = (hourFilter: number, closed: boolean) => {
    console.log(hourFilter, closed);
    if (!closed) {
      setlocationsList(locations?.filter((location) => location.opened));
    } else {
      setlocationsList(locations);
    }

    if (hourFilter !== 0) {
      const openHourFilter = hourFilter === 1 ? 6 : hourFilter === 2 ? 12 : 18;
      const closeHourFilter =
        hourFilter === 1 ? 12 : hourFilter === 2 ? 18 : 23;
      setlocationsList((prev) =>
        prev?.filter((location) => {
          if (!location.schedules) {
            return false;
          }
          for (let schedule of location.schedules) {
            if (schedule.hour === "Fechada") {
              return true;
            }
            const [locationOpenHour, locationCloseHour] =
              schedule.hour.split(" às ");
            const locationOpenHourInt = parseInt(
              locationOpenHour.replace("h", ""),
              10
            );
            const locationCloseHourInt = parseInt(
              locationCloseHour.replace("h", ""),
              10
            );
            if (
              locationOpenHourInt <= openHourFilter &&
              locationCloseHourInt >= closeHourFilter
            )
              return true;
            else return false;
          }
        })
      );
    }
  };
  const handleClearFilter = () => {
    setlocationsList(locations);
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
        <input
          type="checkbox"
          name="closed"
          id=""
          className="w-4 h-4"
          onChange={handleCheckBoxChange}
        />
        <label htmlFor="closed">Exibir unidades fechadas</label>
      </div>
      <p className="text-dark-grey m-auto">
        Resultados encontrados:{" "}
        <span className={`${gothamBold.className} text-xl`}>
          {locationsList ? locationsList.length : "0"}
        </span>
      </p>
      <div className="flex flex-col m-auto gap-2 lg:flex-row lg:w-full lg:justify-center">
        <button
          type="button"
          onClick={() => handleFilter(hourFilter, closed)}
          className={`${gothamBold.className} lg:w-1/2 px-8 py-2 rounded-md bg-yellow text-dark-grey uppercase`}
        >
          Encontrar unidade
        </button>
        <button
          type="button"
          onClick={handleClearFilter}
          className={`${gothamBold.className} lg:w-1/2 px-8 py-2 rounded-md border-2 text-dark-grey uppercase`}
        >
          LIMPAR
        </button>
      </div>
    </form>
  );
}
