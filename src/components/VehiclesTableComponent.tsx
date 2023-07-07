import { useContext } from "react";
import { VehicleContext } from "../context/vehicle-context";
import VehicleTableRow from "./VehicleTableRow";
import TableHead from "./TableHead";
import { Vehicle } from "../models/Vehicle";

export default function VehicleTableComponent() {
  const vehicleContext = useContext(VehicleContext);
  const { vehicles } = vehicleContext;

  return (
    <table className="table table-auto w-full leading-normal">
      <TableHead />
      <tbody className="flex-1 text-gray-700 sm:flex-none">
        {vehicles.map((vehicle: Vehicle) => (
          <VehicleTableRow vehicle={vehicle} />
        ))}
      </tbody>
    </table>
  );
}
