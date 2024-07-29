"use client";
import { createContext, useState } from "react";
import type { LocationType } from "@/types/types";
export const FilterContext = createContext({
  openFilter: false,
  setOpenFilter: (value: boolean) => {},
  hourFilter: 0,
  setHourFilter: (value: number) => {},
  locationsFilter: [] as LocationType[],
  setLocationFilter: (value: []) => {},
});

export function FilterContexProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [openFilter, setOpenFilter] = useState(false);
  const [locationsFilter, setLocationFilter] = useState<LocationType[]>([]);
  const [hourFilter, setHourFilter] = useState(0);

  return (
    <FilterContext.Provider
      value={{
        openFilter,
        setOpenFilter,
        locationsFilter,
        setLocationFilter,
        hourFilter,
        setHourFilter,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
}
