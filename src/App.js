import React from "react";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./components/about";
import Archive from "./components/archive";
import Author from "./components/author";
import Home from "./components/home";
import Layout from "./components/layout";
import RenderDoc from "./components/RenderDoc";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/archive" element={<Archive />} />
          <Route path="/author" element={<Author />} />
          <Route path="/RenderDoc/:pdfFileName" element={<RenderDoc />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
