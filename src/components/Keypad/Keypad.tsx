import React from 'react'
import Button from '../Button/Button'

const Keypad: React.FC = () => {

  return (
    <div className='calculator-keypad'>
      <Button isNumber={true} isOperator={false} value="7">7</Button>
      <Button isNumber={true} isOperator={false} value="8">8</Button>
      <Button isNumber={true} isOperator={false} value="9">9</Button>
      <Button isNumber={false} isOperator={true} value="DEL" className='delete'>DEL</Button>
      <Button isNumber={true} isOperator={false} value="4">4</Button>
      <Button isNumber={true} isOperator={false} value="5">5</Button>
      <Button isNumber={true} isOperator={false} value="6">6</Button>
      <Button isNumber={false} isOperator={true} value="+">+</Button>
      <Button isNumber={true} isOperator={false} value="1">1</Button>
      <Button isNumber={true} isOperator={false} value="2">2</Button>
      <Button isNumber={true} isOperator={false} value="3">3</Button>
      <Button isNumber={false} isOperator={true} value="-">-</Button>
      <Button isNumber={true} isOperator={false} value=".">.</Button>
      <Button isNumber={true} isOperator={false} value="0">0</Button>
      <Button isNumber={false} isOperator={true} value="/">/</Button>
      <Button isNumber={false} isOperator={true} value="*">x</Button>
      <Button isNumber={false} isOperator={true} value="RESET" className='reset'>RESET</Button>
      <Button isNumber={false} isOperator={true} value="=" className='equal'>=</Button>
    </div>
  )
}

export default Keypad
