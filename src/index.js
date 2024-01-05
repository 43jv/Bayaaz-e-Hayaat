import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';

import {BrowserRouter, Routes, Route} from "react-router-dom"
import Archive from './components/urdu';
import Home  from './components/home';
import Layout from './components/layout';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />{" "}
          <Route path="archive" element={<Archive />} /> 
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

