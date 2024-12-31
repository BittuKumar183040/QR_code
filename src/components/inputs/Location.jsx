import React, { useRef } from 'react'
import { FaMapMarkerAlt } from "react-icons/fa"
import { FaRegPaste } from "react-icons/fa6"
import Map from '../Map';

const Location = ({ setFieldText }) => {
  const inputField = useRef();

  const handleClipboardPaste = async () => {
    const inputDom = inputField.current
    const text = await navigator.clipboard.readText()
    inputDom.value = text
    setFieldText(text)
  }

  return (
    <>
      <p className=' p-2 text-center w-full text-red-500 underline'>Under Development</p>
      <p className=' mt-3 mb-2 opacity-70 cursor-pointer'>Location</p>
      <div className=' mb-2 flex flex-col gap-2 w-96'>
        <div className=' relative select-none'>
          <FaMapMarkerAlt size={12} className=' absolute h-full ml-3 pointer-events-none' />
          <input ref={inputField} name='g-link' type="text" className='w-full pl-10 pr-24 p-2 shadow-inner outline-none opacity-70 rounded-md' id='g-link' placeholder='Google Maps Link' />
          <p onClick={handleClipboardPaste} className=' active:scale-95 transition-transform absolute cursor-pointer opacity-65 right-0 top-0 h-full flex justify-center items-center gap-2 px-3 rounded-r-md text-white bg-slate-400 text-sm' ><FaRegPaste size={15} />Paste</p>
        </div>
        <div className=' flex gap-2'>
          <input name='latitude' type="text" className='w-1/2 p-2 shadow-inner outline-none opacity-70 rounded-md' id='latitude' placeholder='Latitude' />
          <input name='longitude' type="text" className='w-1/2 p-2 shadow-inner outline-none opacity-70 rounded-md' id='longitude' placeholder='Longitude' />
        </div>
      </div>
    </>
  )
}

export default Location