import React from 'react'

export default function SingleCartButton({fetchDeleteCart, fetchUpdateCart}) {
  return (
    <div className="buttonCart">
        <button onClick={fetchDeleteCart}>
          DELETE
        </button>
        <button onClick={fetchUpdateCart}>
          UPDATE
        </button>
    </div>
  )
}

