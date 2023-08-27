import React from 'react'

const AutoCompleteAdd = () => {
  return (
    <div className=' mt-5'>
        <div>
            <label className=' text-gray-400'>Where from?</label>
            <input type='text' required  className=' w-full outline-none focus:border-sky-500 border-[1px] rounded-md p-1'/>
        </div>
        <div className=' pt-4'>
            <label className=' text-gray-400'>Where to?</label>
            <input type='text' required  className=' w-full outline-none focus:border-sky-500 border-[1px] rounded-md p-1'/>
        </div>
    </div>
  )
}

export default AutoCompleteAdd