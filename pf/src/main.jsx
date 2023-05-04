import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Index from './pages/Index.jsx'
import {BrowserRouter, Route, Routes, useLocation} from 'react-router-dom'
import Appshell from './components/appshell/Appshell.jsx'
import Dashboard from './pages/Dashboard'
import SignIn from './pages/SignIn'
import Contactus from './pages/ContactUs'
  const Rts = [
    {
      path : '/',
      element : <Index/>
    },
    {
      path:'/ContactUs',
      element:<Contactus/>

    }
  ]
const APP_RTS = [
  {
    path : '/app/dashboard',
    element : <Dashboard/>
  },
  
]
 function Insure(){
  const {pathname} = useLocation()
  if(pathname.startsWith('/app') || pathname.startsWith('/signin')){
    APP_RTS.push({
      path : '/signin',
      element : <SignIn/>
    })
    return(<Routes>
          {
            APP_RTS.map((props,i)=>(
              <Route {...props} key={i}/>
            ))
          }

    </Routes>)
  }else{
    return (<Appshell>
      <Routes>
         {
           Rts.map((props,i)=>(
             <Route {...props} key={i}   />
           ))
         }
       </Routes>
       </Appshell>) 
  }
  
 }

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <Insure/>
    </BrowserRouter>
   
  </React.StrictMode>,
)
