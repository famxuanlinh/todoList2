import React, { memo, useState } from 'react'

const Todo = memo(props => { // memo sẽ check xem cái component có thay đổi hay ko. Nếu ko thay đổi sẽ ko render lại
    const { todo, getTodoEditingId, todoEditingId } = props
    const isEditing = todoEditingId === todo.id
    const [text, setText] = useState(todo.text) // Để khi doubleClick vào thì mình lấy chính giá trị của cái todo đó
    return (
        <li className={`${isEditing ? 'editing' : ''} ${todo.isCompleted ? 'completed' : ''}`}>

            {!isEditing ?
                //onDoubleClick thì mình gửi id (getTodoEditingId) lên để check id có trùng với cái đang sửa ko
                <div className='view'>
                    <input className='toggle' type='checkbox' checked={todo.isCompleted} />
                    <label onDoubleClick={() => getTodoEditingId(todo.id)}>{todo.text}</label>

                    <button className='destroy'></button>
                </div> :
                <input
                    className='toggle'
                    type='checkbox'
                    value={text} />
            }
        </li>
    )
})

export default Todo