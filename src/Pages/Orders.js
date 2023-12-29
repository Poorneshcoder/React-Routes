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

    const {purchaseProduct, restoreProduct, fetchUserDetails} = bindActionCreators(actionCreators,dispatch);

    const actionAll = bindActionCreators(actionCreators,dispatch);

    console.log(actionAll);

    console.log(reduxState);
    console.log(reduxState.inventory);
    console.log(reduxState.users);

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

      <button
      onClick={()=> fetchUserDetails()}
      >fetch data</button>
    </div>
  )
}

export default Orders
