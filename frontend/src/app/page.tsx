"use client";
import Legend from "@/app/components/legend";
import Form from "@/app/components/form";

import List from "@/app/components/list";
import Header from "@/app/components/header";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col justify-start p-24 gap-8 text-dark-grey max-w-screen-xl m-auto">
      <Header />
      <Form />
      <Legend />
      <List />
    </main>
  );
}
