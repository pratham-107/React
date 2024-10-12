// import { StrictMode, useContext } from 'react'
import {BrowserRouter} from 'react-router-dom'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
// import './index.css'
// import Context from './Context.jsx'




createRoot(document.getElementById('root')).render(
  // <StrictMode>
  // </StrictMode>,
  <BrowserRouter>
 {/* <Context.Provider value= 'pratham'> */}
  <App/>
 {/* </Context.Provider> */}
 
   </BrowserRouter>
)

