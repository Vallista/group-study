import React from 'react'
import './index.scss'

const AdvertisementCard = ({ image, title, breadcrumb, cost }) => {
  return (
    <div className='advertisement-container'>
      <div className='image-container'>
        <img className='image' src={image} alt='advertisement' />
      </div>
      <div className='advertisement-detail-container'>
        <div className='breadcrumb-container'>
          <p className='breadcrumb'>{breadcrumb}</p>
        </div>
        <div className='title-container'>
          <p className='title'>{title}</p>
        </div>
        <div className='cost-container'>
          <span className='cost'>{cost}</span>
        </div>
      </div>
    </div>
  )
}

export default AdvertisementCard
