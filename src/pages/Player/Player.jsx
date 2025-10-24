import React from 'react'
import './Player.css'
import BackArrowIcon from '../../assets/back_arrow_icon.png'

const Player = () => {
  return (
    <div className='player'>
      <img src={BackArrowIcon} alt="" />
      <iframe src="https://www.youtube.com/watch?v=lpx2zFkapIk&t=3049s" frameborder="0" width="90%" height="90%" allowFullScreen title='Trailer Video'></iframe>
    </div>
  )
}

export default Player