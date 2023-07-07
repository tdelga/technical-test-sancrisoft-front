import { useContext, useState } from "react";
import { VehicleContext } from "../context/vehicle-context";
import { VehicleEdit } from "../models/Vehicle";

export default function Modal() {
  const vehicleContext = useContext(VehicleContext);
  const { closeModal, vehiclePut, updateVehicle, loading } = vehicleContext;
  if (!vehiclePut) return null;

  return (
    <section
      id="modal"
      className={`fixed top-0 left-0 w-screen h-screen flex items-center justify-center transform scale-100 `}
      style={{ background: "rgba(0, 0, 0, 0.7)" }}
    >
      <form
        className="md:w-1/2 w-3/4  md:h-3/5 2xl:h-1/2 md:p-12 p-8 flex flex-col justify-between bg-test-dark-blue"
        onSubmit={(e) => {
          e.preventDefault();
          updateVehicle();
        }}
      >
        <section>
          <p className="text-white text-3xl font-bold text-left">
            Vehicle Edit
          </p>
          <section className="grid md:grid-cols-2 grid-rows-1 gap-6 mt-4">
            <LabelInput
              labelName={"Year"}
              id={"year"}
              type={"number"}
              value={vehiclePut.year}
              required={true}
            />
            <LabelInput
              labelName={"Make"}
              id={"make"}
              type={"text"}
              value={vehiclePut.make}
              required={true}
            />
            <LabelInput
              labelName={"Model"}
              id={"model"}
              type={"text"}
              value={vehiclePut.model}
              required={true}
            />
          </section>
        </section>
        <div className="flex md:flex-row flex-col justify-end gap-3 mt-4">
          <button
            className="bg-gray-500 hover:bg-gray-700 text-white font-bold px-8 py-4 rounded"
            type="button"
            onClick={() => closeModal()}
          >
            Cancel
          </button>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold px-4 rounded"
            type="submit"
          >
            <div className="flex items-center justify-center m-4 gap-2">
              {loading && (
                <div className="h-5 w-5 border-t-transparent border-solid animate-spin rounded-full border-white border-4"></div>
              )}
              Confirm
            </div>
          </button>
        </div>
      </form>
    </section>
  );
}

interface ILabelInputProps {
  labelName: string;
  id: keyof VehicleEdit;
  type: string;
  value: number | string;
  required: boolean;
}

function LabelInput(props: ILabelInputProps) {
  const vehicleContext = useContext(VehicleContext);
  const { setVehiclePut } = vehicleContext;
  return (
    <section className="flex flex-col">
      <label htmlFor={props.id} className="text-white text-left">
        {props.labelName}
      </label>
      <input
        {...props}
        className="h-10 w-full text-white border-white border rounded-md px-2 bg-test-darker-blue"
        onChange={(e) => {
          if (e.target.value && e.target.value.length > 15) return;
          setVehiclePut({
            ...vehicleContext.vehiclePut,
            [props.id]: e.target.value,
          });
        }}
      />
    </section>
  );
}
