import { useState } from 'react';
import reactLogo from './assets/react.svg';
import { NavBar } from './Components/NavBar';
import { Nav2 } from './Components/Nav2';
import {Banner} from './Components/Banner';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  return (
    <>
      <div className="App">
        <NavBar />
        <Nav2 />
        <Banner />
      </div>
    </>
  )
}

export default App
