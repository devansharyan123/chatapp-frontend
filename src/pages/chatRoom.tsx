import React, { useEffect, useRef, useState } from 'react'
import { useWebSocket } from './Context/WebContext';

function ChatRoom() {
  const socket = useWebSocket();
  const [message, setMessage] = useState<String[]>([]);
  const roomId = localStorage.getItem("roomId");
  const name = localStorage.getItem("name");
  const inputRef = useRef<HTMLInputElement | null>(null);
  useEffect(() => {

    if (!socket)
      return;

    socket.onmessage = (event) => {
      const data = JSON.parse(event.data);
      setMessage((prev) => [...prev, data.message])
    }

  }, [])

  async function send() {
    console.log(inputRef.current?.value);
    console.log(socket);
    if (socket && socket.readyState == WebSocket.OPEN) {
      console.log("reaching")
      socket.send(JSON.stringify({
        type: "chat",
        payload: {
          roomId: roomId,
          name: name,
          message: inputRef.current?.value
        }
      }))
    }
  }

  return (
    <div className='h-screen w-screen bg-slate-950 flex flex-col justify-between' >
      <div className='flex flex-col gap-3 items-start justify-start'>
       
          {message.map((messages) => (
              <div className='flex flex-row gap-2 p-5 '>
              <span className='bg-white p-3 rounded-md ml-5 text-black'>
               {messages}
              </span>
              </div>
          ))}
        </div>
  
      
      <div className='flex flex-row items-end p-5 w-full'>
        <input type='text' ref={inputRef} placeholder='enter your message' className='w-5/6 text-black bg-slate-50 rounded-l-md p-2' />
        <button onClick={send} className='w-1/6 bg-zinc-500 rounded-r-md p-2'>Send</button>
      </div>
    </div>
  )
}

export default ChatRoom