import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Routes, Route } from "react-router";
import MainLayout from './layouts/Main-layouts';
import Homepage from './pages/home.page'
import Firstday from './pages/project.page'


createRoot(document.getElementById('root')).render(
    <StrictMode>
 <BrowserRouter>
    <Routes>
        <Route element={<MainLayout />}>
      <Route path="/" element={<Homepage/>} />
      <Route path="/day/:id" element={<Firstday/>} />
      </Route>
    </Routes>
  </BrowserRouter>,

    </StrictMode>

)
