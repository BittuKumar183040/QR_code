import { useSpring, animated } from '@react-spring/web';
import React, { useState } from 'react'
import { IoCreateOutline, IoText } from "react-icons/io5";
import { FaLink } from "react-icons/fa6";
import { MdOutlineContactMail, MdOutlineLocationOn } from "react-icons/md";
import Text from './components/inputs/Text';
import Url from './components/inputs/Url';
import Contact from './components/inputs/Contact';
import Location from './components/inputs/Location';

const Parameters = ({ setText }) => {
  const [text, setFieldText] = useState("");
  const [type, setType] = useState(0);

  const handleInput = () => {
    if (text.length > 0) {
      setText(text);
    }
  }

  const activeBtn = useSpring({
    to: { left: type * 40 }
  })

  return (
    <div>
      <div className=' flex flex-col items-start text-md'>
        <animated.div className='relative flex w-full bg-slate-100 rounded-md border-2 border-white shadow-inner'>
          <animated.div style={activeBtn} className=' absolute shadow-inner scale-90 z-10 h-[40px] w-[40px] bg-slate-400 rounded-md opacity-40 pointer-events-none'></animated.div>
          <IoText onClick={() => setType(0)} className=' cursor-pointer p-3 rounded-md opacity-70 transition-all' size={40} />
          <FaLink onClick={() => setType(1)} className=' cursor-pointer p-3 rounded-md opacity-70 transition-all' size={40} />
          <MdOutlineContactMail onClick={() => setType(2)} className=' cursor-pointer p-3 rounded-md opacity-70 transition-all' size={40} />
          <MdOutlineLocationOn onClick={() => setType(3)} className=' cursor-pointer p-3 rounded-md opacity-70 transition-all' size={40} />
        </animated.div>
        {
          {
            0: <Text setFieldText={setFieldText} />,
            1: <Url setFieldText={setFieldText} />,
            2: <Contact setFieldText={setFieldText} />,
            3: <Location setFieldText={setFieldText} />
          }[type]
        }
        <div className='flex justify-end w-full'>
          <div onClick={handleInput}
            className=' flex gap-2 px-4 items-center p-2 mt-5 bg-gray-400 text-sm rounded-md shadow-md text-white cursor-pointer active:scale-95 select-none'>
            <IoCreateOutline size={18} />
            <p>Create</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Parameters