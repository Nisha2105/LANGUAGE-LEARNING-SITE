import React from 'react';
import { NavBar } from '../components/Navbar';
import {Banner} from '../components/Banner';
import MyCards from '../components/MyCards';
import Footer from '../components/Footer';
// import CodeEditor from '../components/CodeEditor';
import 'bootstrap/dist/css/bootstrap.min.css';

function Home() {
  return (
    <>
      <div className="home">
        <NavBar />
        <Banner />
        <MyCards/>
        {/* <CodeEditor/> */}
        <Footer/>
      </div>
    </>
  )
}

export default Home;