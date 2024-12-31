import React, { useState } from 'react'

const colors = [
  { id: 0, color: "000000", class: "bg-[#000000]" },
  { id: 1, color: "FF0000", class: "bg-[#FF0000]" },
  { id: 2, color: "0000FF", class: "bg-[#0000FF]" },
  { id: 3, color: "008000", class: "bg-[#008000]" },
  { id: 4, color: "800080", class: "bg-[#800080]" },
  { id: 5, color: "FFFF00", class: "bg-[#FFFF00]" },
]

const Colors = ({ setColor, color }) => {

  return (
    <div className=' absolute -right-8 top-28 bg-white rounded-r-lg flex flex-col gap-1 p-1'>
      {colors.map((item) => (
        <div key={item.id} onClick={() => setColor(item.color)}
          className={` h-7 w-7 border-2 ${item.class} rounded-lg cursor-pointer transition-all ${item.color === color ? "scale-75 shadow-md " : "scale-100 shadow-none"}`}
        >

        </div>
      ))
      }
    </div>
  )
}

export default Colors