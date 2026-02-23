import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AppLayout from './components/layout/AppLayout.tsx'
import App from './App.tsx'
import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route path="/" element={<App />} />
          <Route path="/alza-la-voz" element={<div>Alza la Voz (WIP)</div>} />
          <Route path="/circulos" element={<div>Círculos de Acción (WIP)</div>} />
          <Route path="/perfil" element={<div>Mi CIVICUM (WIP)</div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
