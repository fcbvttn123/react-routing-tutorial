import './App.css'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { Home } from './pages/Home';
import { About } from './pages/About';
import {Vans} from "./pages/Vans"
import "./server"
import { useEffect, useState } from 'react';

function App() {
  const [vans, setVans] = useState([])
  let vanComponents = vans.map(obj => <Vans key={obj.id} data={obj}/>)

  async function getVans() {
    let res = await fetch("/api/vans")
    let data = await res.json()
    return data.vans
  }

  useEffect(() => {
    async function setState() {
      let arr = await getVans()
      setVans(arr)
    }
    setState()
  }, [])

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
        <Route path="/vans" element={vanComponents}/>
      </Routes>
      <footer className='bg-zinc-900 h-14 grid place-content-center'>
        <p className='text-gray-400'>Ⓒ 2022 #VANLIFE</p>
      </footer>
    </BrowserRouter>
  )
}

export default App
