import React from 'react'

function Form(props) {
    // console.log(props)

    const inputTextHandler = (e) => {
        //call the function in App.js
        // console.log(e.target.value)
        props.setInputText(e.target.value)
    }

    const inputTextSubmit = (e) => {
        //call the function in App.js & pass value
        e.preventDefault()
        props.setTodos([...props.todos, {text: props.inputText, completed: false, id: (Math.random()*1000).toFixed(0)}
        ]);
        props.setInputText("");
    }

    const selectionHandler = (e) => {
        // console.log(e.target.value)
        props.setStatus(e.target.value)
    }

    return (

            <form>
                <input type="text" value={props.inputText} className="todo-input" onChange={inputTextHandler}/>
                    <button type="submit" className="todo-button"  onClick={inputTextSubmit} >
                    <i className="fas fa-plus-square"></i>
                </button>
                <div className="select">
                    <select onChange={selectionHandler} name="todos" className="filter-todo">
                        <option value="all">All</option>
                        <option value="completed">Completed</option>
                        <option value="uncompleted">Uncompleted</option>

                    </select>
                </div>
        
            </form>
        
    )
}

export default Form
