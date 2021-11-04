import React, { useContext } from 'react'
import { CalcContext } from '../../contexts/CalcContext';

const Screen: React.FC = () => {
  const { mainText, screenText } = useContext(CalcContext);
  return (
    <div className='calculator-screen'>
      <div className='last-text'>{screenText}</div>
      <div className='new-text'>{mainText}</div>
    </div>
  )
}

export default Screen
