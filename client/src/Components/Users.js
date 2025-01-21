import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Users = () => {
  const [user, setUser] = useState([{
    name: "Mani",
    email: "mani@gmail.com",
    age: 24
  }])

  return (
    <>
      <div className='users-container'>
        <div>
          <Link to="/create">Add+</Link>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Age</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {
                user.map((user) => {
                  return <tr>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>{user.age}</td>
                    <td><button>Edit</button><button>Delete</button></td>
                  </tr>
                })
              }
            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}

export default Users