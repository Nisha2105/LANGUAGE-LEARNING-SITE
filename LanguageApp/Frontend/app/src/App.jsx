import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Html from './Pages/Html';
import Css from './Pages/Css';
import { Navbar } from 'react-bootstrap';
import NavBar from './Components/NavBar';

const App = () => {
   return (
      <>
      <Navbar/>
         <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/html" element={<Html />} />
            <Route path="/css" element={<Css />} />
            
         </Routes>
      </>
   );
};

export default App;