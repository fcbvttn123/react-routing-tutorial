import './App.css'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { Home } from './pages/Home';
import { About } from './pages/About';
import {Vans} from "./pages/Vans"
import { VanDetail } from './pages/VanDetail';

function App() {
  return (
    <BrowserRouter>
      <nav>
        <div className='w-11/12 h-20 mx-auto flex items-center justify-between'>
          <Link className='font-extrabold text-2xl' to="/">#VANLIFE</Link>
          <Link className='ml-auto mr-6 font-semibold' to="/about">About</Link>
          <Link className='font-semibold' to="/vans">Vans</Link>
        </div>
      </nav>
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
