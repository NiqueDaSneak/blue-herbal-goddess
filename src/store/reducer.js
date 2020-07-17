const reducer = (state, action) => {
  switch (action.type) {
    case 'OPEN_MODAL':
      return {...state, modalOpen: true, modalType: action.modalType, modalData: action.modalData}
    case 'CLOSE_MODAL':
      return {...state, modalType: null, modalOpen: false}
    case 'SET_NEW_SCORES':
      return {...state, assessmentScores: action.newScores}
    case 'SET_ASS_RESULTS':
      return {...state, assessmentResultCategories: action.categories}
    case 'LOAD_PRODUCTS_START':
      return {...state, areProductsLoading: true}
    case 'LOAD_PRODUCTS_END':
      return {...state, areProductsLoading: false}
    case 'SET_PRODUCTS': 
      return {...state, herbalProducts: action.productData}
    case 'ADD_TO_CART':
      return {...state, cart: {active: true, items: [...state.cart.items, action.item]}}
    case 'SET_CART':
      return {...state, cart: {items: action.cartData}}
    default:
      throw new Error();
  }
}


export default reducer