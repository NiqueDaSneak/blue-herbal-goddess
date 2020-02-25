const reducer = (state, action) => {
  switch (action.type) {
    case 'OPEN_MODAL':
      return {modalOpen: true, modalType: action.modalType, modalData: action.modalData}
    case 'CLOSE_MODAL':
      return {modalOpen: false, modalData: action.modalData}
    default:
      throw new Error();
  }
}

export default reducer