import React, { useState } from 'react'

import AdvertisementCard from '../../components/AdvertisementCard'
import NavBar from '../../components/NavBar'

import './index.scss'

const City = ({ history }) => {
  const [ advertisement, setAdvertisement ] = useState({
    title: '겨울에도 꿀잼 보장',
    arr: [
      {
        image: 'https://d2ur7st6jjikze.cloudfront.net/offer_photos/72166/443926_medium_1578559507.jpg?1578559507',
        title: '[펭수 그립톡 한정판] 비발디파크 스노위랜드 종일권/AFTER2 이용권 (~1/31)',
        breadcrumb: '티켓/교통패스 ・ 강원도',
        cost: '27,000원'
      },
      {
        image: 'https://d2ur7st6jjikze.cloudfront.net/offer_photos/72166/443926_medium_1578559507.jpg?1578559507',
        title: '[펭수 그립톡 한정판] 비발디파크 스노위랜드 종일권/AFTER2 이용권 (~1/31)',
        breadcrumb: '티켓/교통패스 ・ 강원도',
        cost: '27,000원'
      },
      {
        image: 'https://d2ur7st6jjikze.cloudfront.net/offer_photos/72166/443926_medium_1578559507.jpg?1578559507',
        title: '[펭수 그립톡 한정판] 비발디파크 스노위랜드 종일권/AFTER2 이용권 (~1/31)',
        breadcrumb: '티켓/교통패스 ・ 강원도',
        cost: '27,000원'
      }
    ]
  })

  const createAdvertisement = (obj) => {
    return (
      <div className='advertisement-wrapper'>
        <div className='name-wrapper'>
          <h2 className='name'>{obj.title}</h2>
        </div>
        <div className='advertisement-contents'>
          <ul>
            {obj.arr.map((advertisement) => (
              <li>
                <AdvertisementCard
                  image={advertisement.image}
                  title={advertisement.title}
                  breadcrumb={advertisement.breadcrumb}
                  cost={advertisement.cost}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    )
  }

  return (
    <div>
      <NavBar
        isCity={true}
        cityImage='https://d2ur7st6jjikze.cloudfront.net/landscapes/4720_medium_square_1535703132.jpg?1535703132'
        country='일본'
        cityName='오사카'
      />

      {createAdvertisement(advertisement)}
    </div>
  )
}

export default City
