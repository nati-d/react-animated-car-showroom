import React, {useState} from "react";
import { cars } from "../constants";

const Cars = () => {
    const [menu, setMenu] = useState("Mercedes-Benz")
    const selectedCar = cars.find((car)=> menu == car.name)
    console.log(selectedCar)
    const handleSelectedCar = (name) => {
        setMenu(name)
    }
  return (
    <div className="w-[90%] m-auto mb-10">
      <h1 className="text-5xl mb-8 font-bold ">Get All Luxurious Brand Cars</h1>
      <div className="flex flex-col md:flex-row gradient md:p-20 text-white justify-between gap-10">
        <div className="w-full md:w-1/4 border-b-4 md:border-r-4 md:border-b-0 border-white flex flex-row overflow-auto p-10 md:p-0 md:flex-col gap-10 md:justify-center">
          {cars.map((car) => (
            <span className="font-semibold cursor-pointer" style={{color: menu==car.name ? 'red' : 'white'}} onClick={() => handleSelectedCar(car.name)}>{car.name}</span>
          ))}
        </div>
        <div className="w-full md:w-3/4 flex flex-col gap-6">
          <div>
            <img
              src={selectedCar.img}
              alt=""
              className="w-full h-[400px] object-cover"
            />
          </div>
          <h1 className="font-bold text-4xl">{selectedCar.name}</h1>
          <p className="text-justify">
            {selectedCar.description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Cars;
