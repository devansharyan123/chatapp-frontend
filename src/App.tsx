
import JoiningRoom from './pages/JoiningRoom'
import ChatRoom from './pages/ChatRoom'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { WebSocketProvider } from './pages/Context/WebContext'

function App() {


  return (
    <>
      <WebSocketProvider>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<JoiningRoom />} />
            <Route path='/room' element={<ChatRoom />} />
          </Routes>
        </BrowserRouter>
      </WebSocketProvider>
    </>
  )
}

export default App
