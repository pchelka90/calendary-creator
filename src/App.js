import React, { useEffect } from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from './components/home/Home';
import SuccessPage from './components/home/kontakt/sukces';
import Aos from 'aos';
import 'aos/dist/aos.css';

function App() {
  useEffect(() => {
    Aos.init({
      duration: 1500,
    });
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='sukces' element={<SuccessPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
