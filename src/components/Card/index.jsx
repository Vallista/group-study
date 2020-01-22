import React from 'react'

import './index.scss'

const Card = ({ text, image }) => {
  return (
    <div className='card' style={{ backgroundImage: `url(${image})` }}>
      <span>{text}</span>
    </div>
  )
}

export default Card
