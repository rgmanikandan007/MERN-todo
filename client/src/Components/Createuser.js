import React, { useState } from 'react'

const Createuser = () => {
  const [name, setName] = useState()
  const [email, setEmail] = useState()
  const [age, setAge] = useState()

  

  return (
    <>
     <div className='create-container'>
      <form onSubmit={handelSubmit}>
        <h2>Create user</h2>
        <label>Name :</label>
        <input type='text' placeholder='Enter Name' onChange={(e) => {setName(e.target.value)}}/>
        <label>Email :</label>
        <input type='email' placeholder='Enter Name' onChange={(e) => {setEmail(e.target.value)}}/>
        <label>Age :</label>
        <input type='text' placeholder='Enter Name' onChange={(e) => {setAge(e.target.value)}}/>
        <button>Submit</button>
      </form>
     </div>
    </>
  )
}

export default Createuser