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


// export const changeSameCategory = () => {
//   return (dispatch, getState) => {
//     let matches = getState().allAffirmations.filter( affirmation => affirmation.category === getState().currentAffirmation.category)
//     let randomNum = Math.floor((Math.random() * matches.length))
//     dispatch(setAffirmation({text: matches[randomNum].affirmation, category: matches[randomNum].category}))
//   }
// }

const actions = {
  openModal: openModal,
  closeModal: closeModal
}

export default actions