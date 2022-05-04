import React, { memo, useState } from 'react'

const Header = memo(props => { //memo nó xử lý ktra lifecycle luôn
  const [text, setText] = useState('')
  const { addTodo } = props
  const onAddTodo = (e = {}) => {
    if (e.key === 'Enter' && text) { // 1. Ấn enter ra Text rồi. Giờ chuyền text sang todo
      addTodo({
        id: new Date().valueOf(),
        text,
        isCompleted: false
      })
      setText('') // Khi enter sẽ set lại trống
    }
  }
  return (
      <header className='header'>
        <h1 className=''>todos</h1>
        <input 
        className='new-todo' 
        value={text} //2. Chuyền text lên đây
        onChange={(e) => setText(e.target.value)} //1. Lấy đc text
        onKeyPress={(e) => onAddTodo(e)}
        />
      </header>
  )
})

export default Header