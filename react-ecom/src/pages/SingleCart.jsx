import { useEffect, useState } from 'react'

import Navbar from '../components/Navbar'
import SingleCartButton from '../components/SingleCartButton'

import '../assets/style.css'

export default function SingleCart() {
  const [data, setData] = useState([])

  useEffect(() => {
    fetch('https://fakestoreapi.com/carts/5')
    .then(response => response.json())
    .then(data => {
      setData(data)
    })
    .catch(error => {
      console.error('Errror fetching the data', error)
    })
  }, [])

  const fetchDeleteCart = () => {
    fetch('https://fakestoreapi.com/carts/6', {
      method: 'DELETE'
    })
    .then(response => response.json())
    .then(data => {
      setData(data)
    })
  }
  
  const fetchUpdateCart = () => {
    fetch('https://fakestoreapi.com/carts/7', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify( {
        userId: 3,
        date: 2019-12-10,
        products: [
          {productId:1, quantity:3}
        ],
      })
    })
    .then(response => response.json())
    .then(data => {
      setData(data)
    })

    fetch('https://fakestoreapi.com/carts/7', {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify ({ 
        userId : 3,
        date: 2019-12-10,
        products: [
          {productId:1, quantity:3}
        ]
      })
    })
    .then(response => response.json())
    .then(data => {
      setData(data)
    })
  }
  
  return (
    <div className="display-single-cart">
      <Navbar />
      <div className="container-cart-single">
        <SingleCartButton
          fetchDeleteCart={fetchDeleteCart}
          fetchUpdateCart={fetchUpdateCart}
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
          <tbody className="cart-body">
            <tr key={data.id} className="cart-row" >
              <td className="cart-data">
                <h3>{data.id}</h3>
              </td>
              <td className="cart-data">
                <h3>{data.userId}</h3>
              </td>
              <td className="cart-data">
                <h3>{data.date}</h3>
              </td>
              <td className="cart-data" >
                {data?.products?.map((product) => (
                  <h3 key= {product.productId}>
                    PRODUCT Id:{product?.productId}, QUANTITY{product?.quantity}
                  </h3>
                ))}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}