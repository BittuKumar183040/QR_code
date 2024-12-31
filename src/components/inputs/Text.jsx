import React, { useState } from 'react'

const Text = ({ setFieldText }) => {
  const [textInput, setTextInput] = useState("")
  const handleInputChange = (e) => {
    setTextInput(e.target.value)
    setFieldText(e.target.value)
  }
  return (
    <>
      <label htmlFor='text' className=' mt-3 mb-2 opacity-70 cursor-pointer'>Text</label>
      <div className=' relative'>
        <textarea maxLength={300} onInput={handleInputChange} className=' min-h-56 h-full w-96 p-2 shadow-inner outline-none opacity-70 rounded-md' id='text' type='text' placeholder=' Enter Text To Generate' />
        <p className=' absolute opacity-50 text-xs'>{textInput.length}/300</p>
      </div>
    </>
  )
}

export default Text