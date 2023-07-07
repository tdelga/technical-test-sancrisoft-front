import { Vehicle } from "../models/Vehicle";

export const headTitles: HeadTitle[] = [
  { label: "#", key: "ID" },
  { label: "Year", key: "year" },
  { label: "Make", key: "make" },
  { label: "Model", key: "model" },
  { label: "Location", key: "location" },
];

export type HeadTitle = {
  label: string;
  key: keyof Vehicle;
};
