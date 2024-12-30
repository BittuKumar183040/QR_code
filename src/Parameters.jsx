import { useSpring, animated } from '@react-spring/web';
import React, { useRef, useState } from 'react'
import { IoText } from "react-icons/io5";
import { FaLink } from "react-icons/fa6";
import { MdOutlineContactMail, MdOutlineLocationOn } from "react-icons/md";

const Parameters = ({ setText }) => {
  const text = useRef("")
  const [type, setType] = useState(0)
  const handleInput = () => {
    const inputField = text.current
    const inputData = inputField.value
    if (inputData.length > 0) {
      setText(inputData)
    }
  }

  const btnStyle = useSpring({
    from: { y: 100, opacity: 0 },
    to: { y: 0, opacity: 1 },
  })

  const activeBtn = useSpring({
    to: { left: type * 30 },
  })
  //  style={btnStyle}
  return (
    <div>
      <div className=' flex flex-col items-start text-md gap-1'>
        <animated.div className='relative flex w-full bg-slate-100 rounded-md border-2 border-white shadow-inner'>
          <animated.div style={activeBtn} className=' absolute shadow-inner scale-90 z-10 h-[30px] w-[30px] bg-slate-400 rounded-md opacity-40 pointer-events-none'></animated.div>
          <IoText onClick={() => setType(0)} className=' cursor-pointer p-1.5 rounded-md opacity-70 transition-all' size={30} />
          <FaLink onClick={() => setType(1)} className=' cursor-pointer p-1.5 rounded-md opacity-70 transition-all' size={30} />
          <MdOutlineContactMail onClick={() => setType(2)} className=' cursor-pointer p-1.5 rounded-md opacity-70 transition-all' size={30} />
          <MdOutlineLocationOn onClick={() => setType(3)} className=' cursor-pointer p-1.5 rounded-md opacity-70 transition-all' size={30} />
        </animated.div>
        <label htmlFor='content' className=' mt-3 opacity-70 cursor-pointer'>Text</label>
        <textarea ref={text} className=' min-h-40 h-full w-96 p-2 shadow-inner outline-none opacity-70 rounded-md' id='content' type='text' placeholder=' Enter Text To Generate' />
        <div className='flex justify-end w-full'>
          <p onClick={handleInput} className=' p-2 bg-gray-400 px-8 mt-2 text-sm rounded-md shadow-md text-white cursor-pointer active:scale-95'>Create</p>
        </div>
      </div>
    </div>
  )
}

export default Parameters