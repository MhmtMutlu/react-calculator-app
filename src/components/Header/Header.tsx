import React from 'react'

const Header: React.FC = () => {
  return (
    <div className='calculator-header'>
      <h1 className='calculator-title'>calc</h1>
      <div className='calculator-theme'>
        <span className='theme-title'>THEME</span>
        <div className='themes'>
          <div className='theme-texts'>
            <span>1</span>
            <span>2</span>
            <span>3</span>
          </div>
          <div className='theme-buttons'>
            <input type="radio" name='theme'/>
            <input type="radio" name='theme'/>
            <input type="radio" name='theme'/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
