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
      <div className="flex gradient p-20 text-white justify-between gap-10">
        <div className="w-1/4 border-r-4 border-white flex flex-col gap-10 justify-center">
          {cars.map((car) => (
            <span className="font-semibold cursor-pointer" style={{color: menu==car.name ? 'red' : 'white'}} onClick={() => handleSelectedCar(car.name)}>{car.name}</span>
          ))}
        </div>
        <div className="w-3/4 flex flex-col gap-6">
          <div>
            <img
              src={selectedCar.img}
              alt=""
              className="w-full h-[400px] object-cover"
            />
          </div>
          <h1 className="font-bold text-4xl">{selectedCar.name}</h1>
          <p>
            {selectedCar.description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Cars;
