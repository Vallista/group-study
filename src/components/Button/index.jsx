import React from 'react'

// 컴포넌트 간 통신 하는 방법: 받는쪽에서 컴포넌트 데이터 받기
const Button = ({ text, className, onClick }) => {
  return (
    <button
      className={className}
      onClick={() => {
        onClick(text)
      }}
    >
      {text}
    </button>
  )
}

export default Button
