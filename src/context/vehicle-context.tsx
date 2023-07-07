import React, { useState, createContext, useContext } from "react";
import { axiosClient } from "../config/axios";
import { NotificationContext } from "./notification-context";
import { Vehicle, VehicleEdit } from "../models/Vehicle";
import { PaginationOptions } from "../models/PaginationOptions";

export type VehicleContextType = {
  open: boolean;
  error: boolean;
  vehicles: Vehicle[];
  total: number;
  totalPages: number;
  paginationOptions: PaginationOptions;
  vehiclePut: VehicleEdit;
  loading: boolean;
  openModal: (vehicleToEdit: VehicleEdit) => void;
  closeModal: () => void;
  getVehicles: () => void;
  updateVehicle: () => void;
  setPaginationOptions: (paginationOptions: PaginationOptions) => void;
  setVehiclePut: (vehiclePut: VehicleEdit) => void;
  deleteVehicle: (id: number) => void;
};

interface Props {
  children: React.ReactNode;
}

export const VehicleContext = createContext<VehicleContextType>({
  open: false,
  error: false,
  vehicles: [],
  total: 0,
  totalPages: 0,
  paginationOptions: {
    page: 0,
    limit: 10,
  },
  vehiclePut: {
    id: 0,
    model: "",
    make: "",
    year: 0,
  },
  loading: false,
  openModal: () => {},
  closeModal: () => {},
  getVehicles: () => {},
  updateVehicle: () => {},
  setPaginationOptions: () => {},
  setVehiclePut: () => {},
  deleteVehicle: () => {},
});

const VehicleProvider: React.FC<Props> = ({ children }) => {
  const [open, setOpen] = useState(false);
  const [vehicles, setVehicles] = useState<Vehicle[]>([]);
  const [total, setTotal] = useState(0);
  const [paginationOptions, setPaginationOptions] = useState<PaginationOptions>(
    {
      page: 0,
      limit: 10,
    }
  );
  const [vehiclePut, setVehiclePut] = useState<VehicleEdit>({
    id: 0,
    model: "",
    make: "",
    year: 0,
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const notificationContext = useContext(NotificationContext);
  const { setNotification } = notificationContext;

  const openModal = (vehicleToEdit: VehicleEdit) => {
    setVehiclePut(vehicleToEdit);
    setOpen(true);
  };

  const closeModal = () => {
    setOpen(false);
  };

  const getVehicles = () => {
    setLoading(true);
    axiosClient
      .get("/vehicles", {
        params: {
          page: paginationOptions.page,
          limit: paginationOptions.limit,
        },
      })
      .then((res) => {
        setVehicles(res.data.vehicles);
        setTotal(res.data.total);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        setError(true);
        setNotification("Error", "The vehicles could not be loaded", "error");
      });
  };

  const updateVehicle = () => {
    setLoading(true);
    axiosClient
      .put(`/vehicles/${vehiclePut.id}`, vehiclePut)
      .then((res) => {
        setLoading(false);
        closeModal();
        getVehicles();
        setNotification(
          "Success",
          "The vehicle was updated succesfuly",
          "success"
        );
      })
      .catch((err) => {
        setLoading(false);
        setError(true);
        setNotification(
          "Error",
          "The vehicle was not updated succesfuly",
          "error"
        );
      });
  };

  const deleteVehicle = (id: number) => {
    setLoading(true);
    axiosClient
      .delete(`/vehicles/${id}`)
      .then((res) => {
        setLoading(false);
        getVehicles();
        setNotification(
          "Success",
          "The vehicle was deleted succesfuly",
          "success"
        );
      })
      .catch((err) => {
        setLoading(false);
        setError(true);
        setNotification(
          "Error",
          "The vehicle was not deleted succesfuly",
          "error"
        );
      });
  };

  const totalPages = Math.ceil(total / paginationOptions.limit) - 1;

  return (
    <VehicleContext.Provider
      value={{
        open,
        error,
        vehicles,
        total,
        totalPages,
        vehiclePut,
        paginationOptions,
        loading,
        setPaginationOptions,
        openModal,
        closeModal,
        getVehicles,
        updateVehicle,
        setVehiclePut,
        deleteVehicle,
      }}
    >
      {children}
    </VehicleContext.Provider>
  );
};

export default VehicleProvider;
