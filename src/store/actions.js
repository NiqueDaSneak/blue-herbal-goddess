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
    console.log('maxCategoryNames: ', maxCategoryNames)
    console.log('getState().assessmentScores: ', getState().assessmentScores)
  }
}

const setAssessmentResults = categories => {
  return {
    type: 'SET_ASS_RESULTS',
    categories: categories
  }
}

const actions = {
  openModal: openModal,
  closeModal: closeModal,
  assessmentButtonClickHandler: assessmentButtonClickHandler,
  calculateAssessmentResults: calculateAssessmentResults
}

export default actions

