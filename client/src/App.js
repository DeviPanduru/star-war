
import React from 'react'
import { BrowserRouter,Route,Switch } from 'react-router-dom'
import Nav from './Nav';
import Register from './Register';
import Login from './Login';
import Myprofile from './Myprofile';


const App = () => {
  return (
    <div>
    <BrowserRouter>
    <Nav />
    <Switch>
    <Route path="./register" component={Register} />
    <Route path="/login" component={Login} />
    <Route path='myprofile' component={Myprofile} />
    </Switch>

    </BrowserRouter>
    
    </div>
  )
}

export default App