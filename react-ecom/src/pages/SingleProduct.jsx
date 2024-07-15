import { useEffect, useState } from 'react'

import Navbar from '../components/Navbar'
import SingleProductButton from '../components/SingleProductButton'

import '../assets/style.css'

export default function SingleProduct() {
  const [data, setData] = useState([])

  useEffect(() => {
    fetch('https://fakestoreapi.com/products/1')
    .then(response => response.json())
    .then(data => {
      setData(data)
    })
    .catch(error => {
      console.error('Errror fetching the data', error)
    })
  }, [])

  const fetchDeleteProduct = () => {
    fetch('https://fakestoreapi.com/products/6', {
      method: 'DELETE'
    })
    .then(response => response.json())
    .then(data => {
      setData(data)
    })
    .catch(error => {
      console.error('Errror fetching the data', error)
    })
  }

  const fetchUpdateProduct = () => {
    fetch('https://fakestoreapi.com/products/7', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body:JSON.stringify( {
        title: 'test product',
        price: 13.5,
        description: 'lorem ipsum set',
        image: 'https://i.pravatar.cc',
        category: 'electronic'
      })
    })
    .then(response => response.json())
    .then(data => {
      setData(data)
    })
    .catch(error => {
      console.error('Errror fetching the data', error)
    })
    
    fetch('https://fakestoreapi.com/products/7', {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        title: 'test product',
        price: 13.5,
        description: 'lorem ipsum set',
        image: 'https://i.pravatar.cc',
        category: 'electronic'
      })
    })
    .then(response => response.json())
    .then(data => {
      setData(data)
    })
    .catch(error => {
      console.error('Errror fetching the data', error)
    })
  }
  
  return (
    <div className="display-single-product">
      <Navbar />
      <SingleProductButton
        fetchDeleteProduct={fetchDeleteProduct}
        fetchUpdateProduct={fetchUpdateProduct}
      /> 
      <div className="container">
        <div className="product-img">
          <img src={data.image} width="50%" />
        </div>
        <div className="product-details">
          <h1>{data.title}</h1>
          <h2>CATEGORY : {data.category}</h2>
          <h2>DISCRIPTION : {data.description}</h2>
          <div className="button-product">
            <h2 className="price">Buy:${data.price}</h2>
            <h2 className="price">Add to Cart</h2>
          </div>
        </div>
      </div>
    </div>
  )
}
