import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from "react-router-dom";
import './index.css'
import App from './App.jsx'

const isLocalhost = window.location.hostname === "localhost"

// Use /manas-portfolio on localhost, and "/" otherwise (Vercel)
const basename = isLocalhost ? "/manas-portfolio" : "/"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter basename={basename}>
      <App />
    </BrowserRouter>
  </StrictMode>,
)
