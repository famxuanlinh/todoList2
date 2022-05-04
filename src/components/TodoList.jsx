import React, { memo } from 'react'
import Todo from './Todo'

const TodoList = memo(props => { //stylist component
    const { todoList } = props
    return (
        <section className='main'>
            <input className='toggle-all' />
            <label htmlFor='toggle-all'></label>
            <ul className='todo-list'>
                {todoList.map(todo => <Todo {...{ todo }} />)}

            </ul>
        </section>
    )
})

export default TodoList