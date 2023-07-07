import { useEffect, useContext } from "react";
import Modal from "../components/Modal";
import ButtonPagination from "../components/ButtonsPagination";
import Alert from "../components/Alert";
import { VehicleContext } from "../context/vehicle-context";
import VehicleTableComponent from "../components/VehiclesTableComponent";
import TableError from "../components/TableError";
import TableSkeleton from "../components/TableSkeleton";

export default function VehiclesTable() {
  const vehicleContext = useContext(VehicleContext);
  const {
    open,
    loading,
    error,
    getVehicles,
    paginationOptions,
    setPaginationOptions,
    totalPages,
  } = vehicleContext;

  useEffect(() => {
    const queryParameters = new URLSearchParams(window.location.search);
    const page = queryParameters.get("page");
    if (page && /^\d+$/.test(page) && paginationOptions.limit / totalPages) {
      setPaginationOptions({
        ...paginationOptions,
        page: parseInt(page),
      });
    }
    getVehicles();
  }, [paginationOptions]);

  return (
    <div className="min-h-screen text-gray-700 subpixel-antialiased p-8 bg-test-darker-blue">
      <div className="container space-y-8 text-sm mx-auto">
        <main className=" shadow-lg hover:shadow-xl rounded-md overflow-hidden py-1  bg-test-dark-blue">
          {!loading && !error && <VehicleTableComponent />}
          {loading && <TableSkeleton />}
          {error && <TableError />}
          <ButtonPagination />
        </main>
        <Alert />
        {open && <Modal />}
      </div>
    </div>
  );
}
