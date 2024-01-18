import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';

import {BrowserRouter, Routes, Route} from "react-router-dom"
import Archive from './components/archive';
import Home  from './components/home';
import Layout from './components/layout';
import UrduText from './components/urdu';
import Test from './components/test';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />{" "}
          <Route path="archive" element={<Archive />} /> 
          <Route path="urdu" element={<UrduText />} /> 
          <Route path="test" element={<Test />} /> 
        </Route> 
      </Routes> 
    </BrowserRouter>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

