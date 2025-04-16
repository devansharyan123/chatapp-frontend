import React from 'react'

function JoiningRoom() {
  return (
    <div className='h-screen w-screen bg-slate-950 flex items-center justify-center'>
        <div className="w-1/2 h-1/2 border border-slate-700 rounded-lg bg-gray-900 ">
           <div className='flex flex-col p-10 gap-10 items-center justify-center'>
                <p className="text-xl text-white">Enter Your Name And Room Number</p>
                <input type='text' placeholder='enter name' className='p-3 rounded-md w-full' />
                <input type='text' placeholder='room number' className='p-3 rounded-md w-full' />
                <button className='w-full p-3 bg-blue-700 hover:scale-105 rounded-md'>Create / Join Room</button>
           </div>
        </div>
    </div>
  )
}

export default JoiningRoom