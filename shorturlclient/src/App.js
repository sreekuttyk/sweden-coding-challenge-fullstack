
import React from 'react'
import {Route, BrowserRouter as Router, Routes} from 'react-router-dom'
import Input from './Input'
import 'bootstrap/dist/css/bootstrap.min.css';

import BackgroundAnimation from './BackgroundAnimation';

function App() {
  return (
    <div className="App">
       <Router>
        <BackgroundAnimation></BackgroundAnimation>
        <Routes>
          <Route path="/" element={<Input />} />
         
        </Routes>
      </Router>
    </div>
  );
}

export default App;
