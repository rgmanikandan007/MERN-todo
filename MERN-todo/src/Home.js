import React, { useState } from 'react'
import Main from './Main'

const Home = () => {
    const [todos, setTodos] = useState([]);
  return (
    <div>
        <h3>Todo List</h3>
        <Main />
        {
            todos.length === 0 ? 
            <div><h3>No Record</h3></div> :
            todos.map(todo => {
              <div>
                {todo}
              </div>
            })
        }
    </div>
  )
}

export default Home