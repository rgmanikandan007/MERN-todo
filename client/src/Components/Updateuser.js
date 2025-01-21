import React from 'react'

const Updateuser = () => {
  return (
    <>
     <div className='create-container'>
      <form>
      <h2>Update user</h2>
        <label>Name :</label>
        <input type='text' placeholder='Enter Name'/>
        <label>Email :</label>
        <input type='email' placeholder='Enter Name'/>
        <label>Age :</label>
        <input type='text' placeholder='Enter Name'/>
        <button>Submit</button>
      </form>
     </div>
    </>
  )
}

export default Updateuser