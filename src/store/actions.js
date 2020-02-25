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

const actions = {
  openModal: openModal,
  closeModal: closeModal
}

export default actions