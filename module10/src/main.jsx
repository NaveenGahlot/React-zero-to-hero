import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

// Earlier, transitions worked only with sysnchronous updates;
// async operations needed manual handling with useTransition and startTransition.
// With React 18, all updates are concurrent by default, so transitions work seamlessly without extra code.
// In React 19, async transitions are first-class -- pending,
// errors, and optimistic updates are tracked automatically.