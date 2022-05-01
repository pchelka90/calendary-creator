import React from 'react';
import { useEffect } from 'react';
import { Routes, Route, Outlet, Link } from 'react-router-dom';
import Home from './Components/home/Home';
import NoMatch from './Components/home/NoMatch';
import Aos from 'aos';
import 'aos/dist/aos.css';
import SuccessPage from './Components/home/SuccessPage';

function App() {
  useEffect(() => {
    Aos.init({
      duration: 1500,
    });
  }, []);

  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/sukces' element={<SuccessPage />} />
        <Route path='*' element={<NoMatch />} />
      </Routes>
    </div>
  );
}

export default App;
