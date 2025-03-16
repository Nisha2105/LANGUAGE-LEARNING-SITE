import React from 'react';
import { useState } from 'react';
import { NavBar } from '../Components/NavBar';
import {Navbar2} from '../Components/NavBar2';
import 'bootstrap/dist/css/bootstrap.min.css';

function Home() {

  return (
    <>
      <div className="home">
        <NavBar />
        <Navbar2/>
      </div>
    </>
  )
}

export default Home;