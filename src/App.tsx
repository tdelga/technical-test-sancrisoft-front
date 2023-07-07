import React from "react";
import VehicleTable from "./views/VehiclesTable";
import VehicleProvider from "./context/vehicle-context";
import NotificationProvider from "./context/notification-context";

function App() {
  return (
    <div className="App">
      <NotificationProvider>
        <VehicleProvider>
          <VehicleTable />
        </VehicleProvider>
      </NotificationProvider>
    </div>
  );
}

export default App;
