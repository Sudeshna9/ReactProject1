import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';

// eslint-disable-next-line no-unused-vars
import React from 'react';

import Layout from './pages/Layout';
import Home from "./pages/Home";
import Contact from './pages/Contact';
import Project from './pages/Project';
import Aboutus from './pages/Aboutus';
import Vision from './pages/Vision';
import Services from './pages/Services';
import Careers from './pages/Careers';
import Client from './pages/Client';

function App(){
  return(
    <>
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="Aboutus" element={<Aboutus />} />
          <Route path='Vision' element={<Vision/>}/>
          <Route path='Client' element={<Client/>}/>
          <Route path='Services' element={<Services/>}/>
          <Route path='Careers' element={<Careers/>}/>
          <Route path="project" element={<Project />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App;
