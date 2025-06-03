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
import { TournamentDetails } from './pages/TournamentDetails';
import { RegisteredSchoolsList } from './pages/RegisteredSchoolsList';
import { NotFound } from './pages/NotFound';

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
            <Route path="/tournament-details" element={<TournamentDetails />} />
            <Route path="*" element={<NotFound />} />
            <Route path="/registered-schools" element={<RegisteredSchoolsList />} />
          </Routes>
          <Footer/>
          <WhatsAppFloat />
        </BrowserRouter>
      </DarkModeProvider>
    </>
  )
}

export default App
