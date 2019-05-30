import React from 'react';

import {BrowserRouter,Route,Switch} from 'react-router-dom';


import Navbar from './Components/Navbar';
import Home from './Components/Home';
import About from './Components/About';
import Electric from './Components/Electric';
import Solar from './Components/Solar';
import Alarms from './Components/Alarms';
import Contact from './Components/Contact';

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App">

        <Navbar />

        
        


        <Route exact path="/" component={Home} />
        <Route  path="/about" component={About} />
        <Route  path="/electric" component={Electric} />
        <Route  path="/solar" component={Solar} />
        <Route  path="/alarms" component={Alarms} />
        <Route  path="/contact" component={Contact} />
        

      </div>
    </BrowserRouter>
    
  );
}

export default App;
