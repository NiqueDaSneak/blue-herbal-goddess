import React from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import { Home, Services, ComingSoon, Products, Assessment } from '../views'

const Switcher = () => (
  <Switch>
  <Route path="/" exact >
  <Home />
  </Route>
  <Route path='/services'>
  <Services />
  </Route> 
  <Route path='/products'> 
  <Products />
  </Route>
  <Route path='/assessment'>
  <Assessment />
  </Route>
  {/* <Route path='/' component={ComingSoon} /> */}
  </Switch>
)

export default Switcher