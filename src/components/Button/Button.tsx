import React, { useContext } from 'react'
import { CalcContext } from '../../contexts/CalcContext';
import { IButton } from '../../types';

const Button: React.FC<IButton> = ({ children, className, value, isNumber, isOperator }) => {
  const { changeMainText } = useContext(CalcContext);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    let target = event.target as HTMLTextAreaElement;
    changeMainText(target.value, isNumber, isOperator)
  }
  return (
    <button value={value} onClick={handleClick} className={className}>
      {children}
    </button>
  )
}

export default Button
