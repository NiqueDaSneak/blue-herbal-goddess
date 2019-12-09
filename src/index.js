import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Layout from './components/hoc/Layout'
import { Home } from './components/views/index'

import * as serviceWorker from './serviceWorker'

const AppRouter = () => (
  <Layout>
    <Router>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/about">
          <h1>about</h1>
        </Route>
      </Switch>
    </Router>
  </Layout>
)

ReactDOM.render(<AppRouter />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
