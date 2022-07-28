import React from 'react'
import module from './MyButton.module.css'
const MyButton = ({ children, onClick, style }) => {
  return (
    <button style={style} onClick={onClick} className={module.myBtn}>
      {children}
    </button>
  )
}

export default MyButton
