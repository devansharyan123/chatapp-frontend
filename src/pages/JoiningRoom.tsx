import React, { useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { useWebSocket } from './Context/WebContext';

function JoiningRoom() {
const navigate = useNavigate();

const nameref = useRef<HTMLInputElement | null>(null);
const inputref = useRef<HTMLInputElement | null>(null);
const socket = useWebSocket();
async function onSubmit(){
  
  localStorage.setItem("name", nameref.current?.value ?? "");
  localStorage.setItem("roomId", inputref.current?.value ?? "")

  console.log(nameref.current?.value)
  console.log(inputref.current?.value)
   console.log(socket)
  if(socket && socket.readyState == WebSocket.OPEN){
    console.log("reaching")
    socket.send(JSON.stringify({
      type : "join",
      payload : {
        roomId : inputref.current?.value,
        name   : nameref.current?.value
      }
    }))
    navigate('/room')
  }
}

  return (
    <div className='h-screen w-screen bg-slate-950 flex items-center justify-center'>
        <div className="w-1/2 h-1/2 border border-slate-700 rounded-lg bg-gray-900 ">
           <div className='flex flex-col p-10 gap-10 items-center justify-center'>
                <p className="text-xl text-white">Enter Your Name And Room Number</p>
                <input type='text'ref={nameref} placeholder='enter name' className='p-3 rounded-md w-full' />
                <input type='text' ref={inputref} placeholder='room number' className='p-3 rounded-md w-full' />
                <button className='w-full p-3 bg-blue-700 hover:scale-105 rounded-md' onClick={onSubmit}>Create / Join Room</button>
           </div>
        </div>
    </div>
  )
}

export default JoiningRoom