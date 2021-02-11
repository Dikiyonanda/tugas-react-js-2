import React from "react";
import Kendaraan from "./components/Kendaraan";
import MakeForm from "./components/MakeForm";
function App() {
  return (
    <div>
      <Kendaraan
        jenis="Motor"
        type="Motor"
        merek1="Honda"
        merek2="Yamaha"
        merek3="Suzuki"
      />
      <Kendaraan
        jenis="Mobil"
        type="Mobil"
        merek1="Honda"
        merek2="Mitsubishi"
        merek3="Tesla"
      />
      <MakeForm />
    </div>
  );
}

export default App;
