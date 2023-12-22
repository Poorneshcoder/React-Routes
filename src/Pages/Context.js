import React, { useContext, useState } from 'react';
import { ReducerContext } from '../App';

const Context = () => {
 // const [data, setData] = useState([1,2,3,4]);
  const [state, dispatch] = useContext(ReducerContext);


  const [field, setField] = useState("");

  const handleAddition = () =>{
    // setData([...data, field]);
    dispatch({type:"add-value", payload:field});
  }
  return (
    <div>
      <input type='text' value={field} onChange={(e)=>setField(e.target.value)} />
      <button onClick={handleAddition} >add me</button>
      <ul>{state.datas.map((item,index)=><li key={index}>{item}</li>)}</ul>
    </div>
  )
}

export default Context;
