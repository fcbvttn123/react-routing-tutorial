import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Vans } from './pages/Vans/Vans';
import { VanDetail } from './pages/Vans/VanDetail';
import { Layout } from './components/Layout';
import { Dashboard } from './pages/Host/Dashboard';
import { Income } from './pages/Host/Income';
import { Reviews } from './pages/Host/Reviews';
import { Host } from './components/Host';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
            <Route path="/" element={<Home />}/>
            <Route path="about" element={<About />}/>
            <Route path="vans" element={<Vans />}/>
            <Route path="vans/:id" element={<VanDetail />}/>

            <Route path="host" element={<Host />}>
              <Route path="host" element={<Dashboard />}/>
              <Route path="income" element={<Income />}/>
              <Route path="reviews" element={<Reviews />}/>
            </Route>
        </Route>
      </Routes>
      <footer className='bg-zinc-900 h-14 grid place-content-center'>
        <p className='text-gray-400'>Ⓒ 2022 #VANLIFE</p>
      </footer>
    </BrowserRouter>
  )
}

export default App
