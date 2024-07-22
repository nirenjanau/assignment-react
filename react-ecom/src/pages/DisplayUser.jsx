import { useState } from 'react'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

import Button from '../components/Button'

import  '../assets/style.css'

export default function DisplayUser() {
  const [users, setUser] = useState([])

  useEffect(() => {
    fetchData()          
  }, [])

  const fetchData = () => {
    getFetch('https://fakestoreapi.com/users')
  }

  const handleLimit = () => { 
    getFetch('https://fakestoreapi.com/users', {
      limit:5
    })
    
  }

  const handleSort = () => { 
    getFetch('https://fakestoreapi.com/users', {
      sort: 'desc'
    })
  }
  
  const fetchAdd = () => {
    const newUser = {
      email: 'John@gmail.com',
      username: 'johnd',
      password: 'm38rmF$',
      name: {
        firstname: 'John',
        lastname: 'Doe'
      },
      address: {
        city: 'kilcoole',
        street: '7835 new road',
        number: 3,
        zipcode: '12926-3874',
        geolocation: {
          lat: '-37.3159',
          long: '81.1496'
        }   
      },
      phone: '1-570-236-7033'
    }
    fetch('https://fakestoreapi.com/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },  
      body: JSON.stringify(newUser)
    })
    .then(res => {
      if(!res.ok) {
        throw new Error('Network response was not okay')
      }
      return res.json()
    })
    .then(newUser => {
      console.log(newUser)
      setUser([...users, newUser])
    })
    .catch(error => {
      console.error('error fetching data', error)
    })
  }

  function getFetch(url, params = {}) {
    return axios ( {
      url: url,
      method:'GET',
      params: params
    })
      .then(response => response.data)
      .then(user => setUser(user))
    }
  

  return (
    <div className='container-user'>
      <div className='text-user'>
        <h1>Welcome to your account dashboard!</h1>
      </div>
      <Button
        handleLimit={handleLimit}
        handleSort={handleSort}
        fetchAdd={fetchAdd}
      />
      <table className="display-user">
        <thead>
          <tr>
            <th className="user-head">ID</th>
            <th className="user-head">EMAIL</th>
            <th className="user-head">USERNAME</th>
            <th className="user-head">PASSWORD</th>
            <th className="user-head">NAME</th>
            <th className="user-head-address">ADDRESS</th>
            <th className="user-head">PHONE</th>
          </tr>
        </thead>
        {users.map((user) => (
          <tbody key={user.id} className="user-body" >
            <tr className="user-row">
              <td className="user-data">
                <Link to='/singleuser'>
                  <h3>{user?.id}</h3>
                </Link>
              </td>
              <td className="user-data">
                <h3>{user?.email}</h3>
              </td>
              <td className="user-data">
                <h3>{user?.username}</h3>
              </td>
              <td className="user-data">
                <h3>{user?.password}</h3>
              </td>
              <td className="user-data">
                <h3>{user?.name?.firstname} {user?.name?.lastname}</h3>
              </td>
              <td className="user-data-address">
                <h3>
                  {user?.address?.city} {user?.address?.street} 
                  {user?.address?.number} 
                  {user?.address?.zipcode} {user?.address?.geolocation?.lat} 
                  {user?.address?.geolocation?.long}
                </h3>
              </td>
              <td className="user-data">
                <h3>{user?.phone}</h3>
              </td>
            </tr>
          </tbody>
        ))}
      </table>
    </div>
  )
}
