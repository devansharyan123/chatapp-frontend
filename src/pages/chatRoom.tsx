import React from 'react'

function ChatRoom() {
  return (
    <div className='h-screen w-screen bg-slate-950 flex flex-col justify-between' >
      <div className='flex flex-col gap-3 items-start justify-start p-10'>
        <span className='bg-white p-3 rounded-md text-black'>hello !!!</span>
        <span className='bg-white p-3 rounded-md text-black'>hello !!!</span>
      </div>
      <div className='flex flex-row items-end p-5 w-full'>
        <input type='text' placeholder='enter your message' className='w-5/6 text-black bg-slate-50 rounded-l-md p-2' />
        <button className='w-1/6 bg-zinc-500 rounded-r-md p-2'>Send</button>
      </div>
    </div>
  )
}

export default ChatRoom