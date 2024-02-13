import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { About } from './pages/About';
import {Vans} from "./pages/Vans"
import { VanDetail } from './pages/VanDetail';
import { Layout } from './components/Layout';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />}/>
          <Route path="/about" element={<About />}/>
          <Route path="/vans" element={<Vans />}/>
          <Route path="/vans/:id" element={<VanDetail />}/>
        </Route>
      </Routes>
      <footer className='bg-zinc-900 h-14 grid place-content-center'>
        <p className='text-gray-400'>Ⓒ 2022 #VANLIFE</p>
      </footer>
    </BrowserRouter>
  )
}

export default App
