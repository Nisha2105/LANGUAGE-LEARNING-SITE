import { useState } from 'react';
import reactLogo from './assets/react.svg';
import { NavBar } from './Components/NavBar';
import { NavBar2 } from './Components/NavBar2';
import {Banner} from './Components/Banner';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  return (
    <>
      <div className="App">
        <NavBar />
        <NavBar2 />
        <Banner />
      </div>
    </>
  )
}

export default App
