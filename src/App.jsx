import { useEffect, useState } from 'react'
import Parameters from './Parameters'
import img from './assets/qr.png'
import './App.css'
import { RiShareForwardLine } from "react-icons/ri";
import { BsDownload } from "react-icons/bs";


function App() {
  const [img, setImage] = useState("")
  const [text, setText] = useState("Example")
  const [fetching, setFetching] = useState(false)

  useEffect(() => {
    setFetching(true)
    console.log("rendered")
    fetch(`https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=${text}`)
      .then((res) => res.blob())
      .then((url) => {
        setImage(URL.createObjectURL(url))
      })
      .catch((e) => {
        console.log(`API is having issue : ${e}`)
      }).finally(() => {
        setFetching(false)
      })
  }, [text])


  return (
    <>
      <p className=' p-2 mb-10 bg-slate-300 rounded-md text-white font-bold tracking-widest select-none'>QR CODE GENERATOR</p>
      <div className=' flex justify-center gap-5 flex-wrap'>
        <Parameters setText={setText} />
        {fetching ?
          <div className=" animate-pulse w-96">
            <p className=' text-left opacity-70 cursor-pointer pb-1'>Result</p>

            <div className="bg-white p-2 py-8 rounded-md flex flex-col gap-6">
              <div className="h-[250px] w-[250px] bg-gray-300 self-center rounded"></div>
              <div>
                <div className="h-4 bg-gray-300 rounded w-10/12 m-auto py-4 mb-2"></div>
                <div className="h-4 bg-gray-300 rounded w-1/2"></div>
              </div>
            </div>
          </div> :
          <div>
            <div className=' flex justify-between'>
              <p className='opacity-70 pb-1'>Result</p>
              <div className='flex gap-4 mb-4'>
                <div className='flex items-center justify-between gap-2 opacity-70 hover:opacity-100 active:scale-95 select-none transition-all bg-red-600 text-white shadow-md p-1 px-2 rounded-md cursor-pointer'>
                  <p className=' text-sm'>Download</p>
                  <BsDownload />
                </div>
                <div className='flex items-center justify-between gap-2 opacity-70 hover:opacity-100 active:scale-95 select-none transition-all bg-blue-600 text-white shadow-md p-1 px-2 rounded-md cursor-pointer'>
                  <p className=' text-sm'>Share</p>
                  <RiShareForwardLine />
                </div>
              </div>
            </div>
            <div className=" bg-white p-2 py-8 rounded-md flex flex-col gap-6 ">
              <div className=" flex justify-center items-center">
                <img src={img} alt="qrCode" className='h-[250px] w-[250px]' />
              </div>
              <div className=" ">
                <p className=" pb-2 font-bold text-xl w-10/12 m-auto">
                  Help You to Create Your Custom QR Code
                </p>
                <p className=" text-md">
                  Scan the QR code to get your data.
                </p>
              </div>
            </div>
          </div>
        }
      </div>
    </>
  )
}

export default App
