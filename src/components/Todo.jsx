import React, { memo } from 'react'

const Todo = memo(props => {
    const { todo } = props
    return (
        <li>
            <div className='view'>
                <input className='toggle' check={todo.isCompleted} />
                <label>{todo.text}</label>
                <button className='destroy'></button>
            </div>
        </li>
    )
})

export default Todo