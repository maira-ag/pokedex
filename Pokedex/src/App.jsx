import './App.css'
import Pokedex from './components/Pokedex'

import Footer from './components/Footer'
import Logo from './components/Logo'
import { motion } from 'framer-motion'
import { useState, useEffect} from 'react'
import styled from 'styled-components'

const Spinner = styled(motion.div)`
  width: 50px;
  height: 50px;
  border: 4px solid white;
  border-top: 4px solid rgb(219, 33, 61);
  border-radius: 50%;
`

export default function App() {
  const [Carregando, setCarregando] = useState(true);
  useEffect(() =>{
    const timer = setTimeout(() => {
      setCarregando(false)
    }, 5000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <>
    <div className="center">
      {Carregando ? (
      <Spinner
      animate={{rotate: 360}}
      transition={{duration: 0.5, repeat: Infinity, ease: 'linear'}}
      />
      ):(
        <div className='container'> 
        <Logo/>
        <Pokedex/>
        <Footer/>
        </div>
      )}
    </div>
    </>
    
)}