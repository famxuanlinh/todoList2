import React, { memo } from 'react'

const Header = memo(() => { //memo nó xử lý ktra lifecycle luôn
  return (
      <header className='header'>
        <h1 className=''>todos</h1>
        <input className='new-todo'></input>
      </header>
  )
})

export default Header