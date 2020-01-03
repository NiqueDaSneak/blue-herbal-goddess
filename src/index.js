import React, {useState, useReducer} from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import { Home, Services, ComingSoon, Products } from './components/views/index'
import Layout from './components/hoc/Layout'
import * as serviceWorker from './serviceWorker'

const AppRouter = () => {
  // const [modalActive, setModalActive] = useState(false)
  // const [modalAction, setModalAction] = useState(null)

  const initialState = {
    modalOpen: false,
    modalType: null,
    // modalData: null
  }
  
  function reducer(state, action) {
    switch (action.type) {
      case 'openModal':
        // console.log('action', action)
        return {modalOpen: true, modalType: action.modalType, modalData: action.modalData}
      case 'closeModal':
        return {modalOpen: false, modalData: action.modalData}
        // return console.log('d')
    //   case 'closeModal':
    //     props.resetModal()
    //     return {modalActive: false};
    //   case 'openModal':
    //     return {modalActive: true};
      default:
        throw new Error();
    }
  }
  
  const [state, dispatch] = useReducer(reducer, initialState);

  return(
    <Layout 
      closeModal={(modalData) => dispatch({type: 'closeModal', modalData: modalData})}
    // toggleModal={() => setModalActive(!modalActive)}
      modalOpen={state.modalOpen}
      modalType={state.modalType} 
      modalData={state.modalData}
    // path={props.match.path} 
    >
    <Router>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path='/services'>
            <Services
              modalOpen={state.modalOpen} 
              openModal={(modalType, modalData) => dispatch({type: 'openModal', modalData: modalData, modalType: modalType})} />
          </Route> 
          <Route path='/products'> 
            <Products openModal={(type) => dispatch({type: 'openModal', modalType: type})} />
          </Route>
          {/* <Route path='/' component={ComingSoon} /> */}
        </Switch>
    </Router>
    </Layout>
  )
}

ReactDOM.render(<AppRouter />, document.getElementById('app-root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
