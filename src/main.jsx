import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import { AppProvider } from './AppContext.jsx'

//👇 </AppProvider> REACT first file main.jsx run render and here first component <AppProvider> run not  <App />
createRoot(document.getElementById('root')).render(
  <AppProvider>  
    <>
      <App />
    </>
  </AppProvider>
  // 👆📗🔖 AppProvider ka role and how work INTERNALY :--    
  //  --STEP 1-- 
  // <AppProvider children={ <App />} >
  // --STEP 2--
  // const AppProvider = ({ children })=>{
  //  {children}
  // }
  //      OR  
  // const AppProvider = (props)=>{
  //  {props.children}
  // }


  //! STEP 1 mei ye hota h
  //📗🔖 when we write any component with opening and closing tag and NOW what we define/write inside it that compoent become
  //  children of that component like this internally become like 
  //? <AppProvider children={ <App />}>    // BASICALLY children attribute is used to do it internally.
  //  👆iska ab next Ye hota h 👇
  //! STEP 2 mei ye hota h iska next
  // jis component ko opening and closing tag ye bana hota h vo ab receive krta h apne andar define component ko like this


)
