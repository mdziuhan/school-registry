import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {SchoolApp} from "./assets/school/SchoolApp.jsx";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <SchoolApp />
  </StrictMode>,
)
