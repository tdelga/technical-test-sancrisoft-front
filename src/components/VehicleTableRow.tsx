import { useState, useContext } from "react";
import { VehicleContext } from "../context/vehicle-context";
import { HeadTitle, headTitles } from "../constants/headTitles";
import { generateRandomPhotoUrl } from "../utils";
import { Vehicle } from "../models/Vehicle";

export default function VehicleTableRow({ vehicle }: { vehicle: Vehicle }) {
  const vehicleContext = useContext(VehicleContext);
  const { openModal } = vehicleContext;

  const [imageLoading, setImageLoading] = useState(true);
  return (
    <tr className="md:border-b md:border-gray-800 p-1 md:p-3 my-2 w-full md:table-row block ">
      <td className=" justify-center hidden md:flex">
        {imageLoading && (
          <div className="flex justify-center ">
            <div className="w-10 h-10 animate-pulse bg-gray-400"></div>
          </div>
        )}
        <img
          src={generateRandomPhotoUrl(vehicle)}
          alt="car"
          onLoad={() => setImageLoading(false)}
          className=""
        />
      </td>
      {headTitles.map((title: HeadTitle) => (
        <td className="p-1 md:p-3 md:text-left grid grid-cols-2 border border-white md:border-0 md:table-cell">
          <p className="md:text-md text-lg text-white uppercase font-semibold md:hidden">
            {title.label}
          </p>
          <p className="text-white md:text-md text-lg">{vehicle[title.key]}</p>
        </td>
      ))}
      <td className="p-1 md:p-3 md:text-left grid grid-cols-2 border border-white md:border-0 md:table-cell">
        <p className=" self-center md:text-md text-lg text-white uppercase font-semibold md:hidden">
          Edit
        </p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          className="w-6 h-6 cursor-pointer bg-gray-800 rounded-full p-1 hover:bg-gray-700 fill-yellow-400 md:mt-0 my-2"
          onClick={() => {
            openModal({
              id: vehicle.ID,
              year: vehicle.year,
              make: vehicle.make,
              model: vehicle.model,
            });
          }}
        >
          <path d="M21.731 2.269a2.625 2.625 0 00-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 000-3.712zM19.513 8.199l-3.712-3.712-12.15 12.15a5.25 5.25 0 00-1.32 2.214l-.8 2.685a.75.75 0 00.933.933l2.685-.8a5.25 5.25 0 002.214-1.32L19.513 8.2z" />
        </svg>
      </td>
    </tr>
  );
}
