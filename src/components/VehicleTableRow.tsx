import { useState, useContext } from "react";
import { VehicleContext } from "../context/vehicle-context";
import { HeadTitle, headTitles } from "../constants/headTitles";
import { generateRandomPhotoUrl } from "../utils";
import { Vehicle } from "../models/Vehicle";

export default function VehicleTableRow({ vehicle }: { vehicle: Vehicle }) {
  const vehicleContext = useContext(VehicleContext);
  const { openModal, deleteVehicle } = vehicleContext;

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
        <section className="grid grid-cols-2">
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
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="w-6 h-6 cursor-pointer bg-gray-800 rounded-full p-1 hover:bg-gray-700 fill-red-700 md:mt-0 my-2"
            onClick={() => deleteVehicle(vehicle.ID)}
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
            />
          </svg>
        </section>
      </td>
    </tr>
  );
}
