import { useState } from 'react'
import './App.css'
import JoiningRoom from './pages/JoiningRoom'
import ChatRoom from './pages/chatRoom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ChatRoom/>
    </>
  )
}

export default App
