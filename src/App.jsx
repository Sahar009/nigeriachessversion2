import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { Nav } from './components/Nav/Nav'
import { Home } from './pages/Home'
import { About } from './pages/About'
import { Contact } from './pages/Contact'
import { Tutorials } from './pages/Tutorials'
import { Register } from './pages/Register'
import { DarkModeProvider } from './context/DarkModeContext'

function App() {
  return (
    <>
      <DarkModeProvider>
        <BrowserRouter>
          <Nav />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/tutorials" element={<Tutorials />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </BrowserRouter>
      </DarkModeProvider>
    </>
  )
}

export default App
