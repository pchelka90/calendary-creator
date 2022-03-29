import React, { useEffect } from 'react';
import Home from './components/home/Home';
import { BrowserRouter } from 'react-router-dom';
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
      <Home />
    </BrowserRouter>
  );
}

export default App;
