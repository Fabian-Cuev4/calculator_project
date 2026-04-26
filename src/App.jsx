import { useState } from 'react'

import Home from  './components/Home'
import Sum from './components/Sum'
import Calculator from './components/Calculator'
import Pokemon from './components/Pokemon'

import './App.css'

function App() {
  const [view, setView]= useState('home');

  return (
    <>
      {view === "home" && <Home setView={setView} />}
      {view === "sum" && <Sum setView={setView} />}
      {view === "calculator" && <Calculator setView={setView} />}
      {view === "pokemon" && <Pokemon setView={setView} />}
    </>
  )
}

export default App
