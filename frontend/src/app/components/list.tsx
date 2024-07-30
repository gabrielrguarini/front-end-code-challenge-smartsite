"use client";
import { LocationType, LocationsType } from "@/types/types";
import { ListItem } from "@/app/components/list-item";

export default function List({
  locations,
}: {
  locations: LocationType[] | undefined;
}) {
  if (!locations) {
    return <div>Carregando...</div>;
  }
  return (
    <ul className="flex flex-wrap gap-4 m-auto justify-start items-start">
      {locations.map((location, index) => (
        <ListItem key={index} location={location} />
      ))}
    </ul>
  );
}
