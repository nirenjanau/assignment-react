import { useEffect, useState } from 'react'

import Navbar from '../components/Navbar'
import userIcon from '../assets/User-icon.png'
import SingleProductButton from '../components/SingleProductButton'

import '../assets/style.css'

export default function SingleUser() {
  const [user, setData] = useState([])

  useEffect(() => {
    fetch('https://fakestoreapi.com/users/1')
    .then(response => response.json())
    .then(user => {
      setData(user)
      console.log(user)
    })
    .catch(error => {
      console.error('Errror fetching the data', error)
    })
  }, [])

  const fetchDeleteProduct = () => {
    fetch('https://fakestoreapi.com/users/6', {
      method: 'DELETE'
    })
    .then(response => response.json())
    .then(user => {
      setData(user)
    })
    .catch(error => {
      console.error('Errror fetching the data', error)
    })
  }

  const fetchUpdateProduct = () => {
    fetch('https://fakestoreapi.com/users/7', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify( {
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
      })
    })
    .then(response => response.json())
    .then(user => {
      setData(user)
    })
    .catch(error => {
      console.error('Errror fetching the data', error)
    })
  }
  return (
    <div className="display-single-user">
      <Navbar />
      <SingleProductButton
        fetchDeleteProduct={fetchDeleteProduct}
        fetchUpdateProduct={fetchUpdateProduct}
      /> 
      <div className="container-user-single">
        <div className="user-img">
          <img src={userIcon} width="50%"/>
        </div>
        <div className="user-details">
          <h1 className="user-deet">
            {user?.name?.firstname} {user?.name?.lastname}
          </h1>
          <h2>
            <span className="user-deet">
              Address: 
            </span>
            {user?.address?.city} {user?.address?.street} 
            {user?.address?.number} {user?.address?.zipcode} 
            {user?.address?.geolocation?.lat}
            {user?.address?.geolocation?.long} 
          </h2>
          <h3> 
            <span className="user-deet">
              Email:
            </span>
            {user.email} 
          </h3>
          <h3>
            <span className="user-deet">
              Username:
            </span>
            {user.username}
          </h3>
          <h3>
            <span className="user-deet">
              Password:
            </span>
            {user.password}
          </h3>
          <h3>
            <span className="user-deet">
              Phone Number: 
            </span>
              {user.phone}
          </h3>
        </div>
      </div>
    </div>
  )
}
