import React, {useState, useReducer} from 'react'
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
        <Layout 
          // openModal={(type) => dispatch({type: 'openModal', modalType: type})}
          // closeModal={(modalData) => dispatch({type: 'closeModal', modalData: modalData})}
          // modalOpen={state.modalOpen}
          // modalType={state.modalType} 
          // modalData={state.modalData} 
          >
            <Switch>
              <Route path="/" exact >
                <Home />
              </Route>
              <Route path='/services'>
                <Services
                  // modalOpen={state.modalOpen} 
                  // openModal={(modalType, modalData) => dispatch({type: 'openModal', modalData: modalData, modalType: modalType})} 
                  />
              </Route> 
              <Route path='/products'> 
                <Products 
                  // openModal={(type) => dispatch({type: 'openModal', modalType: type})} 
                  />
              </Route>
              <Route path='/assessment'>
                <Assessment 
                  // openModal={(type) => dispatch({type: 'openModal', modalType: type})} 
                  />
              </Route>
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
