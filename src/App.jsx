
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { Home } from './features/Home/Home'
import { Gallery } from './features/gallery/Gallery'

function App() {

  return (
    <>
    <BrowserRouter>
     <Routes>
      <Route path="/" element={<Home/>} />
      <Route path='gallery' element={<Gallery/>} />
    </Routes>
    
    </BrowserRouter>
    
     
    </>
  )
}

export default App
