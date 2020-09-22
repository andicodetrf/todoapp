import React from 'react'

function Todo(props) {
    // console.log(props)
    const isCompleted = () => {
        
        let updatedTodos = props.todos.map(el => {
            if(el.id === props.displayTodo.id){
                el.completed = !el.completed
            }
            return el
        })

        // console.log(updatedTodos)
        props.setTodos(updatedTodos)

    }

    const deleteHandler = () => {
        let remainingTodo = props.todos.filter(el => el.id !== props.displayTodo.id)

        props.setTodos(remainingTodo)
    }

        //destructure displayTodo
        const {displayTodo} = props
    
    return (
        
        <div>
            <div className="todo">

                <li className={`todo-item ${displayTodo.completed? "completed" : "" }`}>
                    {displayTodo.text}
                </li>
                <button className= "complete-btn" onClick={isCompleted}>
                    <i className="fas fa-check" ></i>
                </button>
                <button className="trash-btn" onClick={deleteHandler}>
                    <i className="fas fa-trash"></i>
                </button>
            </div>
        </div>
    )
}

export default Todo
