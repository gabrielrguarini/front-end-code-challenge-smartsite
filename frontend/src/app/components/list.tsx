"use client";
import { LocationType, LocationsType } from "@/types/types";
import { ListItem } from "@/app/components/list-item";
import { useEffect, useState } from "react";
import { useFilter } from "../hooks/useFilter";

export default function List() {
  const [locations, setLocations] = useState<LocationType[]>();
  const { hourFilter, openFilter } = useFilter();
  useEffect(() => {
    const fetchData = async () => {
      const localeData = await fetch(
        "https://test-frontend-developer.s3.amazonaws.com/data/locations.json",
        {
          method: "GET",
        }
      );
      const locations: LocationsType = await localeData.json();
      setLocations(locations.locations);
    };
    fetchData();
  }, []);
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
