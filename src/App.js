import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import WhatIs from './components/WhatIs';
import Color from './components/Color';

import { Routes, Route } from 'react-router-dom'




function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/:whatIs' element={<WhatIs />} />
        <Route path='/:whatIs/:font/:background' element={<Color />} />
      </Routes>

    </div>
  );
}

export default App;
