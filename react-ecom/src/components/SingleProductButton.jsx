import React from 'react'

export default function SingleProductButton({fetchDeleteProduct, fetchUpdateProduct}) {
    
  return (
    <div className="buttonUser">
      <button onClick={fetchDeleteProduct}>
        DELETE
      </button>
      <button onClick={fetchUpdateProduct}>
        UPDATE
      </button>
    </div>
  )
}
