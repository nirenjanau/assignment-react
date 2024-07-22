import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import '../assets/style.css'

export default function DisplayCategories() {
  const [item, setItems] = useState([])
  const [data, setData] = useState([])

  
  useEffect(() => {
    fetch('https://fakestoreapi.com/products/categories')
    .then(response => response.json())
    .then(data => {
      setData(data)
    })
    .catch(error => {
      console.error('Error fetching the data', error)
    })
  }, [])

  const fetchCategoriesItems = () => {
    fetch('https://fakestoreapi.com/products/category/jewelery')
    .then(response => response.json())
    .then(item => {
      setItems(item)
    })
    .catch(error => {
      console.error('Error fetching the data', error)
    })
    function getFetch(url, params = {}) {
      return axios ({
        url: url,
        method:'GET',
        params: params
      })
        .then(response => response.data)
        .then(data => setData(data))
      }

    return (
      <div className="display-product">
        {item.map((product) => (
          <table className="product-table">
            <tbody key={product.id} id="product-body">
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
    )
  }

  return (
    <div className="display-category">
      <div className="category">
        {data.map((product) => (
          <div key={product.id}>
            <div id="body-category"> 
              <h2 onClick={fetchCategoriesItems}>{product}</h2>
            </div>
          </div>
        ))}
      </div>
      <div id="items">
        {fetchCategoriesItems()}
      </div>
    </div>
  )
}