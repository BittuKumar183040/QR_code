import React, { useEffect, useRef, useState } from 'react'

const initial = [
  { name: "http", prefix: "http://", postfix: "", desc: "HyperText Transfer Protocol, used for unsecured web traffic." },
  { name: "https", prefix: "https://", postfix: "", desc: "HyperText Transfer Protocol, used for unsecured web traffic." },
  { name: "ftp", prefix: "ftp://", postfix: "", desc: "HyperText Transfer Protocol, used for unsecured web traffic." },
  { name: "smtp", prefix: "smtp://", postfix: "", desc: "HyperText Transfer Protocol, used for unsecured web traffic." },
  // { name: "pop3", prefix: "http://", postfix:"", desc: "HyperText Transfer Protocol, used for unsecured web traffic." },
  { name: "telnet", prefix: "telnet://", postfix: "", desc: "HyperText Transfer Protocol, used for unsecured web traffic." }
]

const Url = ({ setFieldText }) => {
  const inputField = useRef();
  const [textInput, setTextInput] = useState("")
  const [protocols, setProtocols] = useState(initial);

  const handleInputChangeLink = (e) => {
    if (e.target.value.length === 0) {
      setProtocols(initial)
    }
    if (e.nativeEvent.data === ".") {
      setProtocols([
        { name: "com", prefix: "", postfix: "com", desc: "communication postfix for website" },
        { name: "in", prefix: "", postfix: "in", desc: "communication postfix for website" },
        { name: "org", prefix: "", postfix: "org", desc: "communication postfix for website" },
      ])
    }
    setTextInput(e.target.value)
  }
  const handleProtocol = (prefix, postfix) => {
    const inputDom = inputField.current
    let changedText = ""
    if (inputDom === null || inputDom === undefined || inputDom.value === undefined || inputDom.value === "") {
      changedText = prefix
    } else {
      changedText = (prefix ? prefix : "") + inputDom.value + (postfix ? postfix : "")
    }
    setTextInput(changedText)
  }

  useEffect(() => {
    let input = inputField.current
    input.value = textInput
    setFieldText(textInput)
  }, [textInput])

  return (
    <>
      <label htmlFor='url' className=' mt-3 mb-2 opacity-70 cursor-pointer uppercase'>url</label>
      <div className=' relative mb-2'>
        <input ref={inputField}
          name='url'
          type="text"
          onInput={handleInputChangeLink}
          className=' p-2 w-96 shadow-inner outline-none opacity-70 rounded-md'
          id='url'
          placeholder=' Enter Text To Generate'
        />
        <p className=' absolute opacity-50 text-xs mt-1'>{textInput.length}/300</p>
      </div>
      <div className=' flex flex-wrap w-full justify-start gap-2 mt-4'>
        {protocols.map((protocol) => (
          <label key={protocol.name} htmlFor='url'
            className=' cursor-pointer px-4 py-0.5 active:scale-95 select-none bg-slate-100 rounded-md'
            onClick={() => handleProtocol(protocol.prefix, protocol.postfix)} >
            {protocol.name}
          </label>
        ))}
      </div>
    </>
  )
}

export default Url