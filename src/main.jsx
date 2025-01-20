import { StrictMode } from 'react'
import * as THREE from 'three';
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './main.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
