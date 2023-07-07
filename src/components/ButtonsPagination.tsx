import { useContext } from "react";
import { VehicleContext } from "../context/vehicle-context";

export default function ButtonPagination() {
  const vehicleContext = useContext(VehicleContext);
  const { paginationOptions, setPaginationOptions, totalPages } =
    vehicleContext;

  return (
    <section className="flex justify-start gap-4 m-4">
      <button
        className={`${
          paginationOptions.page === 0
            ? "bg-gray-500"
            : "bg-blue-500 hover:bg-blue-700"
        } text-white font-bold py-4 px-4 rounded rotate-180`}
        disabled={paginationOptions.page === 0}
        onClick={() => {
          if (paginationOptions.page === 0) return;
          setPaginationOptions({
            ...paginationOptions,
            page: paginationOptions.page - 1,
          });
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M8.25 4.5l7.5 7.5-7.5 7.5"
          />
        </svg>
      </button>
      <button
        className={`${
          paginationOptions.page === totalPages
            ? "bg-gray-500"
            : "bg-blue-500 hover:bg-blue-700"
        }  text-white font-bold py-4 px-4 rounded`}
        disabled={paginationOptions.page === totalPages}
        onClick={() => {
          if (paginationOptions.page === totalPages) return;
          setPaginationOptions({
            ...paginationOptions,
            page: paginationOptions.page + 1,
          });
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M8.25 4.5l7.5 7.5-7.5 7.5"
          />
        </svg>
      </button>
    </section>
  );
}
