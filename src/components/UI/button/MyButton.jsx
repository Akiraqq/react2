import React from 'react';
import module from './MyButton.module.css';
const MyButton = ({ children, ...props }) => {
  return <button className={module.myBtn}>{children}</button>;
};

export default MyButton;
