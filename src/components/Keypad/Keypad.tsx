import React from 'react'

const Keypad: React.FC = () => {
  return (
    <div className='calculator-keypad'>
      <button>7</button>
      <button>8</button>
      <button>9</button>
      <button className='delete'>DEL</button>
      <button>4</button>
      <button>5</button>
      <button>6</button>
      <button>+</button>
      <button>1</button>
      <button>2</button>
      <button>3</button>
      <button>-</button>
      <button>.</button>
      <button>0</button>
      <button>/</button>
      <button>X</button>
      <button className='reset'>RESET</button>
      <button className='equal'>=</button>
    </div>
  )
}

export default Keypad
