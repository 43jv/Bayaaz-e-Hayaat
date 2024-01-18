// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Archive from './components/archive';
import Home from './components/home';
import Navigation from './components/navigation';
import UrduText from './components/urdu'
import Test from './components/test';

const App = () => {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" exact component={Home} />
        <Route path="/urdu"  component={UrduText} />
        <Route path="/archive" component={Archive} />
        <Route path="/test" component={Test} />

      </Routes>
    </Router>
  );
};

export default App;
