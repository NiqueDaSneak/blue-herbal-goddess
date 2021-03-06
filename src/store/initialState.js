const initialState = {
  modalOpen: false,
  modalData: {},
  modalType: null,
  cart: {
    active: false,
    items: []
  },
  assessmentScores: {
    'digestive'   : 0,
    'hepatic'     : 0,
    'intestinal'  : 0,
    'circulatory' : 0,
    'nervous'     : 0,
    'immune'      : 0,
    'respiratory' : 0,
    'urinary'     : 0,
    'glandular'   : 0,
    'structural'  : 0,
  },
  assessmentResultCategories: ['respiratory'],
  areProductsLoading: false,
  herbalProducts: []
}

export default initialState