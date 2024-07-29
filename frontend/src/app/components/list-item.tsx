"use client";
import { extractAddressAndCity } from "@/utils";
import localFont from "next/font/local";
import { LocationType } from "@/types/types";
import Image from "next/image";
const gothamBold = localFont({
  src: "../../fonts/gotham-bold.woff2",
});

export function ListItem({ location }: { location: LocationType }) {
  return (
    <li className="shadow-sm w-[300px] min-h-[380px] bg-gray-100 rounded-lg p-4 mx-auto">
      <p
        className={`text-green-700 font-semibold py-2 ${
          location.opened ? "text-green" : "text-red"
        }`}
      >
        {location.opened ? "Aberto" : "Fechado"}
      </p>
      <h2
        className={`${gothamBold.className} text-dark-grey font-bold text-lg`}
      >
        {location.title}
      </h2>
      <p className="text-light-grey">
        {extractAddressAndCity(location.content ?? "").adress}
      </p>
      <p className="text-light-grey">
        {extractAddressAndCity(location.content ?? "").city}
      </p>
      <div className="border-[1px] w-full my-4 border-gray-100"></div>
      <div className="flex max-w-full gap-2 flex-wrap justify-center items-center">
        {location.mask === "required" && (
          <Image
            src="/images/required-mask.png"
            width={70}
            height={70}
            alt="Necessário máscara"
          />
        )}
        {location.mask === "recommended" && (
          <Image
            src="/images/recommended-mask.png"
            width={70}
            height={70}
            alt="Recomendado máscara"
          />
        )}
        {location.towel === "required" && (
          <Image
            src="/images/required-towel.png"
            width={70}
            height={70}
            alt="Necessário toalha"
          />
        )}
        {location.towel === "recommended" && (
          <Image
            src="/images/recommended-towel.png"
            width={70}
            height={70}
            alt="Recomendado toalha"
          />
        )}
        {location.fountain === "partial" && (
          <Image
            src="/images/partial-fountain.png"
            width={70}
            height={70}
            alt="Fonte de água parcial"
          />
        )}
        {location.fountain === "forbidden" && (
          <Image
            src="/images/forbidden-fountain.png"
            width={70}
            height={70}
            alt="Fonte de água proibida"
          />
        )}
        {location.locker_room === "partial" && (
          <Image
            src="/images/required-lockerroom.png"
            width={70}
            height={70}
            alt="Vestiário fechado"
          />
        )}
        {location.locker_room === "forbidden" && (
          <Image
            src="/images/recommended-lockerroom.png"
            width={70}
            height={70}
            alt="Não recomendado o vestiário"
          />
        )}
      </div>
      <div className="flex gap-2 flex-wrap justify-start items-center">
        {location.schedules?.map((schedule, index) => {
          return (
            <div key={index}>
              <p
                className={`text-2xl min-w-32 text-light-grey ${gothamBold.className}`}
              >
                {schedule.weekdays}
              </p>
              <span>{schedule.hour}</span>
            </div>
          );
        })}
      </div>
    </li>
  );
}
