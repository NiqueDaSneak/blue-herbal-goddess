import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import { Home, Services, ComingSoon, Products, Assessment } from './components/views/index'
import Layout from './components/hoc/Layout'
import {GlobalStore} from './components/hoc/Store'
import * as serviceWorker from './serviceWorker'

const AppRouter = () => {


  
 
  
  // const [state, dispatch] = useReducer(reducer, initialState);

  return(
    <GlobalStore>
      <Router>
        <Layout>
            <Switch>
              <Route path="/" exact component={Home}/>
              <Route path='/services' component={Services}/>
              <Route path='/products' component={Products}/> 
              <Route path='/assessment' component={Assessment}/>
              {/* <Route path='/' component={ComingSoon} /> */}
            </Switch>
        </Layout>
      </Router>
    </GlobalStore>
  )
}

ReactDOM.render(<AppRouter />, document.getElementById('app-root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
