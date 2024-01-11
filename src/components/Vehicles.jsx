import React, { useState } from "react";
import { motion } from "framer-motion";
import VehiclesCard from "./VehiclesCard";
import { brands, vehicles } from "../constants";

const Vehicles = () => {
  const [selectedBrand, setSelectedBrand] = useState("Toyota");
  const selectedVehicle = vehicles.find(
    (vehicle) => selectedBrand == vehicle.brand
  );

  const handleBrand = (brand) => {
    setSelectedBrand(brand);
  };
  return (
    <div className="my-20 flex flex-col items-center gap-10">
      <h1 className="text-center text-4xl font-bold">Explore Our Vehicles</h1>
      <div className=" flex md:justify-around w-full gap-5 md:w-[60%] m-auto overflow-auto">
        {brands.map((brand) => (
          <span
            className={`py-2 px-8 ${
              selectedBrand == brand.name
                ? "bg-black text-white"
                : "bg-white text-black"
            } text-white rounded-md border shadow-sm cursor-pointer`}
            onClick={() => handleBrand(brand.name)}
          >
            {brand.name}
          </span>
        ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {vehicles.map((vehicle) => (
            vehicle.brand == selectedBrand && 
               ( <VehiclesCard vehicle={vehicle} />)
            
        ))}
      </div>
    </div>
  );
};

export default Vehicles;
