import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const Updateuser = () => {
  const { id } = useParams()
  const [name, setName] = useState()
  const [email, setEmail] = useState()
  const [age, setAge] = useState()
  const navigate = useNavigate()

  useEffect(()=>{
    axios.get('http://localhost:3001/getUser/'+id)
    .then(result => {console.log(result)
      setName(result.data.name)
      setEmail(result.data.email)
      setAge(result.data.age)
    })
    .catch(err => console.log(err)) 
  },[])

  const updateSubmit = (e) => {
    e.preventDefault();
    axios.put("http://localhost:3001/updateUser/"+id, {name, email, age})
    .then(result => {console.log(result)
      navigate('/')
    })
    .catch(err => console.log(err))
  }

  return (
    <>
      <div className='create-container'>
        <form onSubmit={updateSubmit}>
          <h2>Update user</h2>
          <label>Name :</label>
          <input type='text' placeholder='Enter Name' value={name} onChange={(e) => {setName(e.target.value)}}/>
          <label>Email :</label>
          <input type='email' placeholder='Enter Email' value={email} onChange={(e) => {setEmail(e.target.value)}}/>
          <label>Age :</label>
          <input type='text' placeholder='Enter Age' value={age} onChange={(e) => {setAge(e.target.value)}}/>
          <button>Submit</button>
        </form>
      </div>
    </>
  )
}

export default Updateuser