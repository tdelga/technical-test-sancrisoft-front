import { Vehicle } from "../models/Vehicle";

export const headTitles: HeadTitle[] = [
  { label: "#", key: "ID" },
  { label: "Year", key: "year" },
  { label: "Make", key: "make" },
  { label: "Model", key: "model" },
];

export type HeadTitle = {
  label: string;
  key: keyof Vehicle;
};
