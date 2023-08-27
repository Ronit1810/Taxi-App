import React from 'react'
import AutoCompleteAdd from './AutoCompleteAdd'

const Booking = () => {
    // const screenHeight=window.innerHeight*0.72;
  return (
    <div className=' p-4'>
        <h2 className=' font-semibold text-xl'>Booking</h2>
        <div className=' border-[1px] p-5 rounded-md' >
            <AutoCompleteAdd/>
        </div>
    </div>
    
  )
}

export default Booking