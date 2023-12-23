import React from 'react'
import { useSelector } from 'react-redux'

const Orders = () => {
    const reduxState = useSelector((state)=>state);
    console.log(reduxState);
  return (
    <div>
      <h1>Number of Orders</h1>
    </div>
  )
}

export default Orders
