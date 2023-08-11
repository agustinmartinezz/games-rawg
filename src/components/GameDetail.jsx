import React, { useState } from 'react'
import Modal from 'react-modal';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    height: '50vh',
    width: '40vw',
    boxShadow: '6px 7px 38px 10px rgba(0,0,0,0.5)'
  },
};

const GameDetail = ({ gameId, modalState, setModalState }) => {
  function afterOpenModal() {
    if(modalState){
      document.body.style.overflow = 'hidden';
    } 
  }

  function closeModal() {
    document.body.style.overflow = 'unset';
    setModalState(false);
  }
  
  Modal.setAppElement('#root');

  return (
    <div>
      <Modal
        isOpen={modalState}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >

      </Modal>
    </div>
  )
}

export default GameDetail