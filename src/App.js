import React, {useState, useEffect} from 'react';
import Form from './components/Form';
import TodoList from './components/TodoList'
import './App.css';


function App() {
  const [inputText, setInputText] = useState("")
  const [todos, setTodos] = useState([])
  const [status, setStatus] = useState('all')
  const [filteredTodos, setfilteredTodos] = useState([])
  
  // console.log(status)

  useEffect(()=> {
    console.log('test useEffect')
    // return () => {
    //   console.log('unmounted')
    // }
  })

  //render, set smth into state. will cause rerender but second arg [] stop it from running however will cause the above UE to run once (due to rerender)
  useEffect(()=> {
    getLocalStore()
    console.log('get LS', todos)
  },[])

    //render, set smth into state. will cause rerender but second arg [x,y] stop it from running until next update however will cause the 1st UE to run once (due to rerender)
  useEffect(() => {
    filteredHandler()
    setLocalStore()
    console.log('todos', todos)
    console.log('status', todos)
  },[todos, status])

  const filteredHandler = () => {
    let completedList = todos.filter(el => el.completed === true) 
    let unCompletedList = todos.filter(el => el.completed === false)
    
    switch(status){
      case 'completed':
        setfilteredTodos(completedList)
        break;
      case 'uncompleted':
        setfilteredTodos(unCompletedList)
        break;
      default:
        setfilteredTodos(todos)
    }
  }

  const setLocalStore = () => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }

  const getLocalStore = () => {
    let getTodos = JSON.parse(localStorage.getItem('todos'))
    setTodos(getTodos)
    // console.log(getTodos)
    
  }

  return (
    <div className="App">
      <header>Andi's React Todo</header>
        <Form setInputText={setInputText} inputText={inputText} todos={todos} setTodos={setTodos} setStatus={setStatus}/>
        <TodoList todos={todos} setTodos={setTodos} filteredTodos={filteredTodos}/>
        
    </div>
  );
}

export default App;
