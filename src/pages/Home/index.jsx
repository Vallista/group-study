import React from 'react'
import './index.css'

// 함수형 컴포넌트이다.
// 함수형 컴포넌트 일때는 상태를 사용하지 못한다. (하지만 신규 기능으로 추가 되었따.)
// 상태를 추가하려면, 클래스 컴포넌트로 변경을 해야한다.
class Home extends React.Component {
  state = {
    inputValue: ''
  }

  // react에서는 class가 아니라 className을 사용한다.
  onClick = (value) => {
    if (value === '=') {
      this.setState({
        inputValue: eval(this.state.inputValue)
      })
    } else {
      this.setState({
        inputValue: this.state.inputValue + value
      })
    }
  }

  render() {
    return (
      <div className='calculator'>
        <div className='input-layer'>
          <input className='input' value={this.state.inputValue} />
        </div>
        <div className='button-layer'>
          <ul className='row'>
            <li className='row-item'>
              <button
                className='item-button'
                onClick={() => {
                  this.onClick('AC')
                }}
              >
                AC
              </button>
            </li>
            <li className='row-item'>
              <button className='item-button' />
            </li>
            <li className='row-item'>
              <button
                className='item-button'
                onClick={() => {
                  this.onClick('%')
                }}
              >
                %
              </button>
            </li>
            <li className='row-item'>
              <button
                className='item-button'
                onClick={() => {
                  this.onClick('/')
                }}
              >
                /
              </button>
            </li>
          </ul>
          <ul className='row'>
            <li className='row-item'>
              <button
                className='item-button'
                onClick={() => {
                  this.onClick('7')
                }}
              >
                7
              </button>
            </li>
            <li className='row-item'>
              <button
                className='item-button'
                onClick={() => {
                  this.onClick('8')
                }}
              >
                8
              </button>
            </li>
            <li className='row-item'>
              <button
                className='item-button'
                onClick={() => {
                  this.onClick('9')
                }}
              >
                9
              </button>
            </li>
            <li className='row-item'>
              <button
                className='item-button'
                onClick={() => {
                  this.onClick('*')
                }}
              >
                *
              </button>
            </li>
          </ul>
          <ul className='row'>
            <li className='row-item'>
              <button
                className='item-button'
                onClick={() => {
                  this.onClick('4')
                }}
              >
                4
              </button>
            </li>
            <li className='row-item'>
              <button
                className='item-button'
                onClick={() => {
                  this.onClick('5')
                }}
              >
                5
              </button>
            </li>
            <li className='row-item'>
              <button
                className='item-button'
                onClick={() => {
                  this.onClick('6')
                }}
              >
                6
              </button>
            </li>
            <li className='row-item'>
              <button
                className='item-button'
                onClick={() => {
                  this.onClick('-')
                }}
              >
                -
              </button>
            </li>
          </ul>
          <ul className='row'>
            <li className='row-item'>
              <button
                className='item-button'
                onClick={() => {
                  this.onClick('1')
                }}
              >
                1
              </button>
            </li>
            <li className='row-item'>
              <button
                className='item-button'
                onClick={() => {
                  this.onClick('2')
                }}
              >
                2
              </button>
            </li>
            <li className='row-item'>
              <button
                className='item-button'
                onClick={() => {
                  this.onClick('3')
                }}
              >
                3
              </button>
            </li>
            <li className='row-item'>
              <button
                className='item-button'
                onClick={() => {
                  this.onClick('+')
                }}
              >
                +
              </button>
            </li>
          </ul>
          <ul className='row'>
            <li className='row-item'>
              <button className='item-button' />
            </li>
            <li className='row-item'>
              <button
                className='item-button'
                onClick={() => {
                  this.onClick('0')
                }}
              >
                0
              </button>
            </li>
            <li className='row-item'>
              <button
                className='item-button'
                onClick={() => {
                  this.onClick('.')
                }}
              >
                .
              </button>
            </li>
            <li className='row-item'>
              <button
                className='item-button'
                onClick={() => {
                  this.onClick('=')
                }}
              >
                =
              </button>
            </li>
          </ul>
        </div>
      </div>
    )
  }
}

export default Home
