import React, { useState } from 'react'
import axios from 'axios';
import { API_KEY, BASE_URL, config } from '../utils/utils'
import Modal from 'react-modal';
import '../styles/GameDetail.css'

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
    borderRadius:'1rem',
    padding: '0px'
  },
};

const GameDetail = ({ modalState, setModalState }) => {
  const [gameDetail, setGameDetail] = useState({})

  function afterOpenModal() {
    if (modalState.state) {
      document.body.style.overflow = 'hidden';

      getGameDetail(modalState.gameId)
    }
  }

  function closeModal() {
    document.body.style.overflow = 'unset';

    const newState = {
      state: false,
    }

    setGameDetail({})
    setModalState(newState);
  }
  
  Modal.setAppElement('#root');

  const getGameDetail = async (gameId) => {
    try {
      const res = await axios.get(BASE_URL + 'games/' + gameId,{
        params:{
          key: API_KEY,
        },
        config : config
      })

      setGameDetail(res.data)
    } catch (error) {
      console.log("Error obteniendo detalles del juego.")
    }
  }

  return (
    <div>
      <Modal
        isOpen={modalState.state}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Game Details"
      >
        <div className='modalContent'>
          <section  style={{
            backgroundImage: `url(${modalState.background_image})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            opacity: '0.2',
            width:'100%',
            height:'100%'}} >
              <p>{gameDetail.description_raw}</p>
              
          </section>
        </div>
      </Modal>
    </div>
  )
}

export default GameDetail