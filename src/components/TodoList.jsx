import React from 'react'
import Todo from './Todo'

function TodoList(props) {
    // console.log(props)
    return (
        <div>
            <div className="todo-container">
                <ul className="todo-list">
                    {props.filteredTodos.map((t,idx) => 
                        <Todo displayTodo={t} todos={props.todos} setTodos={props.setTodos} key={idx}/>
                    )}
                    
                </ul>
            </div>
            
        </div>
    )
}

export default TodoList
