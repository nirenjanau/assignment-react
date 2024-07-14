import '../assets/style.css'

export default function CartButtons({handleDateRange, handleLimit, handleSort, handleUserCart, fetchAdd}) {
  return (
    <div className="buttonCart">
      <button onClick={handleLimit}>
        LIMIT
      </button>
      <button onClick={handleSort}>
        SORT
      </button>
      <button onClick={fetchAdd}>
        ADD
      </button>
      <button onClick={handleDateRange}>
        DATE RANGE
      </button>
      <button onClick={handleUserCart}>
        USER CART
      </button>
    </div>
  );
}

