import React from 'react'

export default function SingleProductButton({fetchDeleteProduct, fetchUpdateProduct}) {
    
  return (
    <div className="button-user">
      <button onClick={fetchDeleteProduct}>
        DELETE
      </button>
      <button onClick={fetchUpdateProduct}>
        UPDATE
      </button>
    </div>
  )
}
