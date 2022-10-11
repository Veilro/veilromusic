// import React from 'react';
// import ReactDOM from 'react-dom/client';
import { HashRouter, Routes, Route } from "react-router-dom";

// const myFirstElement = <h1>Hello React!</h1>

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(myFirstElement);

import ReactDOM from "react-dom/client";
import Layout from "./pages/Layout";
import About from "./pages/About";
import Completed from "./pages/Completed";
import Contact from "./pages/Contact";
import Unfinished from "./pages/Unfinished";
import NoPage from "./pages/NoPage";

export default function App() {
  return (
    <HashRouter>
      <Routes>
          <Route path="/" element={<Layout/>}>
          <Route index element={<About/>} />
          <Route path="about" element={<About/>} />
          <Route path="completed" element={<Completed/>} />
          <Route path="unfinished" element={<Unfinished/>} />
          <Route path="contact" element={<Contact/>} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);