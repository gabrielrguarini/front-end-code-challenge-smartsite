"use client";
import Legend from "@/app/components/legend";
import Form from "@/app/components/form";

import List from "@/app/components/list";
import Header from "@/app/components/header";
import { useEffect, useState } from "react";
import { LocationsType, LocationType } from "@/types/types";
export default function Home() {
  const [locations, setLocations] = useState<LocationType[]>();
  const [locationsList, setLocationsList] = useState<
    LocationType[] | undefined
  >();
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
    <main className="flex min-h-screen flex-col justify-start p-8 md:p-24 gap-8 text-dark-grey max-w-screen-xl m-auto">
      <Header />
      <Form
        locations={locations}
        locationsList={locationsList}
        setlocationsList={setLocationsList}
      />
      <Legend />
      <List locations={locationsList} />
    </main>
  );
}
