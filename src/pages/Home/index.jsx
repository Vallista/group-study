import React, { useState } from 'react'

import NavBar from '../../components/NavBar'
import Card from '../../components/Card'
import AdvertisementCard from '../../components/AdvertisementCard'

import './index.scss'

const Home = () => {
  const [ cities, setCities ] = useState([
    {
      name: '오사카',
      image: 'https://d2ur7st6jjikze.cloudfront.net/landscapes/4720_medium_square_1535703132.jpg?1535703132'
    },
    {
      name: '싱가포르',
      image: 'http://www.travel141.co.kr/wp-content/uploads/2017/01/Marina-Bay-Sands-Singapore-Travel141.jpg'
    },
    {
      name: '다낭',
      image: 'https://vietnamguide.co.kr/wp-content/uploads/2018/12/%EB%8B%A4%EB%82%AD-%EB%B0%94%EB%82%98%ED%9E%90.jpg'
    },
    {
      name: '파리',
      image: 'https://cdn.getyourguide.com/img/tour_img-2215792-146.jpg'
    }
  ])

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

  const [ advertisement2, setAdvertisement2 ] = useState({
    title: '마리트 추천! 동남아 핵심투어',
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

  const createCities = (arr) => {
    return (
      <ul>
        {arr.map((city) => (
          <li>
            <Card text={city.name} image={city.image} />
          </li>
        ))}
      </ul>
    )
  }

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
    <div className='home'>
      <NavBar />
      <div className='travel-container'>
        <div className='text-container'>
          <h1 className='title'>어디로 떠나세요?</h1>
        </div>
        <div className='search-container'>
          <input className='search-box' placeholder='여행지나 상품을 검색해보세요!' />
        </div>
      </div>
      <div className='sliding-card'>{createCities(cities)}</div>
      {createAdvertisement(advertisement)}
      {createAdvertisement(advertisement2)}
    </div>
  )
}

export default Home
