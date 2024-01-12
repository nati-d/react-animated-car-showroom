import React from 'react'
import {motion} from 'framer-motion'

const VehiclesCard = ({vehicle}) => {
  return (
    <div className="h-[500px] w-[400px] border flex flex-col gap-1">
        <div className='w-full h-[450px] overflow-hidden'>

          <motion.img src={vehicle.img} alt="" className="w-full h-full object-cover" whileHover={{scale:1.1, transition:{duration:0.3}}}/>
        </div>
          <h1 className="text-lg ml-2">{vehicle.model}</h1>
          <p className="text-sm text-gray-400 ml-2">{vehicle.production_year}</p>
          <div className="flex justify-between items-center p-4">
            <p className='font-semibold text-lg'>$45,273.00</p>
            <motion.button
              className="px-8 py-3 bg-red-600 text-white  shadow-md shadow-red-500 w-max"
              whileTap={{ scale: 0.9 }}
            >
              Discover
            </motion.button>
          </div>
        </div>
  )
}

export default VehiclesCard
