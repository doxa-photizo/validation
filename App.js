import React from 'react'
import Login from './Components/Login'
import SignUp from './SignUp'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import { useState } from 'react'

export default function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <div>
<BrowserRouter>
<Routes>


      <Route path ='/SignUp'element ={<div>
      
      <SignUp setIsLoggedIn={setIsLoggedIn} />
      {isLoggedIn ? <p>You're logged in!</p> : <p>Please sign up or log in.</p>}
    </div>}></Route>
    


</Routes>


</BrowserRouter>
      
    </div>
  )
}
