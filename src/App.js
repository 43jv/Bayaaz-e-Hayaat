// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Archive from './components/archive';
import About from './components/about';
import Home from './components/home';
import Navigation from './components/navigation';
import UrduText from './components/urdu'

const App = () => {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" exact component={Home} />
        <Route path="/urdu" exact component={UrduText} />
        <Route path="/archive" component={Archive} />
      </Routes>
    </Router>
  );
};

export default App;
