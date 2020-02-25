const reducer = (state, action) => {
  switch (action.type) {
    case 'OPEN_MODAL':
      return {...state, modalOpen: true, modalType: action.modalType, modalData: action.modalData}
    case 'CLOSE_MODAL':
      return {...state, modalType: null, modalOpen: false}
    default:
      throw new Error();
  }
}

export default reducer