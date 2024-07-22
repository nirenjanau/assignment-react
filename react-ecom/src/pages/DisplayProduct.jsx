import { Link } from 'react-router-dom'
import { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'


import Button from '../components/Button'

import  '../assets/style.css'

export default function DisplayProducts() {
  const [data, setData] = useState([])

  useEffect(() => {
    fetchData()
  }, [])
  
  const fetchData = () => {
		getFetch('https://fakestoreapi.com/products')
  }

  const fetchAdd = () => {
    fetch('https://fakestoreapi.com/products', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify( {
        title: 'test product',
        price: 13.5,
        description: 'lorem ipsum set',
        image: 'https://i.pravatar.cc',
        category: 'electronic'
      })
    })
    .then(response => response.json())
    .then(newProduct => {
      setData([...data, newProduct])
    })
    .catch(error => {
      console.error('Errror fetching the data', error)
    })
  }

  const handleLimit = () => {
    getFetch('https://fakestoreapi.com/products', {
			limit: 5
		})
  }

  const handleSort = () => {
    getFetch('https://fakestoreapi.com/products', {
			sort: 'desc'
		})
  }


	function getFetch(url, params = {}) {
	return axios ( {
		url: url,
		method:'GET',
		params: params
	})
		.then(response => response.data)
		.then(data => setData(data))
	}

  
  return(
    <div className="container-product">
      <div className="text-product">
        <h1>
          Welcome to Dazzledrobe <br /> 
          🌟 Dive into a world of amazing deals and fabulous finds.
          Happy shopping! 🛒✨
        </h1>
      </div>
      <Button 
        handleLimit={handleLimit}
        handleSort={handleSort}
        fetchAdd={fetchAdd}
      />
      
      <div className="display-product">
        {data.map((product) => (
          <table key={product.id} className="product-table" >
            <tbody id="product-body">
              <tr className="column">
                <td>
                  <img src={product.image} alt={product.name} width='45%' />
                </td>
                <td>
                  <h4>{product.title}</h4>
                </td>
                <td>
                  <h4>{product.category}</h4>
                </td>
                <td className="button-product">
                  <h3 className="price">${product.price}</h3>
                  <button className="price">
                    <h3>
                      <Link to='/singleproduct'>VIEW</Link>
                    </h3>
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        ))}
      </div>
    </div>
  )
}

