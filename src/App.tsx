
import JoiningRoom from './pages/JoiningRoom'
import ChatRoom from './pages/chatRoom'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
        <Route path='/' element={<JoiningRoom />} />
        <Route path='/room' element={<ChatRoom />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
