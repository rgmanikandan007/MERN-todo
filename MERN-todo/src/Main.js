import React, { useState } from 'react'
import axios from 'axios'

const Main = () => {
  const[task, setTask] = useState()

  const handleAdd = () => {
    axios.post('http://localhost:3001/add', {task: task})
    .then(result => console.log(result))
    .catch(err => console.log(err))
  }
  return (
    <div className='main-container'>
        <input type='text' placeholder='Please Enter' onChange={(e)=> setTask(e.target.value)} />
        <button type='submit' onClick={handleAdd}>Add</button>
    </div>
  )
}

export default Main