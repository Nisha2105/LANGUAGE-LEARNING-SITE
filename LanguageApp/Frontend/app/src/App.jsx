import React from 'react';
import { Routes, Route, Router, BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import NavBar from './components/Navbar.jsx';
import Navbar2 from './components/NavBar2.jsx';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import MyCards from './components/MyCards';
import CoursesPage from './pages/CoursesPage.jsx';
import CourseContent from './pages/CourseContent.jsx';
import SelectLanguage from "./pages/SelectLanguage";
import QuizPage from "./pages/QuizPage";
import SearchResults from './components/SearchResults.jsx';
import DebugGame from './pages/DebugGame';

const App = () => {
   return (
      <>
     
      <NavBar/>
      <Navbar2/>
         <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/courses" element={<CoursesPage />} />
            <Route path="/" element={<MyCards />} />
            <Route path="/course/:id" element={<CourseContent />} />
            <Route path="/select-language" element={<SelectLanguage />} />
            <Route path="/quiz/:language" element={<QuizPage />} />
            <Route path="/search" element={<SearchResults/>}/>
            <Route path="/debug-game/:gameLanguage" element={<DebugGame />} />
         </Routes>
         
      </>
   );
};

export default App;