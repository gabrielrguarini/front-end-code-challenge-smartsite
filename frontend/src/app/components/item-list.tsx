"use client";
import { Locations } from "@/types/types";
import Image from "next/image";
import localFont from "next/font/local";

const gothamBold = localFont({
  src: "../fonts/gotham-bold.woff2",
});

export default function ItemList({ locations }: { locations: Locations }) {
  const locationsList = locations.locations.map((location, index) => {
    return (
      <li key={index} className="min-w-60">
        <p className="text-green-500 font-semibold">
          {location.opened ? "Aberto" : "Fechado"}
        </p>
        <h2 className={`${gothamBold.className} font-bold text-lg`}>
          {location.title}
        </h2>
        <p dangerouslySetInnerHTML={{ __html: location.content ?? "" }} />
        <p>{location.city_name}</p>
        <div className="border-1"></div>
        <div>
          {location.mask === "required" && (
            <Image
              src="/images/required-mask.png"
              width={50}
              height={50}
              alt="Necessário máscara"
            />
          )}
          {location.mask === "recommended" && (
            <Image
              src="/images/recommended-mask.png"
              width={50}
              height={50}
              alt="Recomendado máscara"
            />
          )}
        </div>
        <div>
          {location.towel === "required" && (
            <Image
              src="/images/required-towel.png"
              width={50}
              height={50}
              alt="Necessário toalha"
            />
          )}
          {location.towel === "recommended" && (
            <Image
              src="/images/recommended-towel.png"
              width={50}
              height={50}
              alt="Recomendado toalha"
            />
          )}
        </div>
        <div>
          {location.fountain === "partial" && (
            <Image
              src="/images/partial-fountain.png"
              width={50}
              height={50}
              alt="Fonte de água parcial"
            />
          )}
          {location.fountain === "forbidden" && (
            <Image
              src="/images/forbidden-fountain.png"
              width={50}
              height={50}
              alt="Fonte de água proibida"
            />
          )}
        </div>
        <div>
          {location.locker_room === "partial" && (
            <Image
              src="/images/required-lockerroom.png"
              width={50}
              height={50}
              alt="Vestiário fechado"
            />
          )}
          {location.locker_room === "forbidden" && (
            <Image
              src="/images/recommended-lockerroom.png"
              width={50}
              height={50}
              alt="Não recomendado o vestiário"
            />
          )}
        </div>
        <div></div>
      </li>
    );
  });
  return <>{locationsList}</>;
}
