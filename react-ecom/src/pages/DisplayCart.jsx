import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'


import '../assets/style.css'

import CartButtons from './CartButtons'


export default function DisplayCart() {
  const [data, setData] = useState([])
  const [limit, setLimit] = useState(false)
  const [sort, setSort] = useState(false)
  
  useEffect(() => {
    fetchCart()
  }, [])

  const fetchCart = (url = 'https://fakestoreapi.com/carts') => {
    fetch(url)
    .then(response => response.json())
    .then(data => {
      setData(data)
    })
    .catch(error => {
      console.error("Errror fetching the data", error)
    })
  }
  
  const handleLimit = () => {
    fetchCart('https://fakestoreapi.com/carts?limit=5')
    setLimit(true) 
  }

  const handleSort = () => {
    fetchCart('https://fakestoreapi.com/carts?sort=desc')
    setSort(true) 
  }
  
  const fetchAdd = () => {
    fetch('https://fakestoreapi.com/carts', {
      method:'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify( {
        userId: 5,
        date: 2020-0o2-0o3,
        products: [
          {productId:5, quantity:1}, 
          {productId:1, quantity:5}
        ]
      })
    })
    .then(res => res.json())
    .then(newCart => {
      console.log(newCart)
      setData([...data, newCart])
    })
    .catch(error => {
      console.error('Errror fetching the data', error)
    })
  }

  const handleDateRange = () => {
    fetchCart('https://fakestoreapi.com/carts?startdate=2019-12-10&enddate=2020-10-10')
  }

  const handleUserCart = () => {
    fetchCart('https://fakestoreapi.com/carts/user/2')
  }

  return (
    <div className="container-cart">
      <div className="text-cart">
        <h1>🎉 Welcome, Nirenjana ! 🎉 </h1>
        <h2>
          Your cart is looking fantastic! 🛒✨ <br />
          Ready to make your day even brighter? 
          Let's get these goodies home to you!
        </h2>
      </div>
      <CartButtons 
        handleLimit={handleLimit}
        handleSort={handleSort}
        handleDateRange={handleDateRange}
        handleUserCart={handleUserCart}
        fetchAdd={fetchAdd}
      />
      <table className="display-cart">
        <thead>
          <tr>
            <th className="cart-head">ID</th>
            <th className="cart-head">USER ID</th>
            <th className="cart-head">DATE</th>
            <th className="cart-head">PRODUCTS</th>
          </tr>
        </thead>
        {data.map((cart) => (
          <tbody key={cart.id} className="cart-body">
            <tr className="cart-row">
              <td className="cart-data">
                <Link to='/singlecart'>
                  <h3>{cart.id}</h3>
                </Link>
              </td>
              <td className="cart-data">
                <h3>{cart.userId}</h3>
              </td>
              <td className="cart-data">
                <h3>{cart.date}</h3>
              </td>
              <td className="cart-data" >
                {cart.products.map((product) => (
                  <h3>
                    PRODUCT Id: {product.productId}, QUANTITY: {product.quantity}
                  </h3>
                ))}
              </td>
            </tr>
          </tbody>
        ))} 
      </table>
    </div>
  )
}