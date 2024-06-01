import {useContext, userContext} from 'react'
import { StepperContext } from '../../contexts/StepperContext'

export default function Details() {

  const { userData, setUserData}= useContext(StepperContext)

  const handleChange =(e)=>{
    const{name,value}=e.target
    setUserData({...userData,[name]:value})
  }
  return <div className='flex flex-col'>
    <div className='w-full mx-2 flex-1'>
      <div className='font-bold h-6 mt-3 text-gray-500 text-xs leading-8 uppercase'>Booking Date</div>
      <div className='bg-white my-2 p-1 flex border border-gray-200 rounded'>
        <input onChange={handleChange} value={userData['Booking_Date'] 
        || ''} name="Booking_Date" placeholder='Booking Date'
        className='p-1 px-2 appearance-none outline-none w-full text-gray-800'/>
      </div>
    </div>
    <div className='w-full mx-2 flex-1'>
      <div className='font-bold h-6 mt-3 text-gray-500 text-xs leading-8 uppercase'>Time</div>
      <div className='bg-white my-2 p-1 flex border border-gray-200 rounded'>
        <input onChange={handleChange} value={userData['Time'] ||
       ''} name="Time" placeholder='Time' type="text"
       className='p-1 px-2 appearance-none outline-none w-full text-gray-800'/>
      </div>
    </div>
  </div>
}