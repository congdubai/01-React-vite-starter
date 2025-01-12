import './components/todo/todo.css';
import reactLogo from './assets/react.svg';
import TodoNew from './components/todo/todoNew';
import TodoData from './components/todo/todoData';
import { useState } from "react";

const App = () => {
  const [todoList, setTodoList] = useState([
  ])
  const randomIntFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  const addNewTodo = (index) => {
    const newTodo = {
      id: randomIntFromInterval(1, 1000000),
      name: index
    }
    setTodoList([...todoList, newTodo])
  }

  const deleteTodo = (id) => {
    const newTodo = todoList.filter(item => item.id !== id)
    setTodoList(newTodo);
  }

  return (
    <div className="todo-container">
      <div className="todo-title">Todo List</div>
      <TodoNew
        addNewTodo={addNewTodo} />

      {
        todoList.length > 0 ?
          <TodoData
            todoList={todoList}
            deleteTodo={deleteTodo}
          />
          :
          <div className='todo-image'>
            <img src={reactLogo} className='logo' />
          </div>
      }
    </div>
  )
}
export default App
