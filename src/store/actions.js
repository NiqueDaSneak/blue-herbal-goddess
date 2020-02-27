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

const actions = {
  openModal: openModal,
  closeModal: closeModal,
  assessmentButtonClickHandler: assessmentButtonClickHandler
}

export default actions

