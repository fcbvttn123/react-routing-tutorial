import './App.css'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { Home } from './pages/Home';
import { About } from './pages/About';
import {Vans} from "./pages/Vans"
import { VanDetail } from './pages/VanDetail';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/vans" element={<Vans />}/>
        <Route path="/vans/:id" element={<VanDetail />}/>
      </Routes>
      <footer className='bg-zinc-900 h-14 grid place-content-center'>
        <p className='text-gray-400'>Ⓒ 2022 #VANLIFE</p>
      </footer>
    </BrowserRouter>
  )
}

export default App
