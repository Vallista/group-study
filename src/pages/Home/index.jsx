import React from 'react'
import './index.css'

import Button from '../../components/Button'

// 함수형 컴포넌트이다.
// 함수형 컴포넌트 일때는 상태를 사용하지 못한다. (하지만 신규 기능으로 추가 되었따.)
// 상태를 추가하려면, 클래스 컴포넌트로 변경을 해야한다.
class Home extends React.Component {
  state = {
    inputValue: '',
    buttonArray: [
      [ 'AC', '', '%', '/' ],
      [ '7', '8', '9', '*' ],
      [ '4', '5', '6', '-' ],
      [ '1', '2', '3', '+' ],
      [ '', '0', '.', '=' ]
    ]
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

  createButtonElements = (arr) => {
    // react에서 반환 값으로 소괄호를 넣어주면 소괄호 영역 안에 html 코드를 작성할 수 있다! (중요)
    return (
      <ul className='row'>
        {arr.map((data, index) => (
          <li className='row-item' key={index}>
            <Button className='item-button' onClick={this.onClick} text={data} />
          </li>
        ))}
      </ul>
    )
  }

  render() {
    return (
      <div className='calculator'>
        <div className='input-layer'>
          <input className='input' value={this.state.inputValue} />
        </div>
        <div className='button-layer'>
          {this.createButtonElements(this.state.buttonArray[0])}
          {this.createButtonElements(this.state.buttonArray[1])}
          {this.createButtonElements(this.state.buttonArray[2])}
          {this.createButtonElements(this.state.buttonArray[3])}
          {this.createButtonElements(this.state.buttonArray[4])}
        </div>
      </div>
    )
  }
}

export default Home
