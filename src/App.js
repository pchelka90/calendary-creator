import React, { useEffect } from 'react';
import Home from './components/home/Home';
import Aos from 'aos';
import 'aos/dist/aos.css';

function App() {
  useEffect(() => {
    Aos.init({
      duration: 1500,
    });
  }, []);

  return (
    <div className='App'>
      <Home />
    </div>
  );
}

export default App;
