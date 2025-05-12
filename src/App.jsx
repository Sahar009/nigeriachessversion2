import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { Nav } from './components/Nav/Nav'
import { WhatsAppFloat } from './components/WhatsAppFloat'
import { Home } from './pages/Home'
import { About } from './pages/About'
import { Contact } from './pages/Contact'
import { Tutorials } from './pages/Tutorials'
import { Register } from './pages/Register'
import { Gallery } from './pages/Gallery'
import { DarkModeProvider } from './context/DarkModeContext'
import { Footer } from './components/Footer/Footer'

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
            <Route path="/gallery" element={<Gallery />} />
          </Routes>
          <Footer/>
          <WhatsAppFloat />
        </BrowserRouter>
      </DarkModeProvider>
    </>
  )
}

export default App
