import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { bindActionCreators } from 'redux';
import { actionCreators } from '../Redux/ReduxAction/actionCreators';

const Orders = () => {
  // variables for the function......
    const reduxState = useSelector((state)=>state);
    const dispatch = useDispatch();
    // const purchaseDispatch = useDispatch(purchaseProduct)
    // const restoreDispatch = useDispatch(restoreProduct)

    // const allActions = bindActionCreators(actionCreators, dispatch);
    // console.log(allActions);

    const {purchaseProduct, restoreProduct} = bindActionCreators(actionCreators,dispatch);

    console.log(reduxState);

    const [restore, setRestore] = useState();
    const [purchase, setPurchase] = useState();
  return (
    <div>
      <h1>Number of Orders</h1>
      overall inventory : {reduxState.inventory} {' '}
      <div>
        <input
        value={restore}
        placeholder='restore'
        onChange={(e)=>setRestore(e.target.value)}
        />

        <input
        value={purchase}
        placeholder='purchase'
        onChange={(e)=>setPurchase(e.target.value)}
        />
      </div>
      <button
      onClick={()=>restoreProduct(restore)}
      >add inventory</button>
      {" "}
      <button
      onClick={()=>purchaseProduct(purchase)}
      >purchase order</button>
    </div>
  )
}

export default Orders
