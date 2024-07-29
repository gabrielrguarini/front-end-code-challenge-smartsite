"use client";
import { useContext } from "react";
import { FilterContext } from "@/app/context/filter-context";

export function useFilter() {
  const context = useContext(FilterContext);

  if (!context) {
    throw new Error("useFilter must be used within a FilterContexProvider");
  }

  return context;
}
