import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import './App.css'
import { Nav } from './components/Nav/Nav'
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
    <HelmetProvider>
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
        </BrowserRouter>
      </DarkModeProvider>
    </HelmetProvider>
  )
}

export default App
