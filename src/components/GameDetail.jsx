import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { API_KEY, BASE_URL, config } from '../utils/utils'
import Modal from 'react-modal';
import '../styles/GameDetail.css'
import { ClipLoader } from 'react-spinners';

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

  const [platform, setPlatform] = useState("")
  const [genre, setGenre] = useState("")
  const [developer, setDeveloper] = useState("")
  const [publisher, setPublisher] = useState("")

  const [isLoading, setIsLoading] = useState(true)

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

    setIsLoading(true)
    setGameDetail({})
    setModalState(newState);
  }

  const getGameDetail = async (gameId) => {
    try {
      const res = await axios.get(BASE_URL + 'games/' + gameId,{
        params:{
          key: API_KEY,
        },
        config : config
      })

      setIsLoading(false)
      setGameDetail(res.data)
    } catch (error) {
      console.log("Error obteniendo detalles del juego.")
    }
  }

  useEffect(() => {
    let auxArray = []
    if (gameDetail.platforms)
      auxArray = gameDetail.platforms.map(platform => platform.platform.name);

    setPlatform(auxArray.join(", "))

    auxArray = []
    if (gameDetail.genres)
      auxArray = gameDetail.genres.map(genre => genre.name);

    setGenre(auxArray.join(", "))

    auxArray = []
    if (gameDetail.developers)
      auxArray = gameDetail.developers.map(developer => developer.name);

    setDeveloper(auxArray.join(", "))

    auxArray = []
    if (gameDetail.publishers)
      auxArray = gameDetail.publishers.map(publisher => publisher.name);

    setPublisher(auxArray.join(", "))

  },[gameDetail])

  Modal.setAppElement('#root');
  return (
    <div>
      <Modal
        isOpen={modalState.state}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Game Details"
      >
        <div className='modalBackground'>
          <section style={{
            backgroundImage: `url(${modalState.background_image})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            opacity: '0.2',
            width:'100%',
            height:'100%'}} >
          </section>
        </div>
        {
          isLoading ?
          <div className='modalContent d-flex justify-content-center align-items-center' style={customStyles}>
            <ClipLoader color='#F8F9FA'/>
          </div>
          :
          <div className='modalContent ' style={customStyles}>
            <div className='text-center pt-3 h-25'>
                <h2><a className='text-light text-decoration-none' href={gameDetail.website} target="_blank">{gameDetail.name}</a></h2>
            </div>

            <div className='d-flex flex-column justify-content-center h-75'>
              <div className='col-12 text-center d-flex justify-content-center gap-2'>
                <div className='col-5'>
                  <strong className='text-light mb-0'>Platforms</strong>
                  <div className='detailSection text-light'>
                    {platform}
                  </div>
                </div>
                <div className='col-5'>
                  <strong className='text-light mb-0'>Genre</strong>
                  <div className='detailSection text-light'>
                    {genre}
                  </div>
                </div>
              </div>
              <div className='col-12 text-center mt-2 d-flex justify-content-center gap-2'>
                <div className='col-5'>
                  <strong className='text-light mb-0'>Developer</strong>
                  <div className='detailSection text-light'>
                    {developer}
                  </div>
                </div>
                <div className='col-5'>
                  <strong className='text-light mb-0'>Publisher</strong>
                  <div className='detailSection text-light'>
                    {publisher}
                  </div>
                </div>
              </div>
            </div>
          </div>          
        }

      </Modal>
    </div>
  )
}

export default GameDetail