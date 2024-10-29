import React from "react";
import "./index.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./components/about";
import Archive from "./components/archive";
import Author from "./components/author";
import Home from "./components/home";
import Layout from "./components/layout";
import RenderDoc from "./components/RenderDoc";
import SearchBar from "./components/SearchBar.js";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/archive/:author" element={<Archive />} />
          <Route path="/author" element={<Author />} />
          <Route path="/RenderDoc/:pdfFileNames" element={<RenderDoc />} />
          <Route path="/SearchBar" element={<SearchBar/>} />

        </Route>
      </Routes>
    </BrowserRouter>
  );
}
