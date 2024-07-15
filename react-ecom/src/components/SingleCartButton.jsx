import React from 'react'

export default function SingleCartButton({fetchDeleteCart, fetchUpdateCart}) {
  return (
    <div className="button-cart">
      <button onClick={fetchDeleteCart}>
        DELETE
      </button>
      <button onClick={fetchUpdateCart}>
        UPDATE
      </button>
    </div>
  )
}

