import { useEffect, useState } from 'react'
import Parameters from './Parameters'
import './App.css'
import qr from './assets/qr.png'
import { RiShareForwardLine } from "react-icons/ri";
import { BsDownload } from "react-icons/bs";
import { ToastContainer, toast } from 'react-toastify';
import Colors from './components/Colors';

const text_initial = {
  text: "https://bittukr.vercel.app/",
  color: "000000"
}

function App() {
  const [img, setImage] = useState("")
  const [text, setText] = useState(text_initial.text)
  const [color, setColor] = useState(text_initial.color)
  const [fetching, setFetching] = useState(false)

  let url = `https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=${text}&color=${color}`

  useEffect(() => {
    // if (text === text_initial.text) {
    //   setImage(qr)
    //   return;
    // }
    setFetching(true)
    fetch(url)
      .then((res) => res.blob())
      .then((url) => {
        setImage(URL.createObjectURL(url))
      })
      .catch((e) => {
        console.log(`API is having issue : ${e}`)
      }).finally(() => {
        setFetching(false)
      })
  }, [text, color])

  const handleDownload = () => {
    const a = document.createElement("a");
    let textLength = 10;
    console.log(a, img)
    if (text.length < 10) { textLength = text.textLength }
    a.href = img;
    a.download = `${text.slice(0, textLength)}.png`
    document.body.appendChild(a)
    a.click();
    document.body.removeChild(a)
  }

  const handleSelect = () => {
    navigator.clipboard.writeText(url)
    toast.success("Link copied! Ready to share.");
  }

  return (
    <><ToastContainer autoClose={1800} pauseOnHover={false} />
      <p className=' p-2 mb-10 bg-slate-300 rounded-md text-white font-bold tracking-widest select-none'>QR CODE GENERATOR</p>
      <div className=' flex justify-center gap-5 flex-wrap-reverse'>
        <Parameters setText={setText} />
        {/* <p className=' absolute top-0' onClick={() => setFetching(!fetching)}>Checking</p> */}
        {fetching ?
          <div className=" animate-pulse w-96 relative">
            <div className=' flex justify-between item'>
              <p className='opacity-70 pb-1'>Result</p>
              <div className='flex gap-4 mb-4'>
                <div className=' bg-gray-100 p-1 px-2 rounded-md h-[28px] w-[105px]'></div>
                <div className=' bg-gray-200 p-1 px-2 rounded-md h-[28px] w-[77px]'></div>
              </div>
            </div>
            <div className="bg-white p-2 py-8 rounded-md flex flex-col gap-6 h-[426px]">
              <div className="h-[250px] w-[250px] bg-gray-300 self-center rounded"></div>
              <div>
                <div className="h-3 bg-gray-300 rounded w-10/12 m-auto py-4 mb-1"></div>
                <div className="h-3 bg-gray-300 rounded m-auto py-4 w-1/2"></div>
                <div className="h-3 bg-gray-300 rounded m-auto w-2/3 mt-4"></div>
              </div>
            </div>
            <div className=' absolute -right-8 top-28 w-[36px] h-[196px] bg-white rounded-r-lg flex flex-col justify-center items-center gap-1 p-1'>
              <div className=" h-7 w-7 rounded-lg bg-slate-100" ></div>
              <div className=" h-7 w-7 rounded-lg bg-slate-200" ></div>
              <div className=" h-7 w-7 rounded-lg bg-slate-300" ></div>
              <div className=" h-7 w-7 rounded-lg bg-slate-200" ></div>
              <div className=" h-7 w-7 rounded-lg bg-slate-100" ></div>
              <div className=" h-7 w-7 rounded-lg bg-slate-200" ></div>
            </div>
          </div> :
          <div className=' relative w-96'>
            <div className=' flex justify-between item'>
              <p className='opacity-70 pb-1'>Result</p>
              <div className='flex gap-4 mb-4'>
                <div onClick={handleDownload} className='flex items-center justify-between gap-2 opacity-70 hover:opacity-100 active:scale-95 select-none transition-all bg-red-600 text-white shadow-md p-1 px-2 rounded-md cursor-pointer'>
                  <p className=' text-sm'>Download</p>
                  <BsDownload />
                </div>
                <div onClick={handleSelect} className='flex items-center justify-between gap-2 opacity-70 hover:opacity-100 active:scale-95 select-none transition-all bg-blue-600 text-white shadow-md p-1 px-2 rounded-md cursor-pointer'>
                  <p className=' text-sm'>Share</p>
                  <RiShareForwardLine />
                </div>
              </div>
            </div>
            <Colors setColor={setColor} color={color} />
            <div className=" bg-white p-2 py-8 rounded-md flex flex-col gap-6 select-none pointer-events-none ">
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
