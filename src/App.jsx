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
import { Vans as HostVans } from './pages/Host/Vans';
import { VanDetail as  HostVanDetail } from './pages/Host/VanDetail';
import { HostVanInfo } from './pages/Host/HostVanInfo';
import { HostVanPricing } from './pages/Host/HostVanPricing';
import { HostVanPhoto } from './pages/Host/HostVanPhoto';

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
              <Route index element={<Dashboard />}/>
              <Route path="income" element={<Income />}/>
              <Route path="reviews" element={<Reviews />}/>
              <Route path="vans" element={<HostVans />}/>
              <Route path="vans/:id" element={<HostVanDetail />}>
                <Route index element={<HostVanInfo />}/>
                <Route path='price' element={<HostVanPricing />}/>
                <Route path='photos' element={<HostVanPhoto />}/>
              </Route>
            </Route>

            <Route path="*" element={<h1>Page not found</h1>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
