import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import { Home, Services, ComingSoon } from './components/views/index'

import * as serviceWorker from './serviceWorker'

const AppRouter = () => (
  <Router>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path='/services' component={Services} /> 
        <Route path='/' component={ComingSoon} />
      </Switch>
  </Router>
)

ReactDOM.render(<AppRouter />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
