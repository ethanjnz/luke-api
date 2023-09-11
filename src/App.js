import './App.css';
import Form from './components/Form';
import People from './views/People';
import Error from './views/Error';
import Planets from './views/Planets';
import Species from './views/Species';

import { Routes, Route } from 'react-router-dom'
import Starships from './views/Starships';




function App() {
  return (
    <div className="App">
      <Form />
      <Routes>
        <Route path='/people/:id' element={<People />} />
        <Route path='/planets/:id' element={<Planets />} />
        <Route path='/species/:id' element={<Species />} />
        <Route path='/starships/:id' element={<Starships />} />
        <Route path='/error' element={<Error />} />

      </Routes>
    </div>
  );
}

export default App;
