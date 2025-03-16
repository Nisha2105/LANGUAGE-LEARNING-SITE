import { Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Pages/Home';
import Html from './Pages/Html';
import Css from './Pages/Css';
import Login from './Pages/Login';
import SignUp from './Pages/SignUp';
import { Navbar } from 'react-bootstrap';
import NavBar from './Components/NavBar';
import CarouselPage from './Pages/CarouselPage';

const App = () => {
   return (
      <>
      <NavBar/>
         <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />}/>
            <Route path="/signup" element={<SignUp />}/>
            <Route path="/html" element={<Html />} />
            <Route path="/css" element={<Css />} />
            
         </Routes>
         <CarouselPage />
      </>
   );
};

export default App;