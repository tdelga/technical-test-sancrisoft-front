import { Vehicle } from "../models/Vehicle";

export const generateRandomPhotoUrl = (vehicle: Vehicle): string => {
  return `https://loremflickr.com/40/40/${vehicle.model.replaceAll(
    " ",
    ""
  )},${vehicle.make.replaceAll(" ", "")},${vehicle.year}`;
};
