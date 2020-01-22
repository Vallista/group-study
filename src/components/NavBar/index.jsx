import React from 'react'
import LogoImage from '../../assets/logo.png'

import './index.scss'

const NavBar = ({ isCity = false, cityImage = null, country = '일본', cityName = '오사카' }) => {
  return (
    <div
      className='nav-header'
      style={
        isCity === true && {
          backgroundColor: 'transparent',
          backgroundImage: `url(${cityImage})`,
          height: '160px',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover'
        }
      }
    >
      <div className='nav' style={isCity === true && { backgroundColor: 'rgba(0,0,0,0.3)' }}>
        <img
          className='hamburger'
          src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAAApJJREFUaAXtVj9vGjEcPftADBESCwtDhjRKojJG2SqFD4DaCYYMkfgKfIHA12BPl9toP0BXhqwsTbmlZbmhoCtCQuEufr6zY66mQ5KeT4otGf+5n/F7z787P8exxSpgFbAKWAXesgJEQx5zomoeG5mK013Rij6fKmXgADhttVokDE/I0dFvHcHMknyGnhdEjvONVV4kCRUg6XQ6dDqdupPJ5Mp13eMoitTn+SDV7EIpjbfb7X2/378djUYggSpJiCUg4K7X6+u4oGWz2VwzsC6rUliaoucTQRAQxlQ+FMyK0irYJEbxDuA4CMv9qN1u347HX0m5XD5mJyUDzZJACkXfLy8/fGY4gFW8C09HAQIsc5xut0tnsxk/meVyKU7IGP5KpcJzvV6vR6zGnuftJQCQXHEQGQ6HBVE/0W4wGKAD8JwQBig6kLq5JNr87w5483AsAn0KQRc1jdS+Kc3+yn0BJAsO4/TL02HdgJyfn2RjxNr/3t7dNdKcH2AvQUK0fH8VHPq4C2gQ1Onh4R+yWCw4GXYDqnF8YV4/1WqVf/PxGVX8kLwHVBzcSvi+f8Y80H3R3AQwMadwygBrrQQnAivRaDQ+EkLeqcyK0AemWq32KYtl56bFTTefz8dM/R/ZQNNjYPL9X19SHOm74TjCC/H5ZrMZ93o9HNX71WpFHx4ujOX+k2A/nVKpEh8cBLASyH0JHjEqQN6HjYAfQjohIAxDNQZTuRX2Akuwig/a+xUCMAVsspbxMeaLEvtzwxAosP5xAjpld1bqAnKYS5TMYSO7xXMU2Jci6rzaf84er7EGaaRNpSw4jK0Xeg3JxX9YLySUMN1aL2TuBKwXsl7opdmnvcBe+qd2vVXAKmAVsApwBR4BFCTqVJ88d1YAAAAASUVORK5CYII='
          alt='hamburger'
        />
        <img className='logo' src={LogoImage} alt='my-real-trip' />
        <img
          className='search'
          src='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDIwIDIwIj4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCIgc3Ryb2tlPSIjRkZGIiBzdHJva2Utd2lkdGg9IjEuNSI+CiAgICAgICAgPHBhdGggZD0iTTguNjY3IDE0LjU4M2E1LjkxNSA1LjkxNSAwIDAgMCA1LjkxNi01LjkxNkE1LjkxNSA1LjkxNSAwIDAgMCA4LjY2NyAyLjc1IDUuOTE1IDUuOTE1IDAgMCAwIDIuNzUgOC42NjdhNS45MTUgNS45MTUgMCAwIDAgNS45MTcgNS45MTZ6Ii8+CiAgICAgICAgPHBhdGggc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBkPSJNMTMuMTExIDEzLjExMWw0LjQ0NSA0LjQ0NSIvPgogICAgPC9nPgo8L3N2Zz4K'
          alt='search'
        />
      </div>
      {isCity === false && (
        <div className='categories'>
          <ul>
            <li>
              <span>투어&티켓</span>
            </li>
            <li>
              <span>항공권</span>
            </li>
            <li>
              <span>숙소</span>
            </li>
            <li>
              <span>특가여행</span>
            </li>
            <li>
              <span>여행준비</span>
            </li>
          </ul>
        </div>
      )}
      {isCity === true && (
        <div className='city-header'>
          <p className='city-country'>{country}</p>
          <h1 className='city-name'>{cityName}</h1>
        </div>
      )}
    </div>
  )
}

export default NavBar
