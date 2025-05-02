import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import App from './InputJsonApp'
import App from './intapp'
// import App from './App'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App/> components*/} 
    <App/> 
    {/* <App/> */}
    
  </StrictMode>,
)
