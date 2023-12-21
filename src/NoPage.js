import React from 'react'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'

const NoPage = () => {
    const history = useHistory();
  return (
    <div>
      <h1>Hey! you lost your way clicked a wrong url</h1>
      <h1>404 Error</h1>
      <p>To Navigate right page click on button</p>
      <button
      onClick={()=>history.push("/")}
      >Got to Home</button>
    </div>
  )
}

export default NoPage;
