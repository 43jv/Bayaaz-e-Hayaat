import React from "react";
import "./index.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./components/aboutPage.js";
import Archive from "./components/authorsPage.js";
import Author from "./components/authorBibliography.js";
import Home from "./components/homePage.js";
import Layout from "./components/layout";
import RenderDoc from "./components/renderDoc.js";
import SearchBar from "./components/searchBar.js";

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