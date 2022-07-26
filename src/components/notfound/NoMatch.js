import React from 'react'
import "./nomatch.css"
import notfound from "../../assets/notfound.svg"

const NoMatch = () => {
  return (
    <div className='notfound'>
    <div>
      <img src={notfound} alt="404 not found" />
    </div>
    <h1>Page Not Found!<br/>Go Jogging...</h1>
    </div>
  )
}

export default NoMatch