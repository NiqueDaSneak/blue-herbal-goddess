import axios from 'axios'
// import HerbalProducts from '../data/HerbalProducts.json'

const openModal = (modalType, modalData) => {
  return {
    type: 'OPEN_MODAL', 
    modalType: modalType,
    modalData: modalData
  }
}

const closeModal = () => {
  return {
    type: 'CLOSE_MODAL', 
  }
}
const assessmentButtonClickHandler = (type, questionValues) => {
  return (dispatch, getState) => {
    let newScores = getState().assessmentScores
    for (let [key, value] of Object.entries(questionValues)) {
      newScores[key] = type === 'add' ? newScores[key] + value : newScores[key] - value
    }
    dispatch(setAssessmentScores(newScores))
  }
}

const setAssessmentScores = newScores => {
  return {
    type: 'SET_NEW_SCORES',
    newScores: newScores

  }
}

const calculateAssessmentResults = () => {
  return (dispatch, getState) => {    
    let categoryTotalsArray = Object.values(getState().assessmentScores)
    let maxValue = Math.max(...categoryTotalsArray)
    let maxCategoryNames = []
    for (let [key, value] of Object.entries(getState().assessmentScores)) {
      if (value === maxValue) {
        maxCategoryNames.push(key)
      }
    }
    dispatch(setAssessmentResults(maxCategoryNames))
  }
}

const setAssessmentResults = categories => {
  return {
    type: 'SET_ASS_RESULTS',
    categories: categories
  }
}

const loadProducts = () => {
  return (dispatch, getState) => {
    dispatch(startLoadingProducts)

    axios.get('https://us-central1-blue-herbal-goddess.cloudfunctions.net/helloWorld', { headers: {'Access-Control-Allow-Origin': '*', 'Content-Type': 'application/json'}, credentials: 'same-origin'})
    .then(res => {
      dispatch(finishLoadingProducts)
      dispatch(setProducts(res.data.Data))
      // console.log(res)
    })
    .catch(error => {
      console.log(error)
    })
  }
}

const setProducts = productData => {
  return {
    type: 'SET_PRODUCTS',
    productData
  }
}

const startLoadingProducts = () => {
  return {
    type: 'LOAD_PRODUCTS_START'
  }
}

const finishLoadingProducts = () => {
  return {
    type: 'LOAD_PRODUCTS_END'
  }
}

const addToCart = item => {
  return { 
    type: 'ADD_TO_CART',
    item: item
  }
}

const actions = {
  openModal: openModal,
  closeModal: closeModal,
  assessmentButtonClickHandler: assessmentButtonClickHandler,
  calculateAssessmentResults: calculateAssessmentResults,
  loadProducts: loadProducts,
  addToCart: addToCart
}

export default actions

