import React from 'react'

const Contact = ({ setFieldText }) => {

  return (
    <>
      <p className=' p-2 text-center w-full text-red-500 underline'>Under Development</p>
      <label htmlFor='contact' className=' mt-3 mb-2 opacity-70 cursor-pointer'>Contact</label>
      <div className=' relative mb-2'>
        <input name='contact'
          type="text"
          className=' p-2 w-96 shadow-inner outline-none opacity-70 rounded-md'
          id='contact'
          placeholder=' Contact Information'
          onInput={(e) => setFieldText(e.target.value)}
        />
      </div>
    </>
  )
}

export default Contact