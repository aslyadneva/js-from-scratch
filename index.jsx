import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

console.log('test')


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <h1>React App</h1>
  </StrictMode>,
)