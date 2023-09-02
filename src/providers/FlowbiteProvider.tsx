"use client";
import { Flowbite } from "flowbite-react";

export default function FlowBiteProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return <Flowbite>{children}</Flowbite>;
}
