import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Createuser = () => {
  const [name, setName] = useState()
  const [email, setEmail] = useState()
  const [age, setAge] = useState()

  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("http://localhost:3001/createUser", {name, email, age})
    .then(result => {console.log(result)
      navigate('/')
    })
    .catch(err => console.log(err))
  }

  return (
    <>
     <div className='create-container'>
      <form onSubmit={handleSubmit}>
        <h2>Create user</h2>
        <label>Name :</label>
        <input type='text' placeholder='Enter Name' onChange={(e) => {setName(e.target.value)}}/>
        <label>Email :</label>
        <input type='email' placeholder='Enter Email' onChange={(e) => {setEmail(e.target.value)}}/>
        <label>Age :</label>
        <input type='text' placeholder='Enter Age' onChange={(e) => {setAge(e.target.value)}}/>
        <button>Submit</button>
      </form>
     </div>
    </>
  )
}

export default Createuser