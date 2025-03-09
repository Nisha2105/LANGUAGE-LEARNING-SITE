import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { NavBar } from './Components/NavBar';
import {Banner} from './Components/Banner';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  return (
    <>
      <div className="App">
        <NavBar />
        <Banner />
      </div>
    </>
  )
}

export default App
