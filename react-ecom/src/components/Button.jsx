import React from 'react'
import '../assets/style.css'

export default function Button({handleLimit, handleSort, fetchAdd}) {
  return (
    <div className="button-user">
      <button onClick={handleLimit}>
        LIMIT
      </button>
      <button onClick={handleSort}>
        SORT
      </button>
      <button onClick={fetchAdd}>
        ADD
      </button>
    </div>
  )
}