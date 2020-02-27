import actions from "./actions"

const reducer = (state, action) => {
  switch (action.type) {
    case 'OPEN_MODAL':
      return {...state, modalOpen: true, modalType: action.modalType, modalData: action.modalData}
    case 'CLOSE_MODAL':
      return {...state, modalType: null, modalOpen: false}
    case 'SET_NEW_SCORES':
      return {...state, assessmentScores: action.newScores}
      default:
      throw new Error();
  }
}


export default reducer